import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useFirestore } from 'src/composables/useFirestore';
import { where, orderBy } from 'firebase/firestore';

export interface Building {
  id: string;
  name: string;
  location: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Payment {
  month: number;
  amount: number;
  date: string;
}

export interface Tenant {
  id: string;
  name: string;
  phoneNumber: string;
  building: string; // Building ID
  monthlyRent: number;
  payments: Payment[];
  createdAt?: Date;
  updatedAt?: Date;
}

export const useRentStore = defineStore('rent', () => {
  const buildings = ref<Building[]>([]);
  const tenants = ref<Tenant[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);
  
  const buildingsFirestore = useFirestore('buildings');
  const tenantsFirestore = useFirestore('tenants');
  
  // Computed properties
  const totalBuildings = computed(() => buildings.value.length);
  const totalTenants = computed(() => tenants.value.length);
  const totalMonthlyRent = computed(() => 
    tenants.value.reduce((sum, tenant) => sum + tenant.monthlyRent, 0)
  );
  
  // Load all buildings
  const loadBuildings = async () => {
    loading.value = true;
    
    try {
      buildings.value = await buildingsFirestore.getAll<Building>();
    } catch (err) {
      console.error('Error loading buildings:', err);
      error.value = 'Failed to load buildings';
    } finally {
      loading.value = false;
    }
  };
  
  // Load all tenants
  const loadTenants = async () => {
    loading.value = true;
    
    try {
      tenants.value = await tenantsFirestore.getAll<Tenant>();
    } catch (err) {
      console.error('Error loading tenants:', err);
      error.value = 'Failed to load tenants';
    } finally {
      loading.value = false;
    }
  };
  
  // Get building by ID
  const getBuilding = async (id: string): Promise<Building | null> => {
    return await buildingsFirestore.getById<Building>(id);
  };
  
  // Get tenant by ID
  const getTenant = async (id: string): Promise<Tenant | null> => {
    return await tenantsFirestore.getById<Tenant>(id);
  };
  
  // Add a new building
  const addBuilding = async (building: Omit<Building, 'id'>) => {
    const buildingWithTimestamp = {
      ...building,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    const id = await buildingsFirestore.add<Building>(buildingWithTimestamp);
    
    if (id) {
      await loadBuildings();
      return id;
    }
    
    return null;
  };
  
  // Add a new tenant
  const addTenant = async (tenant: Omit<Tenant, 'id'>) => {
    const tenantWithTimestamp = {
      ...tenant,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    const id = await tenantsFirestore.add<Tenant>(tenantWithTimestamp);
    
    if (id) {
      await loadTenants();
      return id;
    }
    
    return null;
  };
  
  // Update a building
  const updateBuilding = async (id: string, building: Partial<Building>) => {
    const buildingWithTimestamp = {
      ...building,
      updatedAt: new Date()
    };
    
    const success = await buildingsFirestore.update<Building>(id, buildingWithTimestamp);
    
    if (success) {
      await loadBuildings();
    }
    
    return success;
  };
  
  // Update a tenant
  const updateTenant = async (id: string, tenant: Partial<Tenant>) => {
    const tenantWithTimestamp = {
      ...tenant,
      updatedAt: new Date()
    };
    
    const success = await tenantsFirestore.update<Tenant>(id, tenantWithTimestamp);
    
    if (success) {
      await loadTenants();
    }
    
    return success;
  };
  
  // Delete a building
  const deleteBuilding = async (id: string) => {
    const success = await buildingsFirestore.remove(id);
    
    if (success) {
      await loadBuildings();
    }
    
    return success;
  };
  
  // Delete a tenant
  const deleteTenant = async (id: string) => {
    const success = await tenantsFirestore.remove(id);
    
    if (success) {
      await loadTenants();
    }
    
    return success;
  };
  
  // Add a payment to a tenant
  const addPayment = async (tenantId: string, payment: Payment) => {
    const tenant = await getTenant(tenantId);
    
    if (!tenant) {
      error.value = 'Tenant not found';
      return false;
    }
    
    const payments = [...tenant.payments];
    
    // Check if payment for this month already exists
    const existingPaymentIndex = payments.findIndex(p => p.month === payment.month);
    
    if (existingPaymentIndex !== -1) {
      // Update existing payment
      payments[existingPaymentIndex] = payment;
    } else {
      // Add new payment
      payments.push(payment);
    }
    
    return await updateTenant(tenantId, { payments, updatedAt: new Date() });
  };
  
  // Get tenants by building
  const getTenantsByBuilding = async (buildingId: string) => {
    loading.value = true;
    
    try {
      return await tenantsFirestore.queryDocuments<Tenant>(
        where('building', '==', buildingId)
      );
    } catch (err) {
      console.error('Error getting tenants by building:', err);
      error.value = 'Failed to get tenants by building';
      return [];
    } finally {
      loading.value = false;
    }
  };
  
  // Get building name by ID
  const getBuildingName = (buildingId: string) => {
    const building = buildings.value.find(b => b.id === buildingId);
    return building ? building.name : '';
  };
  
  return {
    buildings,
    tenants,
    loading,
    error,
    totalBuildings,
    totalTenants,
    totalMonthlyRent,
    loadBuildings,
    loadTenants,
    getBuilding,
    getTenant,
    addBuilding,
    addTenant,
    updateBuilding,
    updateTenant,
    deleteBuilding,
    deleteTenant,
    addPayment,
    getTenantsByBuilding,
    getBuildingName
  };
});
