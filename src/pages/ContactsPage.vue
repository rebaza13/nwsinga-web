<template>
  <q-page padding>
    <div class="q-mb-lg">
      <div class="row justify-between items-center">
        <h1 class="text-h4 q-my-none">{{ $t('contacts.title') }}</h1>
        <div>
          <!-- Import contacts button added -->
          <q-btn
            color="secondary"
            :label="$t('contacts.importContacts')"
            @click="showImportDialog = true"
            icon="import_contacts"
            flat
            class="q-mr-sm"
          />
          <q-btn
            color="primary"
            :label="$t('contacts.addContact')"
            @click="openContactDialog()"
            icon="person_add"
            unelevated
          />
        </div>
      </div>
    </div>

    <!-- Search and Filter Controls -->
    <div class="q-mb-md">
      <div class="row items-center q-col-gutter-md">
        <div class="col-12 col-sm-8">
          <q-input
            v-model="searchText"
            :placeholder="$t('contacts.searchContacts')"
            outlined
            dense
            clearable
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
        <div class="col-12 col-sm-4" v-if="selectedLetter">
          <q-btn
            color="primary"
            outline
            class="full-width"
            @click="clearLetterFilter"
          >
            <q-icon name="filter_alt_off" class="q-mr-xs" />
            {{ $t('common.clearFilter') }}: {{ selectedLetter }}
          </q-btn>
        </div>
      </div>
    </div>

    <!-- Contacts List with Alphabetical Index -->
    <div v-if="contactStore.loading" class="text-center q-pa-lg">
      <q-spinner color="primary" size="3em" />
      <p class="text-subtitle1 q-mt-sm">{{ $t('common.loading') }}</p>
    </div>

    <div v-else-if="!filteredContactsByLetter || Object.keys(filteredContactsByLetter).length === 0" class="text-center q-pa-lg">
      <q-icon name="people" size="4rem" color="grey-5" />
      <p class="text-subtitle1 q-mt-sm">{{ $t('contacts.noContacts') }}</p>
    </div>

    <div v-else class="contacts-container">
      <!-- Alphabetical Index - now sticky on mobile -->
      <div class="alphabetical-index q-px-sm">
        <div
          v-for="letter in contactStore.availableLetters"
          :key="letter"
          class="letter-item q-my-xs cursor-pointer"
          :class="{
            'active': letter === activeLetter,
            'selected': letter === selectedLetter
          }"
          @click="scrollToLetter(letter)"
        >
          {{ letter }}
        </div>
      </div>

      <!-- Contacts List -->
      <div class="contacts-list">
        <div v-for="letter in Object.keys(filteredContactsByLetter || {}).sort()" :key="letter" :id="`letter-${letter}`">
          <div class="letter-header">{{ letter }}</div>
          <q-list separator>
            <q-item
              v-for="contact in (filteredContactsByLetter && filteredContactsByLetter[letter]) || []"
              :key="contact.id"
              clickable
              v-ripple
              class="contact-item"
            >
              <q-item-section avatar>
                <q-avatar color="primary" text-color="white">
                  {{ contact.name.charAt(0).toUpperCase() }}
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-weight-medium">{{ contact.name }}</q-item-label>
                <q-item-label caption>{{ contact.phoneNumber }}</q-item-label>
                <q-item-label v-if="contact.email" caption>{{ contact.email }}</q-item-label>
              </q-item-section>

              <q-item-section side>
                <div class="row items-center">
                  <q-btn
                    round
                    color="primary"
                    icon="call"
                    size="md"
                    class="q-mr-sm"
                    @click.stop="callContact(contact.phoneNumber)"
                  >
                    <q-tooltip>{{ $t('contacts.call') }}</q-tooltip>
                  </q-btn>

                  <q-btn
                    round
                    flat
                    color="grey"
                    icon="more_vert"
                    size="sm"
                  >
                    <q-menu
                      transition-show="jump-down"
                      transition-hide="jump-up"
                    >
                      <q-list style="min-width: 150px">
                        <q-item
                          clickable
                          v-close-popup
                          @click="whatsappContact(contact.phoneNumber)"
                        >
                          <q-item-section avatar>
                            <q-icon color="green-7" name="fab fa-whatsapp" />
                          </q-item-section>
                          <q-item-section>{{ $t('contacts.whatsapp') }}</q-item-section>
                        </q-item>

                        <q-separator />

                        <q-item
                          clickable
                          v-close-popup
                          @click="editContact(contact)"
                        >
                          <q-item-section avatar>
                            <q-icon color="secondary" name="edit" />
                          </q-item-section>
                          <q-item-section>{{ $t('contacts.edit') }}</q-item-section>
                        </q-item>

                        <q-separator />

                        <q-item
                          clickable
                          v-close-popup
                          @click="confirmDeleteContact(contact)"
                        >
                          <q-item-section avatar>
                            <q-icon color="negative" name="delete" />
                          </q-item-section>
                          <q-item-section>{{ $t('contacts.delete') }}</q-item-section>
                        </q-item>
                      </q-list>
                    </q-menu>
                  </q-btn>
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>

    <!-- Contact Form Dialog -->
    <q-dialog v-model="showForm" persistent>
      <q-card style="width: 500px; max-width: 90vw;">
        <q-card-section class="row items-center">
          <div class="text-h6">{{ editingContact ? $t('contacts.edit') : $t('contacts.addContact') }}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup @click="cancelForm" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-form @submit="saveContact" class="q-gutter-md">
            <!-- Name -->
            <q-input
              v-model="contactForm.name"
              :label="$t('contacts.name') + ' *'"
              outlined
              :rules="[val => !!val || $t('common.required')]"
            />

            <!-- Phone Number -->
            <q-input
              v-model="contactForm.phoneNumber"
              :label="$t('contacts.phoneNumber') + ' *'"
              outlined
              type="tel"
              :rules="[
                val => !!val || $t('common.required'),
                val => /^[+]?[\d\s-]{8,}$/.test(val) || $t('common.invalidPhone')
              ]"
            />

            <!-- Email -->
            <q-input
              v-model="contactForm.email"
              :label="$t('contacts.email')"
              outlined
              type="email"
            />

            <!-- Notes -->
            <q-input
              v-model="contactForm.notes"
              :label="$t('contacts.notes')"
              outlined
              type="textarea"
              rows="3"
            />

            <!-- Favorite -->
            <q-toggle
              v-model="contactForm.favorite"
              :label="$t('common.favorite')"
            />
          </q-form>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            :label="$t('common.cancel')"
            color="grey-7"
            flat
            v-close-popup
            @click="cancelForm"
          />
          <q-btn
            :label="$t('common.save')"
            color="primary"
            @click="saveContact"
            unelevated
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Delete Confirmation Dialog -->
    <q-dialog v-model="showDeleteConfirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="warning" color="negative" text-color="white" />
          <span class="q-ml-sm">{{ $t('contacts.confirmDelete') }}</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat :label="$t('common.cancel')" color="primary" v-close-popup />
          <q-btn flat :label="$t('common.yes')" color="negative" @click="deleteContact" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Import Contacts Dialog -->
    <q-dialog v-model="showImportDialog" persistent>
      <q-card style="width: 500px; max-width: 90vw;">
        <q-card-section class="row items-center">
          <div class="text-h6">{{ $t('contacts.importContacts') }}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup @click="showImportDialog = false" />
        </q-card-section>

        <q-card-section v-if="importStage === 'intro'">
          <p>{{ $t('contacts.importExplanation') }}</p>
          <p class="text-caption">{{ $t('contacts.importPermissionNote') }}</p>
        </q-card-section>

        <q-card-section v-if="importStage === 'loading'" class="text-center q-py-lg">
          <q-spinner color="primary" size="3em" />
          <p>{{ $t('contacts.importLoading') }}</p>
        </q-card-section>

        <q-card-section v-if="importStage === 'selection'" class="q-pa-none">
          <q-list separator>
            <q-item-label header>{{ $t('contacts.selectContacts') }}</q-item-label>
            
            <q-item class="q-px-lg">
              <q-checkbox
                v-model="selectAllContacts"
                :label="$t('common.selectAll')"
                @update:model-value="toggleSelectAll"
              />
            </q-item>
            
            <q-separator />
            
            <div style="max-height: 300px; overflow-y: auto;">
              <q-item v-for="contact in deviceContacts" :key="contact.contactId">
                <q-item-section avatar>
                  <q-checkbox v-model="contact.selected" />
                </q-item-section>
                
                <q-item-section>
                  <q-item-label>{{ contact.displayName || 'Unknown' }}</q-item-label>
                  <q-item-label caption v-if="contact.phoneNumbers && contact.phoneNumbers.length > 0">
                    {{ contact.phoneNumbers[0].number }}
                  </q-item-label>
                </q-item-section>
              </q-item>
              
              <q-item v-if="deviceContacts.length === 0" class="text-center">
                <q-item-section>{{ $t('contacts.noContactsFound') }}</q-item-section>
              </q-item>
            </div>
          </q-list>
        </q-card-section>

        <q-card-section v-if="importStage === 'result'" class="q-pa-md">
          <div class="text-center q-py-md">
            <q-icon name="check_circle" color="positive" size="4rem" v-if="importResult.added > 0" />
            <q-icon name="info" color="warning" size="4rem" v-else />
            
            <p class="text-h6 q-mt-md">{{ $t('contacts.importComplete') }}</p>
            
            <div class="text-left q-mt-lg">
              <p>{{ $t('contacts.importAdded', { count: importResult.added }) }}</p>
              <p>{{ $t('contacts.importSkipped', { count: importResult.skipped }) }}</p>
              <p v-if="importResult.errors > 0" class="text-negative">
                {{ $t('contacts.importErrors', { count: importResult.errors }) }}
              </p>
            </div>
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            v-if="importStage === 'intro'"
            :label="$t('common.cancel')"
            color="grey-7"
            flat
            v-close-popup
          />
          <q-btn
            v-if="importStage === 'intro'"
            :label="$t('common.start')"
            color="primary"
            @click="startContactsImport"
            unelevated
          />
          
          <q-btn
            v-if="importStage === 'selection'"
            :label="$t('common.back')"
            color="grey-7"
            flat
            @click="importStage = 'intro'"
          />
          <q-btn
            v-if="importStage === 'selection'"
            :label="$t('common.import')"
            color="primary"
            @click="importSelectedContacts"
            :disabled="getSelectedContactsCount() === 0"
            unelevated
          />
          
          <q-btn
            v-if="importStage === 'result'"
            :label="$t('common.close')"
            color="primary"
            v-close-popup
            @click="resetImport"
            unelevated
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed, reactive, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useQuasar } from 'quasar';
import { useContactStore } from 'src/stores/contactStore';
import type { Contact, ImportResult } from 'src/stores/contactStore';
import { ContactsService } from 'src/services/contactsService';
import type { DeviceContact } from 'src/services/contactsService';

