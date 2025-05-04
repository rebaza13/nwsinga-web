<template>
  <q-page padding>
    <div class="q-mb-lg">
      <div class="row justify-between items-center">
        <h1 class="text-h4 q-my-none">{{ $t('properties.title') }}</h1>
        <q-btn
          color="primary"
          :label="$t('properties.addProperty')"
          @click="openPropertyDialog()"
          icon="add"
          unelevated
        />
      </div>
    </div>

    <!-- Property Form Dialog -->
    <q-dialog v-model="showForm" persistent>
      <q-card style="width: 700px; max-width: 90vw;">
        <q-card-section class="row items-center">
          <div class="text-h6">{{ editingProperty ? $t('properties.edit') : $t('properties.addProperty') }}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup @click="cancelForm" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-form @submit="saveProperty" class="q-gutter-md">
            <!-- Property Type -->
            <q-select
              v-model="propertyForm.type"
              :options="propertyTypes"
              :label="$t('properties.propertyType') + ' *'"
              outlined
              :rules="[val => !!val || $t('common.required')]"
            />

            <!-- Owner Name -->
            <q-input
              v-model="propertyForm.ownerName"
              :label="$t('properties.ownerName') + ' *'"
              outlined
              :rules="[val => !!val || $t('common.required')]"
            />

            <!-- Phone Number -->
            <q-input
              v-model="propertyForm.phoneNumber"
              :label="$t('properties.phoneNumber') + ' *'"
              outlined
              type="tel"
              :rules="[
                val => !!val || $t('common.required'),
                val => /^[+]?[\d\s-]{8,}$/.test(val) || $t('common.invalidPhone')
              ]"
            />

            <!-- Area -->
            <q-input
              v-model.number="propertyForm.area"
              :label="$t('properties.area') + ' *'"
              outlined
              type="number"
              :rules="[
                val => !!val || $t('common.required'),
                val => val > 0 || $t('common.invalidNumber')
              ]"
            />

            <!-- Location -->
            <q-input
              v-model="propertyForm.location"
              :label="$t('properties.location') + ' *'"
              outlined
              :rules="[val => !!val || $t('common.required')]"
            />

            <!-- Price -->
            <q-input
              v-model="propertyForm.price"
              :label="$t('properties.price') + ' *'"
              outlined
              :rules="[val => !!val || $t('common.required')]"
            />

            <!-- Description -->
            <q-input
              v-model="propertyForm.description"
              :label="$t('properties.description')"
              outlined
              type="textarea"
              rows="3"
            />

            <!-- Image Upload -->
            <div class="q-mb-md">
              <p class="q-mb-sm">{{ $t('properties.image') }}</p>
              <div class="row items-center">
                <div
                  v-if="propertyForm.image"
                  class="col-12 col-sm-4 q-pr-sm q-mb-sm"
                >
                  <q-img
                    :src="propertyForm.image"
                    style="height: 150px; border-radius: var(--border-radius);"
                  >
                    <div class="absolute-top-right q-pa-xs">
                      <q-btn
                        round
                        color="negative"
                        icon="delete"
                        size="sm"
                        @click="propertyForm.image = null"
                      />
                    </div>
                  </q-img>
                </div>
                <div class="col-12" :class="{ 'col-sm-8': propertyForm.image }">
                  <q-file
                    v-model="imageFile"
                    :label="$t('properties.uploadImage')"
                    outlined
                    accept="image/*"
                    @update:model-value="handleImageUpload"
                  >
                    <template v-slot:prepend>
                      <q-icon name="image" />
                    </template>
                  </q-file>
                </div>
              </div>
            </div>
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
            @click="saveProperty"
            unelevated
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Search and Filter -->
    <div class="q-mb-md">
      <q-input
        v-model="searchText"
        :placeholder="$t('common.search')"
        outlined
        dense
        clearable
        class="q-mb-sm"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>

      <div class="row q-col-gutter-sm">
        <div class="col-12 col-sm-6 col-md-3">
          <q-select
            v-model="filterType"
            :options="[{ label: $t('common.all'), value: null }, ...propertyTypes]"
            :label="$t('properties.propertyType')"
            outlined
            dense
            emit-value
            map-options
          />
        </div>
      </div>
    </div>

    <!-- Properties List -->
    <div v-if="filteredProperties.length === 0" class="text-center q-pa-lg">
      <q-icon name="apartment" size="4rem" color="grey-5" />
      <p class="text-subtitle1 q-mt-sm">{{ $t('common.noResults') }}</p>
    </div>

    <div v-else class="row q-col-gutter-md">
      <div v-for="property in filteredProperties" :key="property.id" class="col-12 col-sm-6 col-md-4">
        <q-card class="property-card">
          <div
            class="property-image"
            :style="property.image ? `background-image: url(${property.image})` : ''"
          >
            <q-icon v-if="!property.image" name="apartment" size="4rem" class="no-image-placeholder" />
            <div class="property-badge">
              <q-badge color="primary" class="text-bold text-subtitle1 price-badge">
                {{ property.price }} $
              </q-badge>
            </div>
            <div class="property-type-badge">
              <q-badge color="dark" class="text-bold">
                {{ getPropertyTypeLabel(property.type) }}
              </q-badge>
            </div>
          </div>

          <q-card-section class="property-content q-pa-md">
            <div class="property-header">
              <div class="text-subtitle1 property-location text-weight-bold">{{ property.location }}</div>
              <div class="row items-center q-mt-sm">
                <q-icon name="straighten" size="xs" color="primary" class="q-mr-xs" />
                <span class="text-caption">{{ property.area }} m²</span>
                <q-space />
                <q-icon name="person" size="xs" color="primary" class="q-mr-xs" />
                <span class="text-caption">{{ property.ownerName }}</span>
              </div>
            </div>
            
            <q-separator class="q-my-sm" />
            
            <div v-if="property.description" class="text-body2 ellipsis-2-lines property-description">
              {{ property.description }}
            </div>
          </q-card-section>

          <q-card-actions class="property-actions">
            <q-btn flat color="primary" :label="$t('properties.details')" @click="viewPropertyDetails(property)" />
            <q-space />
            <q-btn
              round
              color="green"
              icon="phone"
              class="call-btn"
              size="sm"
              @click="callOwner(property.phoneNumber)"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>

    <!-- Property Details Dialog -->
    <q-dialog v-model="showDetails" persistent>
      <q-card style="width: 700px; max-width: 90vw;">
        <q-card-section class="row items-center">
          <div class="text-h6">{{ getPropertyTypeLabel(selectedProperty?.type) }} - {{ selectedProperty?.location }}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <div v-if="selectedProperty?.image" class="q-mb-md">
            <q-img
              :src="selectedProperty.image"
              style="height: 250px; border-radius: var(--border-radius);"
            />
          </div>

          <div class="row q-col-gutter-md">
            <div class="col-12 col-md-6">
              <q-list>
                <q-item>
                  <q-item-section avatar>
                    <q-icon name="person" color="primary" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label caption>{{ $t('properties.ownerName') }}</q-item-label>
                    <q-item-label>{{ selectedProperty?.ownerName }}</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item>
                  <q-item-section avatar>
                    <q-icon name="phone" color="primary" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label caption>{{ $t('properties.phoneNumber') }}</q-item-label>
                    <q-item-label>{{ selectedProperty?.phoneNumber }}</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item>
                  <q-item-section avatar>
                    <q-icon name="straighten" color="primary" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label caption>{{ $t('properties.area') }}</q-item-label>
                    <q-item-label>{{ selectedProperty?.area }} m²</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>

            <div class="col-12 col-md-6">
              <q-list>
                <q-item>
                  <q-item-section avatar>
                    <q-icon name="home" color="primary" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label caption>{{ $t('properties.propertyType') }}</q-item-label>
                    <q-item-label>{{ getPropertyTypeLabel(selectedProperty?.type) }}</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item>
                  <q-item-section avatar>
                    <q-icon name="location_on" color="primary" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label caption>{{ $t('properties.location') }}</q-item-label>
                    <q-item-label>{{ selectedProperty?.location }}</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item>
                  <q-item-section avatar>
                    <q-icon name="attach_money" color="primary" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label caption>{{ $t('properties.price') }}</q-item-label>
                    <q-item-label>{{ selectedProperty?.price }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </div>

          <q-separator class="q-my-md" />

          <div>
            <div class="text-subtitle2">{{ $t('properties.description') }}</div>
            <p>{{ selectedProperty?.description }}</p>
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            color="primary"
            icon="edit"
            :label="$t('properties.edit')"
            @click="editProperty(selectedProperty)"
            v-close-popup
          />
          <q-btn
            color="negative"
            icon="delete"
            :label="$t('properties.delete')"
            @click="confirmDeleteProperty"
            v-close-popup
          />
          <q-btn
            color="green"
            icon="phone"
            :label="$t('properties.call')"
            @click="callOwner(selectedProperty?.phoneNumber || '')"
            class="call-btn"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Delete Confirmation Dialog -->
    <q-dialog v-model="showDeleteConfirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="warning" color="negative" text-color="white" />
          <span class="q-ml-sm">{{ $t('properties.confirmDelete') }}</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat :label="$t('common.cancel')" color="primary" v-close-popup />
          <q-btn flat :label="$t('common.yes')" color="negative" @click="deleteProperty" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed, reactive, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useQuasar } from 'quasar';
