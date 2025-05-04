import { ref, Ref } from 'vue';
import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
} from 'firebase/firestore';
import type { DocumentData, QueryConstraint } from 'firebase/firestore';
import { db } from 'src/boot/firebase';
import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';

export function useFirestore(collectionName: string) {
  const $q = useQuasar();
  const { t } = useI18n();
  const loading = ref(false);
  const error = ref<string | null>(null);

  const collectionRef = collection(db, collectionName);

  // Get all documents from a collection
  const getAll = async <T>(): Promise<T[]> => {
    loading.value = true;
    error.value = null;

    try {
      const querySnapshot = await getDocs(collectionRef);
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as T[];

      return data;
    } catch (err) {
      handleError(err);
      return [];
    } finally {
      loading.value = false;
    }
  };

  // Get a document by ID
  const getById = async <T>(id: string): Promise<T | null> => {
    loading.value = true;
    error.value = null;

    try {
      const docRef = doc(db, collectionName, id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data()
        } as T;
      } else {
        return null;
      }
    } catch (err) {
      handleError(err);
      return null;
    } finally {
      loading.value = false;
    }
  };

  // Add a new document
  const add = async <T>(data: Omit<T, 'id'>): Promise<string | null> => {
    loading.value = true;
    error.value = null;

    try {
      const docRef = await addDoc(collectionRef, data);

      $q.notify({
        color: 'positive',
        message: t('common.success'),
        icon: 'check'
      });

      return docRef.id;
    } catch (err) {
      handleError(err);
      return null;
    } finally {
      loading.value = false;
    }
  };

  // Update a document
  const update = async <T>(id: string, data: Partial<T>): Promise<boolean> => {
    loading.value = true;
    error.value = null;

    try {
      const docRef = doc(db, collectionName, id);
      await updateDoc(docRef, data as DocumentData);

      $q.notify({
        color: 'positive',
        message: t('common.success'),
        icon: 'check'
      });

      return true;
    } catch (err) {
      handleError(err);
      return false;
    } finally {
      loading.value = false;
    }
  };

  // Delete a document
  const remove = async (id: string): Promise<boolean> => {
    loading.value = true;
    error.value = null;

    try {
      const docRef = doc(db, collectionName, id);
      await deleteDoc(docRef);

      $q.notify({
        color: 'positive',
        message: t('common.success'),
        icon: 'check'
      });

      return true;
    } catch (err) {
      handleError(err);
      return false;
    } finally {
      loading.value = false;
    }
  };

  // Query documents with filters
  const queryDocuments = async <T>(...queryConstraints: QueryConstraint[]): Promise<T[]> => {
    loading.value = true;
    error.value = null;

    try {
      const q = query(collectionRef, ...queryConstraints);
      const querySnapshot = await getDocs(q);

      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as T[];

      return data;
    } catch (err) {
      handleError(err);
      return [];
    } finally {
      loading.value = false;
    }
  };

  // Handle errors
  const handleError = (err: any) => {
    console.error(`Firestore error (${collectionName}):`, err);
    error.value = err.message || 'An error occurred';

    $q.notify({
      color: 'negative',
      message: t('common.error'),
      caption: error.value || '',
      icon: 'error'
    });
  };

  // Clear any existing errors
  const clearError = () => {
    error.value = null;
  };

  return {
    loading,
    error,
    getAll,
    getById,
    add,
    update,
    remove,
    queryDocuments,
    clearError,
    collectionRef
  };
}