// Initialize i18n and Quasar
const { t } = useI18n();
const $q = useQuasar();

// Initialize contact store
const contactStore = useContactStore();

// Load contacts on component mount
onMounted(async () => {
  // Load contacts from Firestore
  await contactStore.loadContacts();
  console.log('Contacts loaded from Firestore:', contactStore.contacts);
});

// Form visibility
const showForm = ref(false);
const editingContact = ref(false);

// Contact form
const contactForm = reactive<{
  id: string;
  name: string;
  phoneNumber: string;
  email: string;
  notes: string;
  favorite: boolean;
}>({
  id: '',
  name: '',
  phoneNumber: '',
  email: '',
  notes: '',
  favorite: false
});

// Reset form
const resetForm = () => {
  Object.assign(contactForm, {
    id: '',
    name: '',
    phoneNumber: '',
    email: '',
    notes: '',
    favorite: false
  });
};

// Open contact dialog
const openContactDialog = () => {
  resetForm();
  editingContact.value = false;
  showForm.value = true;
};

// Edit contact
const editContact = (contact: Contact) => {
  Object.assign(contactForm, contact);
  editingContact.value = true;
  showForm.value = true;
};

// Cancel form
const cancelForm = () => {
  resetForm();
  showForm.value = false;
};

// Save contact
const saveContact = async () => {
  if (editingContact.value) {
    const success = await contactStore.updateContact(contactForm.id, {
      name: contactForm.name,
      phoneNumber: contactForm.phoneNumber,
      email: contactForm.email,
      notes: contactForm.notes,
      favorite: contactForm.favorite
    });

    if (success) {
      $q.notify({
        color: 'positive',
        message: t('contacts.contactUpdated'),
        icon: 'check'
      });
    }
  } else {
    const id = await contactStore.addContact({
      name: contactForm.name,
      phoneNumber: contactForm.phoneNumber,
      email: contactForm.email,
      notes: contactForm.notes,
      favorite: contactForm.favorite
    });

    if (id) {
      $q.notify({
        color: 'positive',
        message: t('contacts.contactAdded'),
        icon: 'check'
      });
    }
  }

  resetForm();
  showForm.value = false;
};