import { usePropertyStore } from 'src/stores/propertyStore';
import type { Property } from 'src/stores/propertyStore';

// Initialize i18n and Quasar
const { t } = useI18n();
const $q = useQuasar();

// Form visibility
const showForm = ref(false);

const openPropertyDialog = (property?: Property) => {
  if (property) {
    editProperty(property);
  } else {
    resetForm();
    editingProperty.value = false;
  }
  showForm.value = true;
};

// Property types
const propertyTypes = [
  { label: t('properties.house'), value: t('properties.house') },
  { label: t('properties.apartment'), value: t('properties.apartment') },
  { label: t('properties.building'), value: t('properties.building') },
  { label: t('properties.land'), value: t('properties.land') }
];

// Helper function to get property type label
const getPropertyTypeLabel = (type: any) => {
  if (!type) return '';

  if (typeof type === 'object' && type !== null) {
    return type.label || '';
  }

  return type;
};

// Initialize property store
const propertyStore = usePropertyStore();

// Property form
const propertyForm = reactive<{
  id: string;
  type: string;
  ownerName: string;
  phoneNumber: string;
  area: number;
  location: string;
  price: string;
  description: string;
  image: string | null;
}>({
  id: '0',
  type: '',
  ownerName: '',
  phoneNumber: '',
  area: 0,
  location: '',
  price: '',
  description: '',
  image: null
});

