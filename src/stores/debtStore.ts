import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { db } from 'src/boot/firebase';
import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  query,
  orderBy
} from 'firebase/firestore';

export interface Debt {
  id: string;
  debtorName: string;
  date: string;
  dueDate?: string;
  amount: number;
  currency: string;
  contactInfo?: string;
  description?: string;
  status: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export const useDebtStore = defineStore('debt', () => {
  const debts = ref<Debt[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  // Get all debts
  const loadDebts = async () => {
    loading.value = true;
    error.value = null;
    
    try {
      const debtsCollection = collection(db, 'debts');
      const q = query(debtsCollection, orderBy('date', 'desc'));
      const querySnapshot = await getDocs(q);
      
      const loadedDebts: Debt[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        loadedDebts.push({
          id: doc.id,
          debtorName: data.debtorName,
          date: data.date,
          dueDate: data.dueDate || '',
          amount: data.amount,
          currency: data.currency,
          contactInfo: data.contactInfo || '',
          description: data.description || '',
          status: data.status,
          createdAt: data.createdAt?.toDate(),
          updatedAt: data.updatedAt?.toDate()
        });
      });
      
      debts.value = loadedDebts;
    } catch (err) {
      console.error('Error loading debts:', err);
      error.value = 'Failed to load debts';
    } finally {
      loading.value = false;
    }
  };

  // Get a single debt by ID
  const getDebt = async (id: string) => {
    try {
      const debtDoc = doc(db, 'debts', id);
      const docSnap = await getDoc(debtDoc);
      
      if (docSnap.exists()) {
        const data = docSnap.data();
        return {
          id: docSnap.id,
          debtorName: data.debtorName,
          date: data.date,
          dueDate: data.dueDate || '',
          amount: data.amount,
          currency: data.currency,
          contactInfo: data.contactInfo || '',
          description: data.description || '',
          status: data.status,
          createdAt: data.createdAt?.toDate(),
          updatedAt: data.updatedAt?.toDate()
        };
      }
      return null;
    } catch (err) {
      console.error('Error getting debt:', err);
      error.value = 'Failed to get debt';
      return null;
    }
  };

  // Add a new debt
  const addDebt = async (debtData: Omit<Debt, 'id' | 'createdAt' | 'updatedAt'>) => {
    loading.value = true;
    error.value = null;
    
    try {
      const debtsCollection = collection(db, 'debts');
      const docRef = await addDoc(debtsCollection, {
        ...debtData,
        amount: Number(debtData.amount),
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      
      // Reload debts to get the updated list
      await loadDebts();
      
      return docRef.id;
    } catch (err) {
      console.error('Error adding debt:', err);
      error.value = 'Failed to add debt';
      return null;
    } finally {
      loading.value = false;
    }
  };

  // Update an existing debt
  const updateDebt = async (id: string, debtData: Partial<Omit<Debt, 'id' | 'createdAt' | 'updatedAt'>>) => {
    loading.value = true;
    error.value = null;
    
    try {
      const debtDoc = doc(db, 'debts', id);
      
      // Ensure amount is a number
      if (debtData.amount) {
        debtData.amount = Number(debtData.amount);
      }
      
      await updateDoc(debtDoc, {
        ...debtData,
        updatedAt: serverTimestamp()
      });
      
      // Reload debts to get the updated list
      await loadDebts();
      
      return true;
    } catch (err) {
      console.error('Error updating debt:', err);
      error.value = 'Failed to update debt';
      return false;
    } finally {
      loading.value = false;
    }
  };

  // Delete a debt
  const deleteDebt = async (id: string) => {
    loading.value = true;
    error.value = null;
    
    try {
      const debtDoc = doc(db, 'debts', id);
      await deleteDoc(debtDoc);
      
      // Reload debts to get the updated list
      await loadDebts();
      
      return true;
    } catch (err) {
      console.error('Error deleting debt:', err);
      error.value = 'Failed to delete debt';
      return false;
    } finally {
      loading.value = false;
    }
  };

  // Computed properties
  const totalDebts = computed(() => debts.value.length);
  
  const totalAmountUSD = computed(() => {
    return debts.value
      .filter(debt => debt.currency === 'USD')
      .reduce((sum, debt) => sum + debt.amount, 0);
  });
  
  const totalAmountIQD = computed(() => {
    return debts.value
      .filter(debt => debt.currency === 'IQD')
      .reduce((sum, debt) => sum + debt.amount, 0);
  });
  
  const pendingDebts = computed(() => {
    return debts.value.filter(debt => debt.status === 'Pending' || debt.status === 'Partial');
  });
  
  const overdueDebts = computed(() => {
    return debts.value.filter(debt => debt.status === 'Overdue');
  });

  return {
    debts,
    loading,
    error,
    loadDebts,
    getDebt,
    addDebt,
    updateDebt,
    deleteDebt,
    totalDebts,
    totalAmountUSD,
    totalAmountIQD,
    pendingDebts,
    overdueDebts
  };
});