// Delete contact
const showDeleteConfirm = ref(false);
const contactToDelete = ref<Contact | null>(null);

const confirmDeleteContact = (contact: Contact) => {
  contactToDelete.value = contact;
  showDeleteConfirm.value = true;
};

const deleteContact = async () => {
  if (contactToDelete.value) {
    const success = await contactStore.deleteContact(contactToDelete.value.id);
    if (success) {
      $q.notify({
        color: 'positive',
        message: t('contacts.contactDeleted'),
        icon: 'check'
      });
    }
  }
  showDeleteConfirm.value = false;
  contactToDelete.value = null;
};

// Call contact
const callContact = (phoneNumber: string) => {
  window.location.href = `tel:${phoneNumber}`;
};

// WhatsApp contact
const whatsappContact = (phoneNumber: string) => {
  // Format the phone number by removing any non-digit characters
  const formattedNumber = phoneNumber.replace(/\D/g, '');
  window.location.href = `https://wa.me/${formattedNumber}`;
  $q.notify({
    color: 'green-7',
    textColor: 'white',
    icon: 'chat',
    message: t('contacts.whatsapp') + ': ' + phoneNumber
  });
};

// Contact import functionality
const showImportDialog = ref(false);
const importStage = ref<'intro' | 'loading' | 'selection' | 'result'>('intro');
const deviceContacts = ref<(DeviceContact & { selected: boolean })[]>([]);
const selectAllContacts = ref(false);
const importResult = ref<ImportResult>({ added: 0, skipped: 0, errors: 0 });

