import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useFirestore } from 'src/composables/useFirestore';
import { orderBy } from 'firebase/firestore';

export interface Contract {
  id: string;
  date: string;
  firstParty: string;
  secondParty: string;
  amount: number;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export const useContractStore = defineStore('contract', () => {
  const contracts = ref<Contract[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);
  
  const { 
    getAll, 
    getById, 
    add, 
    update, 
    remove, 
    queryDocuments,
    loading: firestoreLoading,
    error: firestoreError
  } = useFirestore('contracts');
  
  // Computed properties
  const totalContracts = computed(() => contracts.value.length);
  const totalAmount = computed(() => 
    contracts.value.reduce((sum, contract) => sum + contract.amount, 0)
  );
  
  // Load all contracts
  const loadContracts = async () => {
    loading.value = true;
    
    try {
      contracts.value = await getAll<Contract>();
    } catch (err) {
      console.error('Error loading contracts:', err);
      error.value = 'Failed to load contracts';
    } finally {
      loading.value = false;
    }
  };
  
  // Get a contract by ID
  const getContract = async (id: string): Promise<Contract | null> => {
    return await getById<Contract>(id);
  };
  
  // Add a new contract
  const addContract = async (contract: Omit<Contract, 'id'>) => {
    const contractWithTimestamp = {
      ...contract,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    const id = await add<Contract>(contractWithTimestamp);
    
    if (id) {
      await loadContracts();
      return id;
    }
    
    return null;
  };
  
  // Update a contract
  const updateContract = async (id: string, contract: Partial<Contract>) => {
    const contractWithTimestamp = {
      ...contract,
      updatedAt: new Date()
    };
    
    const success = await update<Contract>(id, contractWithTimestamp);
    
    if (success) {
      await loadContracts();
    }
    
    return success;
  };
  
  // Delete a contract
  const deleteContract = async (id: string) => {
    const success = await remove(id);
    
    if (success) {
      await loadContracts();
    }
    
    return success;
  };
  
  // Search contracts
  const searchContracts = async (searchTerm: string) => {
    loading.value = true;
    
    try {
      // Get all contracts first (since Firestore doesn't support full-text search)
      const allContracts = await getAll<Contract>();
      
      // Then filter locally for the search term
      if (searchTerm) {
        const lowerSearchTerm = searchTerm.toLowerCase();
        return allContracts.filter(contract => 
          contract.firstParty.toLowerCase().includes(lowerSearchTerm) ||
          contract.secondParty.toLowerCase().includes(lowerSearchTerm) ||
          contract.description.toLowerCase().includes(lowerSearchTerm)
        );
      }
      
      return allContracts;
    } catch (err) {
      console.error('Error searching contracts:', err);
      error.value = 'Failed to search contracts';
      return [];
    } finally {
      loading.value = false;
    }
  };
  
  // Get recent contracts
  const getRecentContracts = async (limit: number = 5) => {
    loading.value = true;
    
    try {
      const allContracts = await getAll<Contract>();
      // Sort by date (newest first) and limit
      return allContracts
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, limit);
    } catch (err) {
      console.error('Error getting recent contracts:', err);
      error.value = 'Failed to get recent contracts';
      return [];
    } finally {
      loading.value = false;
    }
  };
  
  return {
    contracts,
    loading,
    error,
    totalContracts,
    totalAmount,
    loadContracts,
    getContract,
    addContract,
    updateContract,
    deleteContract,
    searchContracts,
    getRecentContracts
  };
});