// Image handling
const imageFile = ref(null);
const handleImageUpload = (files: File | null) => {
  if (!files) return;

  // In a real app, you would upload the file to a server
  // For now, we'll use a FileReader to get a data URL
  const reader = new FileReader();
  reader.onload = (e) => {
    propertyForm.image = e.target?.result as string;
  };
  reader.readAsDataURL(files);
};

// Load properties on component mount
onMounted(async () => {
  await propertyStore.loadProperties();
});

// Search and filter
const searchText = ref('');
const filterType = ref(null);

const filteredProperties = computed(() => {
  let result = [...propertyStore.properties];

  // Filter by search text
  if (searchText.value) {
    const search = searchText.value.toLowerCase();
    result = result.filter(property =>
      property.ownerName.toLowerCase().includes(search) ||
      property.location.toLowerCase().includes(search) ||
      property.description.toLowerCase().includes(search) ||
      property.type.toLowerCase().includes(search)
    );
  }

  // Filter by property type
  if (filterType.value) {
    result = result.filter(property => property.type === filterType.value);
  }

  return result;
});

// Property details
const showDetails = ref(false);
const selectedProperty = ref(null);

const viewPropertyDetails = (property) => {
  selectedProperty.value = property;
  showDetails.value = true;
};

// Edit property
const editingProperty = ref(false);

const editProperty = (property: any) => {
  Object.assign(propertyForm, property);
  editingProperty.value = true;
  showDetails.value = false;
};

// Delete property
const showDeleteConfirm = ref(false);

const confirmDeleteProperty = () => {
  showDeleteConfirm.value = true;
};

const deleteProperty = async () => {
  if (selectedProperty.value) {
    const success = await propertyStore.deleteProperty(selectedProperty.value.id);
    if (success) {
      $q.notify({
        color: 'positive',
        message: t('properties.propertyDeleted'),
        icon: 'check'
      });
      showDetails.value = false;
    }
  }
  showDeleteConfirm.value = false;
};

// Save property
const saveProperty = async () => {
  if (editingProperty.value) {
    // Update existing property
    const success = await propertyStore.updateProperty(propertyForm.id, {
      type: propertyForm.type,
      ownerName: propertyForm.ownerName,
      phoneNumber: propertyForm.phoneNumber,
      area: Number(propertyForm.area),
      location: propertyForm.location,
      price: propertyForm.price,
      description: propertyForm.description,
      image: propertyForm.image
    });

    if (success) {
      $q.notify({
        color: 'positive',
        message: t('properties.propertyUpdated'),
        icon: 'check'
      });
    }
  } else {
    // Add new property
    const id = await propertyStore.addProperty({
      type: propertyForm.type,
      ownerName: propertyForm.ownerName,
      phoneNumber: propertyForm.phoneNumber,
      area: Number(propertyForm.area),
      location: propertyForm.location,
      price: propertyForm.price,
      description: propertyForm.description,
      image: propertyForm.image
    });

    if (id) {
      $q.notify({
        color: 'positive',
        message: t('properties.propertyAdded'),
        icon: 'check'
      });
    }
  }

  resetForm();
  showForm.value = false;
};

// Reset form
const resetForm = () => {
  Object.assign(propertyForm, {
    id: '0',
    type: '',
    ownerName: '',
    phoneNumber: '',
    area: 0,
    location: '',
    price: '',
    description: '',
    image: null
  });
  imageFile.value = null;
  editingProperty.value = false;
};

// Cancel form
const cancelForm = () => {
  resetForm();
  showForm.value = false;
};

// Function to handle phone call
function callOwner(phoneNumber: string) {
  window.location.href = `tel:${phoneNumber}`;
  $q.notify({
    color: 'green-5',
    textColor: 'white',
    icon: 'phone',
    message: t('properties.call') + ': ' + phoneNumber
  });
}
</script>

<style lang="scss">
.property-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 12px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  .property-image {
    height: 220px;
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .no-image-placeholder {
      color: rgba(255, 255, 255, 0.7);
      background-color: rgba(0, 0, 0, 0.1);
      padding: 30px;
      border-radius: 50%;
    }
    
   
    
    .property-type-badge {
      position: absolute;
      top: 10px;
      left: 10px;
    }
  }

  .property-content {
    flex-grow: 1;
    
    .property-location {
      color: var(--q-primary);
    }
    
    .property-description {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      margin-top: 8px;
      color: #666;
    }
  }

  .property-actions {
    padding: 0 12px 12px;
    
    .call-btn {
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
    }
  }
}

.ellipsis-2-lines {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