// Start the import process by requesting permissions and fetching contacts
const startContactsImport = async () => {
  try {
    importStage.value = 'loading';
    
    // Get device contacts
    const contacts = await ContactsService.getDeviceContacts();
    
    // Add a selected property to each contact
    deviceContacts.value = contacts.map(contact => ({
      ...contact,
      selected: false
    }));
    
    // Move to selection stage
    importStage.value = 'selection';
  } catch (error) {
    console.error('Failed to import contacts:', error);
    $q.notify({
      color: 'negative',
      message: t('contacts.permissionDenied'),
      icon: 'error'
    });
    showImportDialog.value = false;
    importStage.value = 'intro';
  }
};

// Toggle selection of all contacts
const toggleSelectAll = () => {
  deviceContacts.value.forEach(contact => {
    contact.selected = selectAllContacts.value;
  });
};

// Get count of selected contacts
const getSelectedContactsCount = () => {
  return deviceContacts.value.filter(contact => contact.selected).length;
};

// Import the selected contacts
const importSelectedContacts = async () => {
  try {
    importStage.value = 'loading';
    
    // Filter selected contacts
    const selectedContacts = deviceContacts.value
      .filter(contact => contact.selected)
      .map(contact => ContactsService.convertDeviceContactToAppContact(contact));
    
    // Import contacts to the store
    importResult.value = await contactStore.importContacts(selectedContacts);
    
    // Show the results
    importStage.value = 'result';
  } catch (error) {
    console.error('Failed to import selected contacts:', error);
    $q.notify({
      color: 'negative',
      message: t('contacts.importError'),
      icon: 'error'
    });
    
    importStage.value = 'selection';
  }
};

// Reset the import process
const resetImport = () => {
  deviceContacts.value = [];
  selectAllContacts.value = false;
  importStage.value = 'intro';
};

// Search
const searchText = ref('');

const filteredContactsByLetter = computed(() => {
  // If contactsByLetter is undefined or null, return an empty object
  if (!contactStore.contactsByLetter) return {};

  // Start with all contacts
  let result = contactStore.contactsByLetter;

  // Filter by search text if provided
  if (searchText.value) {
    const search = searchText.value.toLowerCase();
    const filtered: Record<string, Contact[]> = {};

    Object.keys(result).forEach(letter => {
      const filteredContacts = result[letter].filter(contact =>
        contact.name.toLowerCase().includes(search) ||
        contact.phoneNumber.includes(search) ||
        (contact.email && contact.email.toLowerCase().includes(search)) ||
        (contact.notes && contact.notes.toLowerCase().includes(search))
      );

      if (filteredContacts.length > 0) {
        filtered[letter] = filteredContacts;
      }
    });

    result = filtered;
  }

  // Filter by selected letter if provided
  if (selectedLetter.value) {
    const filtered: Record<string, Contact[]> = {};

    if (result[selectedLetter.value]) {
      filtered[selectedLetter.value] = result[selectedLetter.value];
    }

    result = filtered;
  }

  return result;
});

// Alphabetical index
const activeLetter = ref('');
const selectedLetter = ref(''); // For filtering by letter

// Clear the letter filter
const clearLetterFilter = () => {
  selectedLetter.value = '';
  console.log('Clearing letter filter');
};

