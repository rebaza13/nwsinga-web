import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useFirestore } from 'src/composables/useFirestore';
import { where } from 'firebase/firestore';

export interface Contact {
  id: string;
  name: string;
  phoneNumber: string;
  email?: string;
  notes?: string;
  favorite?: boolean;
}

export interface ImportResult {
  added: number;
  skipped: number;
  errors: number;
}

export const useContactStore = defineStore('contacts', () => {
  const contacts = ref<Contact[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  // Initialize Firestore
  const {
    getAll,
    getById,
    add,
    update,
    remove,
    queryDocuments,
    loading: firestoreLoading
  } = useFirestore('contacts');

  // Sample data for initial setup - will be used if no contacts exist in Firestore
  const sampleContacts: Omit<Contact, 'id'>[] = [
    {
      name: 'Ahmed Mohammed',
      phoneNumber: '+964 750 123 4567',
      email: 'ahmed@example.com',
      notes: 'Property manager',
      favorite: true
    },
    {
      name: 'Sara Ali',
      phoneNumber: '+964 770 987 6543',
      email: 'sara@example.com',
      notes: 'Tenant in Building A',
      favorite: false
    },
    {
      name: 'Karzan Omar',
      phoneNumber: '+964 750 555 7777',
      email: 'karzan@example.com',
      notes: 'Contractor',
      favorite: true
    },
    {
      name: 'Zhila Karim',
      phoneNumber: '+964 770 444 3333',
      email: 'zhila@example.com',
      notes: 'Lawyer',
      favorite: false
    },
    {
      name: 'Rebaz Ahmad',
      phoneNumber: '+964 750 888 9999',
      email: 'rebaz@example.com',
      notes: 'Property owner',
      favorite: true
    }
  ];

  // Load contacts from Firestore
  const loadContacts = async () => {
    loading.value = true;
    error.value = null;

    try {
      // Get contacts from Firestore
      const firestoreContacts = await getAll<Contact>();

      // If no contacts exist in Firestore, add sample data
      if (firestoreContacts.length === 0) {
        console.log('No contacts found in Firestore, adding sample data...');

        // Add sample contacts to Firestore
        for (const sampleContact of sampleContacts) {
          await add<Contact>(sampleContact);
        }

        // Fetch the contacts again after adding samples
        contacts.value = await getAll<Contact>();
      } else {
        contacts.value = firestoreContacts;
      }

      console.log('Loaded contacts from Firestore:', contacts.value);
    } catch (err) {
      console.error('Error loading contacts from Firestore:', err);
      error.value = err instanceof Error ? err.message : 'Unknown error loading contacts';

      // If there's an error, use empty array
      contacts.value = [];
    } finally {
      loading.value = false;
    }
  };

  // Add a new contact to Firestore
  const addContact = async (contact: Omit<Contact, 'id'>) => {
    try {
      // Set default favorite value if not provided
      const contactData = {
        ...contact,
        favorite: contact.favorite ?? false
      };

      // Add to Firestore
      const id = await add<Contact>(contactData);

      if (id) {
        // If successful, add to local state
        const newContact: Contact = {
          id,
          ...contactData
        };

        contacts.value.push(newContact);
        return id;
      }

      return null;
    } catch (err) {
      console.error('Error adding contact:', err);
      error.value = err instanceof Error ? err.message : 'Unknown error adding contact';
      return null;
    }
  };

  // Import multiple contacts at once
  const importContacts = async (contactsToImport: Omit<Contact, 'id'>[]): Promise<ImportResult> => {
    loading.value = true;
    error.value = null;
    
    const result: ImportResult = {
      added: 0,
      skipped: 0,
      errors: 0
    };

    try {
      for (const contact of contactsToImport) {
        // Skip contacts without a phone number
        if (!contact.phoneNumber) {
          result.skipped++;
          continue;
        }

        // Check if contact already exists by phone number
        const exists = await contactExists(contact.phoneNumber);
        
        if (exists) {
          result.skipped++;
          continue;
        }

        // Attempt to add the contact
        const id = await addContact(contact);
        
        if (id) {
          result.added++;
        } else {
          result.errors++;
        }
      }

      return result;
    } catch (err) {
      console.error('Error importing contacts:', err);
      error.value = err instanceof Error ? err.message : 'Unknown error importing contacts';
      return result;
    } finally {
      loading.value = false;
    }
  };

  // Update an existing contact in Firestore
  const updateContact = async (id: string, updatedContact: Partial<Contact>) => {
    try {
      // Update in Firestore
      const success = await update<Contact>(id, updatedContact);

      if (success) {
        // If successful, update local state
        const index = contacts.value.findIndex(c => c.id === id);
        if (index !== -1) {
          contacts.value[index] = { ...contacts.value[index], ...updatedContact };
        }
        return true;
      }

      return false;
    } catch (err) {
      console.error('Error updating contact:', err);
      error.value = err instanceof Error ? err.message : 'Unknown error updating contact';
      return false;
    }
  };

  // Delete a contact from Firestore
  const deleteContact = async (id: string) => {
    try {
      // Delete from Firestore
      const success = await remove(id);

      if (success) {
        // If successful, remove from local state
        const index = contacts.value.findIndex(c => c.id === id);
        if (index !== -1) {
          contacts.value.splice(index, 1);
        }
        return true;
      }

      return false;
    } catch (err) {
      console.error('Error deleting contact:', err);
      error.value = err instanceof Error ? err.message : 'Unknown error deleting contact';
      return false;
    }
  };

  // Toggle favorite status in Firestore
  const toggleFavorite = async (id: string) => {
    try {
      // Find the contact in local state
      const contact = contacts.value.find(c => c.id === id);

      if (contact) {
        // Toggle the favorite status
        const newFavoriteStatus = !contact.favorite;

        // Update in Firestore
        const success = await update<Contact>(id, { favorite: newFavoriteStatus });

        if (success) {
          // If successful, update local state
          contact.favorite = newFavoriteStatus;
          return true;
        }
      }

      return false;
    } catch (err) {
      console.error('Error toggling favorite status:', err);
      error.value = err instanceof Error ? err.message : 'Unknown error toggling favorite';
      return false;
    }
  };

  // Get contacts grouped by first letter
  const contactsByLetter = computed(() => {
    const grouped: Record<string, Contact[]> = {};

    contacts.value.forEach(contact => {
      const firstLetter = contact.name.charAt(0).toUpperCase();
      if (!grouped[firstLetter]) {
        grouped[firstLetter] = [];
      }
      grouped[firstLetter].push(contact);
    });

    // Sort each group by name
    Object.keys(grouped).forEach(letter => {
      grouped[letter].sort((a, b) => a.name.localeCompare(b.name));
    });

    return grouped;
  });

  // Get all available letters for the index
  const availableLetters = computed(() => {
    return Object.keys(contactsByLetter.value).sort();
  });

  // Get favorite contacts
  const favoriteContacts = computed(() => {
    return contacts.value.filter(contact => contact.favorite);
  });

  // Check if a contact with the same phone number already exists
  const contactExists = async (phoneNumber: string): Promise<boolean> => {
    try {
      // Query Firestore for contacts with the same phone number
      const existingContacts = await queryDocuments<Contact>(where('phoneNumber', '==', phoneNumber));
      return existingContacts.length > 0;
    } catch (err) {
      console.error('Error checking if contact exists:', err);
      return false;
    }
  };

  return {
    contacts,
    loading,
    error,
    loadContacts,
    addContact,
    updateContact,
    deleteContact,
    toggleFavorite,
    importContacts,
    contactsByLetter,
    availableLetters,
    favoriteContacts,
    contactExists
  };
});
