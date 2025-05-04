import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useFirestore } from 'src/composables/useFirestore';
import { where } from 'firebase/firestore';

export interface Property {
  id: string;
  type: string;
  ownerName: string;
  phoneNumber: string;
  area: number;
  location: string;
  price: string;
  description: string;
  image: string | null;
  createdAt?: Date;
  updatedAt?: Date;
}

export const usePropertyStore = defineStore('property', () => {
  const properties = ref<Property[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const {
    getAll,
    getById,
    add,
    update,
    remove,
    queryDocuments
  } = useFirestore('properties');

  // Computed properties
  const totalProperties = computed(() => properties.value.length);
  const featuredProperties = computed(() => properties.value.slice(0, 3));

  // Load all properties
  const loadProperties = async () => {
    loading.value = true;

    try {
      properties.value = await getAll<Property>();
    } catch (err) {
      console.error('Error loading properties:', err);
      error.value = 'Failed to load properties';
    } finally {
      loading.value = false;
    }
  };

  // Get a property by ID
  const getProperty = async (id: string): Promise<Property | null> => {
    return await getById<Property>(id);
  };

  // Add a new property
  const addProperty = async (property: Omit<Property, 'id'>) => {
    const propertyWithTimestamp = {
      ...property,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const id = await add<Property>(propertyWithTimestamp);

    if (id) {
      await loadProperties();
      return id;
    }

    return null;
  };

  // Update a property
  const updateProperty = async (id: string, property: Partial<Property>) => {
    const propertyWithTimestamp = {
      ...property,
      updatedAt: new Date()
    };

    const success = await update<Property>(id, propertyWithTimestamp);

    if (success) {
      await loadProperties();
    }

    return success;
  };

  // Delete a property
  const deleteProperty = async (id: string) => {
    const success = await remove(id);

    if (success) {
      await loadProperties();
    }

    return success;
  };

  // Search properties
  const searchProperties = async (searchTerm: string, propertyType?: string) => {
    loading.value = true;

    try {
      const queryConstraints = [];

      if (propertyType) {
        queryConstraints.push(where('type', '==', propertyType));
      }

      // Get all properties first (since Firestore doesn't support full-text search)
      const allProperties = await queryDocuments<Property>(...queryConstraints);

      // Then filter locally for the search term
      if (searchTerm) {
        const lowerSearchTerm = searchTerm.toLowerCase();
        return allProperties.filter(property =>
          property.ownerName.toLowerCase().includes(lowerSearchTerm) ||
          property.location.toLowerCase().includes(lowerSearchTerm) ||
          property.description.toLowerCase().includes(lowerSearchTerm) ||
          property.type.toLowerCase().includes(lowerSearchTerm)
        );
      }

      return allProperties;
    } catch (err) {
      console.error('Error searching properties:', err);
      error.value = 'Failed to search properties';
      return [];
    } finally {
      loading.value = false;
    }
  };

  return {
    properties,
    loading,
    error,
    totalProperties,
    featuredProperties,
    loadProperties,
    getProperty,
    addProperty,
    updateProperty,
    deleteProperty,
    searchProperties
  };
});