const scrollToLetter = (letter: string) => {
  activeLetter.value = letter;

  // Toggle filter - if clicking the same letter twice, clear the filter
  if (selectedLetter.value === letter) {
    clearLetterFilter();
  } else {
    selectedLetter.value = letter;
    console.log(`Filtering by letter: ${letter}`);

    // Add a small delay to ensure the DOM is updated
    setTimeout(() => {
      const element = document.getElementById(`letter-${letter}`);
      if (element) {
        // On mobile, we need an offset for the sticky alphabetical index
        const isMobile = window.innerWidth < 600;
        // Adjust offset based on device type and the height of the alphabetical index
        const offset = isMobile ? 60 : -80; // 60px accounts for the sticky filter height on mobile

        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset + offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        console.log(`Scrolling to letter ${letter}, element:`, element);
      } else {
        console.log(`Element for letter ${letter} not found`);
      }
    }, 100);
  }
};

// Watch for scroll to update active letter
onMounted(() => {
  const handleScroll = () => {
    const letterElements = document.querySelectorAll('[id^="letter-"]');
    // Use a smaller offset for mobile to account for the non-sticky header
    const isMobile = window.innerWidth < 600;
    const scrollPosition = window.scrollY + (isMobile ? 50 : 100);

    for (let i = 0; i < letterElements.length; i++) {
      const element = letterElements[i] as HTMLElement;
      const nextElement = letterElements[i + 1] as HTMLElement;

      if (
        scrollPosition >= element.offsetTop &&
        (!nextElement || scrollPosition < nextElement.offsetTop)
      ) {
        const letter = element.id.replace('letter-', '');
        activeLetter.value = letter;
        break;
      }
    }
  };

  window.addEventListener('scroll', handleScroll);

  // Set initial active letter
  if (contactStore.availableLetters.length > 0) {
    activeLetter.value = contactStore.availableLetters[0];
  }
});
</script>

<style lang="scss" scoped>
.contacts-container {
  display: flex;
  position: relative;
}

.alphabetical-index {
  position: sticky;
  top: 70px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin-right: 16px;
  z-index: 1;

  .letter-item {
    padding: 4px 8px;
    font-size: 14px;
    cursor: pointer;
    text-align: center;
    border-radius: 4px;
    margin-bottom: 2px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }

    &.active {
      background-color: rgba(var(--primary-rgb), 0.2);
      color: var(--primary-color);
    }

    &.selected {
      background-color: var(--primary-color);
      color: white;
      font-weight: bold;
    }

    .body--dark & {
      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }

      &.active {
        background-color: rgba(var(--primary-rgb), 0.3);
        color: var(--primary-light);
      }

      &.selected {
        background-color: var(--primary-color);
        color: white;
      }
    }
  }
}

.contacts-list {
  flex: 1;

  .letter-header {
    background-color: var(--primary-color);
    color: white;
    padding: 8px 16px;
    font-weight: bold;
    border-radius: 4px;
    margin-bottom: 8px;

    .body--dark & {
      background-color: var(--primary-dark-color);
    }
  }

  .contact-item {
    border-radius: 8px;
    margin-bottom: 4px;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: rgba(0, 0, 0, 0.03);

      .body--dark & {
        background-color: rgba(255, 255, 255, 0.05);
      }
    }
  }
}

@media (max-width: 599px) {
  .contacts-container {
    flex-direction: column;
  }

  /* Move alphabetical index to the top of the page on mobile */
  .alphabetical-index {
    position: sticky;
    top: 0;
    z-index: 10;
    flex-direction: row;
    overflow-x: auto;
    margin-right: 0;
    margin-bottom: 16px;
    padding: 8px 0;
    justify-content: center;
    width: 100%;
    background-color: var(--q-primary);

    /* Add a subtle shadow for better visibility */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    .body--dark & {
      background-color: #1d1d1d;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .letter-item {
      margin-right: 8px;
      margin-bottom: 0;
      min-width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      color: white;

      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }

      &.active, &.selected {
        background-color: white;
        color: var(--primary-color);
      }

      .body--dark & {
        &:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }

        &.active, &.selected {
          background-color: rgba(255, 255, 255, 0.9);
          color: var(--primary-dark-color);
        }
      }
    }
  }

  /* Add padding to the top of the contacts list to account for the sticky filter */
  .contacts-list {
    padding-top: 8px;
  }

  .contact-item {
    .q-item__section--side {
      width: auto;
      padding-left: 8px;

      .q-btn {
        padding: 4px;
      }
    }
  }
}
</style>

