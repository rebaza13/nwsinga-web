<template>
  <q-page padding>
    <!-- Header with summary stats -->
    <div class="q-mb-lg">
      <div class="row justify-between items-center q-mb-md">
        <h1 class="text-h4 q-my-none page-title">{{ $t('rent.title') }}</h1>
        <div>
          <q-btn
            color="secondary"
            :label="$t('rent.addBuilding')"
            @click="openBuildingDialog"
            icon="domain_add"
            unelevated
            class="q-mr-sm scale-btn"
            rounded
          />
          <q-btn
            color="primary"
            :label="$t('rent.addTenant')"
            @click="openTenantDialog()"
            icon="person_add"
            unelevated
            class="scale-btn"
            rounded
          />
        </div>
      </div>
      
      <!-- Summary Cards Row -->
      <div class="row q-col-gutter-md q-mb-lg">
        <!-- Total Tenants Card -->
        <div class="col-12 col-sm-6 col-md-4">
          <q-card class="stats-card">
            <q-card-section class="bg-primary text-white">
              <div class="row items-center justify-between">
                <div class="stats-content">
                  <div class="text-h3 counter-number">{{ tenants.length }}</div>
                  <div class="text-subtitle1">{{ $t('rent.totalTenants') }}</div>
                </div>
                <div class="icon-wrapper">
                  <q-icon name="people" size="42px" class="pulse-icon" />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
        
        <!-- Total Monthly Revenue Card -->
        <div class="col-12 col-sm-6 col-md-4">
          <q-card class="stats-card">
            <q-card-section class="bg-positive text-white">
              <div class="row items-center justify-between">
                <div class="stats-content">
                  <div class="text-h3 counter-number">{{ formatCurrency(totalMonthlyRevenue) }}</div>
                  <div class="text-subtitle1">{{ $t('rent.monthlyRevenue') }}</div>
                </div>
                <div class="icon-wrapper">
                  <q-icon name="payments" size="42px" class="bounce-icon" />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
        
        <!-- Collection Rate Card -->
        <div class="col-12 col-sm-6 col-md-4">
          <q-card class="stats-card">
            <q-card-section class="bg-accent text-white">
              <div class="row items-center justify-between">
                <div class="stats-content">
                  <div class="text-h3 counter-number">{{ collectionRate }}%</div>
                  <div class="text-subtitle1">{{ $t('rent.collectionRate') }}</div>
                </div>
                <div class="icon-wrapper">
                  <q-icon name="analytics" size="42px" class="rotating-icon" />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <!-- Building Form Dialog -->
    <q-dialog v-model="showBuildingForm" persistent maximized-mobile>
      <q-card style="width: 500px; max-width: 90vw;" class="form-card">
        <q-card-section class="row items-center bg-primary text-white form-header">
          <div class="text-h6">{{ $t('rent.addBuilding') }}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup @click="cancelBuildingForm" class="no-focus-outline" />
        </q-card-section>

        <q-card-section class="q-pt-lg scroll" style="max-height: 60vh;">
          <q-form @submit="saveBuilding" class="q-gutter-md">
            <!-- Building Name -->
            <q-input
              v-model="buildingForm.name"
              :label="$t('rent.buildingName') + ' *'"
              outlined
              :rules="[val => !!val || $t('common.required')]"
              class="form-field"
              ref="buildingName"
              lazy-rules
            >
              <template v-slot:prepend>
                <q-icon name="domain" />
              </template>
            </q-input>

            <!-- Location -->
            <q-input
              v-model="buildingForm.location"
              :label="$t('properties.location') + ' *'"
              outlined
              :rules="[val => !!val || $t('common.required')]"
              class="form-field"
              lazy-rules
            >
              <template v-slot:prepend>
                <q-icon name="place" />
              </template>
            </q-input>
          </q-form>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right" class="q-pa-md">
          <q-btn
            :label="$t('common.cancel')"
            color="grey-7"
            flat
            v-close-popup
            @click="cancelBuildingForm"
            class="form-btn"
          />
          <q-btn
            :label="$t('common.save')"
            color="primary"
            @click="saveBuilding"
            unelevated
            class="form-btn q-ml-sm"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Tenant Form Dialog -->
    <q-dialog v-model="showTenantForm" persistent maximized-mobile>
      <q-card style="width: 600px; max-width: 90vw;" class="form-card">
        <q-card-section class="row items-center bg-primary text-white form-header">
          <div class="text-h6">{{ editingTenant ? $t('rent.editTenant') : $t('rent.addTenant') }}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup @click="cancelTenantForm" class="no-focus-outline" />
        </q-card-section>

        <q-card-section class="q-pt-lg scroll" style="max-height: 60vh;">
          <q-form @submit="saveTenant" class="q-gutter-md">
            <!-- Tenant Name -->
            <q-input
              v-model="tenantForm.name"
              :label="$t('rent.tenantName') + ' *'"
              outlined
              :rules="[val => !!val || $t('common.required')]"
              class="form-field"
              ref="tenantName"
              lazy-rules
            >
              <template v-slot:prepend>
                <q-icon name="person" />
              </template>
            </q-input>

            <!-- Phone Number -->
            <q-input
              v-model="tenantForm.phoneNumber"
              :label="$t('properties.phoneNumber') + ' *'"
              outlined
              type="tel"
              :rules="[
                val => !!val || $t('common.required'),
                val => /^[+]?[\d\s-]{8,}$/.test(val) || $t('common.invalidPhone')
              ]"
              class="form-field"
              lazy-rules
            >
              <template v-slot:prepend>
                <q-icon name="phone" />
              </template>
            </q-input>

            <!-- Building Selection -->
            <q-select
              v-model="tenantForm.building"
              :options="buildings"
              :label="$t('rent.building') + ' *'"
              option-label="name"
              option-value="id"
              map-options
              emit-value
              outlined
              :rules="[val => !!val || $t('common.required')]"
              class="form-field"
              lazy-rules
            >
              <template v-slot:prepend>
                <q-icon name="domain" />
              </template>
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey">
                    {{ $t('common.noResults') }}
                  </q-item-section>
                </q-item>
              </template>
              <template v-slot:after>
                <q-btn
                  round
                  dense
                  flat
                  icon="add"
                  @click="openBuildingDialog"
                  class="no-focus-outline"
                />
              </template>
            </q-select>

            <!-- Monthly Rent -->
            <q-input
              v-model="tenantForm.monthlyRent"
              :label="$t('rent.monthlyRent') + ' *'"
              outlined
              type="number"
              :rules="[
                val => !!val || $t('common.required'),
                val => val > 0 || $t('common.invalidNumber')
              ]"
              class="form-field"
              lazy-rules
              :suffix="'IQD'"
            >
              <template v-slot:prepend>
                <q-icon name="price_change" />
              </template>
            </q-input>
          </q-form>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right" class="q-pa-md">
          <q-btn
            :label="$t('common.cancel')"
            color="grey-7"
            flat
            v-close-popup
            @click="cancelTenantForm"
            class="form-btn"
          />
          <q-btn
            :label="$t('common.save')"
            color="primary"
            @click="saveTenant"
            unelevated
            class="form-btn q-ml-sm"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Search and Filter -->
    <div class="q-mb-md search-filter-container">
      <q-input
        v-model="searchText"
        :placeholder="$t('common.search')"
        outlined
        dense
        clearable
        class="q-mb-sm search-field"
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>

      <div class="row q-col-gutter-sm">
        <div class="col-12 col-sm-6 col-md-3">
          <q-select
            v-model="filterBuilding"
            :options="buildingOptions"
            :label="$t('rent.filterByBuilding')"
            option-label="label"
            option-value="value"
            outlined
            dense
            emit-value
            map-options
            class="filter-field"
          >
            <template v-slot:prepend>
              <q-icon name="filter_alt" />
            </template>
          </q-select>
        </div>
      </div>
    </div>

    <!-- Empty state for no tenants -->
    <div v-if="filteredTenants.length === 0" class="text-center q-pa-lg empty-state">
      <q-icon name="people" size="4rem" color="grey-5" class="pulse-icon q-mb-md" />
      <p class="text-subtitle1">{{ $t('common.noResults') }}</p>
      <q-btn
        color="primary"
        :label="$t('rent.addTenant')"
        @click="openTenantDialog()"
        icon="person_add"
        unelevated
        class="q-mt-md scale-btn"
        rounded
      />
    </div>

    <!-- Tenants List with improved cards -->
    <div v-else class="row q-col-gutter-md">
      <div v-for="tenant in filteredTenants" :key="tenant.id" class="col-12 col-md-6">
        <q-card class="tenant-card">
          <q-card-section class="tenant-header">
            <div class="row items-center justify-between q-mb-sm">
              <div class="col-8">
                <div class="text-h6 tenant-name">{{ tenant.name }}</div>
                <div class="text-subtitle2 tenant-building">
                  <q-icon name="domain" size="xs" class="q-mr-xs" />
                  {{ getBuildingName(tenant.building) }}
                </div>
                <div class="text-subtitle2 tenant-phone" v-if="tenant.phoneNumber">
                  <q-icon name="phone" size="xs" class="q-mr-xs" />
                  <a :href="`tel:${tenant.phoneNumber}`" class="tenant-phone-link">{{ tenant.phoneNumber }}</a>
                </div>
              </div>
              <div class="col-4 text-right">
                <div class="text-subtitle1 text-weight-bold tenant-rent">
                  {{ formatCurrency(tenant.monthlyRent) }}
                  <div class="text-caption">{{ $t('rent.month') }}</div>
                </div>
              </div>
            </div>
          </q-card-section>

          <q-separator />

          <q-card-section>
            <div class="text-subtitle2 q-mb-sm payment-history-title">
              <q-icon name="payments" size="sm" class="q-mr-xs" />
              {{ $t('rent.paymentHistory') }}
            </div>

            <div class="payment-tracker">
              <div
                v-for="month in months"
                :key="month.value"
                class="month-item"
                :class="isMonthPaid(tenant, month.value) ? 'paid' : 'unpaid'"
                @click="handleMonthClick(tenant, month.value)"
              >
                <div class="month-label">{{ month.label }}</div>
                <q-icon
                  :name="isMonthPaid(tenant, month.value) ? 'check_circle' : 'cancel'"
                  size="sm"
                  class="month-icon"
                />
              </div>
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions align="right" class="tenant-actions">
            <q-btn
              flat
              round
              color="primary"
              icon="add_circle"
              @click="showPaymentDialog(tenant)"
              class="action-btn"
            >
              <q-tooltip>{{ $t('rent.addPayment') }}</q-tooltip>
            </q-btn>
            <q-btn
              flat
              round
              color="secondary"
              icon="edit"
              @click="editTenant(tenant)"
              class="action-btn"
            >
              <q-tooltip>{{ $t('common.edit') }}</q-tooltip>
            </q-btn>
            <q-btn
              flat
              round
              color="negative"
              icon="delete"
              @click="confirmDeleteTenant(tenant)"
              class="action-btn"
            >
              <q-tooltip>{{ $t('common.delete') }}</q-tooltip>
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>

    <!-- Payment Dialog -->
    <q-dialog v-model="showPaymentForm" maximized-mobile>
      <q-card style="min-width: 350px" class="form-card">
        <q-card-section class="row items-center bg-positive text-white form-header">
          <div class="text-h6">{{ $t('rent.addPayment') }}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup class="no-focus-outline" />
        </q-card-section>

        <q-card-section class="q-pt-lg scroll" style="max-height: 60vh;">
          <q-form @submit="savePayment" class="q-gutter-md">
            <!-- Month Selection -->
            <q-select
              v-model="paymentForm.month"
              :options="months"
              :label="$t('rent.month') + ' *'"
              option-label="label"
              option-value="value"
              map-options
              emit-value
              outlined
              :rules="[val => !!val || $t('common.required')]"
              class="form-field"
              lazy-rules
            >
              <template v-slot:prepend>
                <q-icon name="calendar_month" />
              </template>
            </q-select>

            <!-- Payment Amount -->
            <q-input
              v-model.number="paymentForm.amount"
              :label="$t('rent.amount') + ' *'"
              outlined
              type="number"
              :rules="[
                val => !!val || $t('common.required'),
                val => val > 0 || $t('common.invalidNumber')
              ]"
              class="form-field"
              lazy-rules
              :suffix="'IQD'"
            >
              <template v-slot:prepend>
                <q-icon name="price_check" />
              </template>
            </q-input>

            <!-- Payment Date -->
            <q-input
              v-model="paymentForm.date"
              :label="$t('rent.paymentDate') + ' *'"
              outlined
              readonly
              :rules="[val => !!val || $t('common.required')]"
              class="form-field"
              lazy-rules
            >
              <template v-slot:prepend>
                <q-icon name="event" />
              </template>
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-date v-model="paymentForm.date" mask="YYYY-MM-DD">
                      <div class="row items-center justify-end q-pb-sm q-pr-sm">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </q-form>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right" class="q-pa-md">
          <q-btn :label="$t('common.cancel')" color="grey-7" flat v-close-popup class="form-btn" />
          <q-btn :label="$t('common.save')" color="positive" @click="savePayment" v-close-popup unelevated class="form-btn q-ml-sm" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Delete Confirmation Dialog -->
    <q-dialog v-model="showDeleteConfirm" persistent>
      <q-card class="confirmation-card">
        <q-card-section class="row items-center">
          <q-avatar icon="warning" color="negative" text-color="white" class="q-mr-md" />
          <span class="text-body1">{{ $t('common.confirmDelete') }}</span>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right" class="q-pa-md">
          <q-btn flat :label="$t('common.cancel')" color="grey-7" v-close-popup class="form-btn" />
          <q-btn unelevated :label="$t('common.yes')" color="negative" @click="deleteTenant" v-close-popup class="form-btn q-ml-sm" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Payment Removal Confirmation Dialog -->
    <q-dialog v-model="showRemovePaymentConfirm" persistent>
      <q-card class="confirmation-card">
        <q-card-section class="row items-center">
          <q-avatar icon="warning" color="negative" text-color="white" class="q-mr-md" />
          <span class="text-body1">{{ $t('rent.confirmRemovePayment') }}</span>
        </q-card-section>
        
        <q-separator />

        <q-card-actions align="right" class="q-pa-md">
          <q-btn flat :label="$t('common.cancel')" color="grey-7" v-close-popup class="form-btn" />
          <q-btn unelevated :label="$t('common.yes')" color="negative" @click="removePayment" v-close-popup class="form-btn q-ml-sm" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed, reactive, onMounted, nextTick } from 'vue';
import { useI18n } from 'vue-i18n';
import { useQuasar } from 'quasar';
import { useRentStore } from 'src/stores/rentStore';
import type { Tenant, Building, Payment } from 'src/stores/rentStore';

// Initialize i18n and Quasar
const { t } = useI18n();
const $q = useQuasar();

// Form visibility
const showBuildingForm = ref(false);
const showTenantForm = ref(false);

// Form references for focusing
const buildingName = ref(null);
const tenantName = ref(null);

const openBuildingDialog = async () => {
  resetBuildingForm();
  showBuildingForm.value = true;
  // Focus on the building name input after the dialog is shown
  await nextTick();
  if (buildingName.value) {
    buildingName.value.focus();
  }
};

const openTenantDialog = async (tenant?: Tenant) => {
  if (tenant) {
    editTenant(tenant);
  } else {
    resetTenantForm();
    editingTenant.value = false;
  }
  showTenantForm.value = true;
  // Focus on the tenant name input after the dialog is shown
  await nextTick();
  if (tenantName.value) {
    tenantName.value.focus();
  }
};

// Building form
const buildingForm = reactive<{
  id: string;
  name: string;
  location: string;
}>({
  id: '0',
  name: '',
  location: ''
});

// Initialize rent store
const rentStore = useRentStore();

// Use buildings from store
const buildings = computed(() => rentStore.buildings);

// Building options for filter dropdown
const buildingOptions = computed(() => {
  const options = [{ label: t('common.all'), value: null }];

  if (buildings.value && buildings.value.length > 0) {
    buildings.value.forEach(building => {
      options.push({
        label: building.name,
        value: building.id
      });
    });
  }

  return options;
});

// Load data on component mount
onMounted(async () => {
  await rentStore.loadBuildings();
  await rentStore.loadTenants();
});

// Tenant form
const tenantForm = reactive<{
  id: string;
  name: string;
  phoneNumber: string;
  building: string;
  monthlyRent: number;
  payments: Payment[];
}>({
  id: '0',
  name: '',
  phoneNumber: '',
  building: '1', // Default to first building
  monthlyRent: 0,
  payments: []
});

// Use tenants from store
const tenants = computed(() => rentStore.tenants);

// Summary statistics
const totalMonthlyRevenue = computed(() => {
  return tenants.value.reduce((sum, tenant) => sum + tenant.monthlyRent, 0);
});

const collectionRate = computed(() => {
  const currentMonth = new Date().getMonth() + 1; // 1-12
  const tenantsWithCurrentMonthPaid = tenants.value.filter(
    tenant => tenant.payments && tenant.payments.some(p => p.month === currentMonth)
  ).length;
  
  return tenants.value.length > 0
    ? Math.round((tenantsWithCurrentMonthPaid / tenants.value.length) * 100)
    : 0;
});

// Months - using English abbreviations for both languages
const months = [
  { label: 'Jan', value: 1 },
  { label: 'Feb', value: 2 },
  { label: 'Mar', value: 3 },
  { label: 'Apr', value: 4 },
  { label: 'May', value: 5 },
  { label: 'Jun', value: 6 },
  { label: 'Jul', value: 7 },
  { label: 'Aug', value: 8 },
  { label: 'Sep', value: 9 },
  { label: 'Oct', value: 10 },
  { label: 'Nov', value: 11 },
  { label: 'Dec', value: 12 }
];

// Search and filter
const searchText = ref('');
const filterBuilding = ref(null);

const filteredTenants = computed(() => {
  let result = [...tenants.value];

  // Filter by search text
  if (searchText.value) {
    const search = searchText.value.toLowerCase();
    result = result.filter(tenant =>
      tenant.name.toLowerCase().includes(search) ||
      tenant.phoneNumber.includes(search) ||
      rentStore.getBuildingName(tenant.building).toLowerCase().includes(search)
    );
  }

  // Filter by building
  if (filterBuilding.value) {
    result = result.filter(tenant => tenant.building === filterBuilding.value);
  }

  return result;
});

// Helper functions
const getBuildingName = (buildingId: string) => {
  return rentStore.getBuildingName(buildingId);
};

const formatCurrency = (amount: number) => {
  return amount.toLocaleString() + ' IQD';
};

const isMonthPaid = (tenant: any, month: number) => {
  return tenant.payments && tenant.payments.some((payment: any) => payment.month === month);
};

// Save building
const saveBuilding = async () => {
  const id = await rentStore.addBuilding({
    name: buildingForm.name,
    location: buildingForm.location
  });

  if (id) {
    $q.notify({
      color: 'positive',
      message: t('rent.buildingAdded'),
      icon: 'check',
      position: 'top',
      classes: 'notification-toast'
    });
  }

  resetBuildingForm();
  showBuildingForm.value = false;
};

// Reset building form
const resetBuildingForm = () => {
  Object.assign(buildingForm, {
    id: '0',
    name: '',
    location: ''
  });
};

// Cancel building form
const cancelBuildingForm = () => {
  resetBuildingForm();
  showBuildingForm.value = false;
};

// Edit tenant
const editingTenant = ref(false);

const editTenant = (tenant: Tenant) => {
  // Convert tenant data to match our form structure
  Object.assign(tenantForm, {
    id: tenant.id,
    name: tenant.name,
    phoneNumber: tenant.phoneNumber,
    building: tenant.building,
    monthlyRent: tenant.monthlyRent,
    payments: tenant.payments ? [...tenant.payments] : []
  });
  editingTenant.value = true;
  showTenantForm.value = true;
};

// Save tenant
const saveTenant = async () => {
  if (editingTenant.value) {
    // Update existing tenant
    const success = await rentStore.updateTenant(tenantForm.id, {
      name: tenantForm.name,
      phoneNumber: tenantForm.phoneNumber,
      building: tenantForm.building,
      monthlyRent: Number(tenantForm.monthlyRent),
      payments: tenantForm.payments
    });

    if (success) {
      $q.notify({
        color: 'positive',
        message: t('rent.tenantUpdated'),
        icon: 'check',
        position: 'top',
        classes: 'notification-toast'
      });
    }
  } else {
    // Add new tenant
    const id = await rentStore.addTenant({
      name: tenantForm.name,
      phoneNumber: tenantForm.phoneNumber,
      building: tenantForm.building,
      monthlyRent: Number(tenantForm.monthlyRent),
      payments: []
    });

    if (id) {
      $q.notify({
        color: 'positive',
        message: t('rent.tenantAdded'),
        icon: 'check',
        position: 'top',
        classes: 'notification-toast'
      });
    }
  }

  resetTenantForm();
  showTenantForm.value = false;
};

// Reset tenant form
const resetTenantForm = () => {
  Object.assign(tenantForm, {
    id: '0',
    name: '',
    phoneNumber: '',
    building: buildings.value.length > 0 ? buildings.value[0].id : '1',
    monthlyRent: 0,
    payments: []
  });
  editingTenant.value = false;
};

// Cancel tenant form
const cancelTenantForm = () => {
  resetTenantForm();
  showTenantForm.value = false;
};

// Delete tenant
const showDeleteConfirm = ref(false);
const tenantToDelete = ref<Tenant | null>(null);

const confirmDeleteTenant = (tenant: Tenant) => {
  tenantToDelete.value = tenant;
  showDeleteConfirm.value = true;
};

const deleteTenant = async () => {
  if (tenantToDelete.value) {
    const success = await rentStore.deleteTenant(tenantToDelete.value.id.toString());
    if (success) {
      $q.notify({
        color: 'positive',
        message: t('rent.tenantDeleted'),
        icon: 'check',
        position: 'top',
        classes: 'notification-toast'
      });
    }
  }
  showDeleteConfirm.value = false;
  tenantToDelete.value = null;
};

// Payment handling
const showPaymentForm = ref(false);
const showRemovePaymentConfirm = ref(false);
const selectedTenant = ref<Tenant | null>(null);
const selectedMonth = ref<number | null>(null);
const paymentForm = reactive<{
  month: number | null;
  amount: number | null;
  date: string;
}>({
  month: null,
  amount: null,
  date: ''
});

const showPaymentDialog = (tenant: Tenant) => {
  selectedTenant.value = tenant;

  // Set default values
  const today = new Date();
  const formattedDate = today.toISOString().split('T')[0] || '';

  paymentForm.month = 1; // Default to January
  paymentForm.amount = tenant.monthlyRent;
  paymentForm.date = formattedDate;

  showPaymentForm.value = true;
};

// Handle month click - either show payment form or confirmation dialog
const handleMonthClick = (tenant: Tenant, month: number) => {
  selectedTenant.value = tenant;
  selectedMonth.value = month;

  // Check if payment already exists
  if (tenant.payments && Array.isArray(tenant.payments)) {
    const existingPayment = tenant.payments.find((p) => p.month === month);
    if (existingPayment) {
      // Show confirmation dialog for removing payment
      showRemovePaymentConfirm.value = true;
    } else {
      // Show form to add new payment
      addPayment(tenant, month);
    }
  } else {
    // No payments array, show form to add new payment
    addPayment(tenant, month);
  }
};

// Remove payment after confirmation
const removePayment = async () => {
  if (selectedTenant.value && selectedMonth.value !== null) {
    const tenant = selectedTenant.value;
    const month = selectedMonth.value;

    if (tenant.payments && Array.isArray(tenant.payments)) {
      const index = tenant.payments.findIndex(p => p.month === month);
      if (index !== -1) {
        // Update the tenant with the payment removed
        const updatedPayments = [...tenant.payments];
        updatedPayments.splice(index, 1);

        const success = await rentStore.updateTenant(tenant.id, {
          ...tenant,
          payments: updatedPayments
        });

        if (success) {
          $q.notify({
            color: 'negative',
            message: t('rent.paymentRemoved'),
            icon: 'check',
            position: 'top',
            classes: 'notification-toast'
          });
        }
      }
    }
  }
};

// Add new payment
const addPayment = (tenant: Tenant, month: number) => {
  // Set up payment form
  const today = new Date();
  const formattedDate = today.toISOString().split('T')[0] || '';

  paymentForm.month = month;
  paymentForm.amount = tenant.monthlyRent;
  paymentForm.date = formattedDate;

  showPaymentForm.value = true;
};

const savePayment = async () => {
  if (selectedTenant.value && paymentForm.month && paymentForm.amount && paymentForm.date) {
    const payment = {
      month: paymentForm.month,
      amount: Number(paymentForm.amount),
      date: paymentForm.date
    };

    const success = await rentStore.addPayment(selectedTenant.value.id.toString(), payment);

    if (success) {
      $q.notify({
        color: 'positive',
        message: t('rent.paymentAdded'),
        icon: 'check',
        position: 'top',
        classes: 'notification-toast'
      });

      showPaymentForm.value = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.page-title {
  position: relative;
  font-weight: 600;
  color: var(--primary-color);
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: var(--accent-color);
    border-radius: 3px;
  }
  
  .body--dark & {
    color: #fff;
  }
}

/* Stats cards styling */
.stats-card {
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
  
  .stats-content {
    padding: 8px 0;
  }
  
  .counter-number {
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 1.2;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .icon-wrapper {
    height: 56px;
    width: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
}

/* Form styling */
.form-card {
  border-radius: 12px;
  overflow: hidden;
  
  .form-header {
    padding: 16px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    
    .body--dark & {
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
  }
  
  .form-field {
    margin-bottom: 16px;
    
    &:last-child {
      margin-bottom: 0;
    }
    
    .q-field__control {
      height: 56px;
      border-radius: 8px;
      transition: all 0.3s ease;
      
      &:hover {
        border-color: var(--primary-color);
      }
    }
  }
  
  .form-btn {
    padding: 8px 20px;
    border-radius: 8px;
    font-weight: 500;
    
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
      
      .body--dark & {
        background-color: rgba(255, 255, 255, 0.1);
      }
    }
  }
}

/* Search and filter styling */
.search-filter-container {
  margin: 20px 0;
  
  .search-field, .filter-field {
    transition: all 0.3s ease;
    
    &:focus-within {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
      
      .body--dark & {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }
    }
    
    .q-field__control {
      border-radius: 8px;
      
      &:hover {
        border-color: var(--primary-color);
      }
    }
  }
}

/* Empty state styling */
.empty-state {
  padding: 40px 20px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.02);
  margin: 20px 0;
  
  .body--dark & {
    background: rgba(255, 255, 255, 0.05);
  }
}

/* Tenant card styling */
.tenant-card {
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }

  .tenant-header {
    padding: 20px;

    .tenant-name {
      font-weight: 600;
      margin-bottom: 8px;
    }

    .tenant-building, .tenant-phone {
      opacity: 0.8;
      font-size: 0.9rem;
      margin-bottom: 4px;
    }
    
    .tenant-phone-link {
      color: inherit;
      text-decoration: none;
      transition: color 0.3s ease;
      
      &:hover {
        color: var(--primary-color);
        text-decoration: underline;
      }
    }

    .tenant-rent {
      color: var(--accent-color);
      font-weight: 700;
      font-size: 1.2rem;

      .body--dark & {
        color: var(--accent-color);
      }
      
      .text-caption {
        opacity: 0.7;
        font-size: 0.75rem;
        margin-top: 2px;
      }
    }
  }

  .payment-history-title {
    font-weight: 600;
    display: flex;
    align-items: center;
    margin-left: 4px;
  }

  .payment-tracker {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 12px;

    .month-item {
      flex: 0 0 calc(25% - 8px);
      padding: 8px 4px;
      border-radius: 8px;
      text-align: center;
      cursor: pointer;
      transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      user-select: none;

      .month-label {
        margin-bottom: 4px;
        font-weight: 500;
        font-size: 0.9rem;
      }

      &.paid {
        background-color: rgba(76, 175, 80, 0.12);
        color: #4CAF50;

        .month-icon {
          color: #4CAF50;
        }

        &:hover {
          background-color: rgba(76, 175, 80, 0.2);
          transform: translateY(-2px);
        }
      }

      &.unpaid {
        background-color: rgba(244, 67, 54, 0.12);
        color: #F44336;

        .month-icon {
          color: #F44336;
        }

        &:hover {
          background-color: rgba(244, 67, 54, 0.2);
          transform: translateY(-2px);
        }
      }
    }
  }

  .tenant-actions {
    padding: 12px 16px;
    background-color: rgba(0, 0, 0, 0.02);
    
    .body--dark & {
      background-color: rgba(255, 255, 255, 0.05);
    }
    
    .action-btn {
      margin: 0 4px;
      position: relative;
      transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
      
      &:hover {
        transform: translateY(-2px);
      }
    }
  }
}

/* Confirmation dialog styling */
.confirmation-card {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  
  .q-card-section {
    padding: 20px;
  }
}

/* Animations */
.pulse-icon {
  animation: pulse 2s infinite;
}

.rotating-icon {
  transition: transform 0.5s ease;
}

.tenant-card:hover .rotating-icon {
  transform: rotate(15deg);
}

.bounce-icon {
  animation: bounce 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

/* Scale button animation */
.scale-btn {
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.3s;
}

.scale-btn:hover {
  transform: scale(1.05);
}

.scale-btn:active {
  transform: scale(0.95);
}

/* Responsive adjustments */
@media (max-width: 599px) {
  .counter-number {
    font-size: 2rem !important;
  }
  
  .payment-tracker {
    .month-item {
      flex: 0 0 calc(33.33% - 8px) !important;
    }
  }

  .tenant-card {
    .tenant-header {
      padding: 16px;
      
      .col-8 {
        width: 65%;
      }

      .col-4 {
        width: 35%;
      }
      
      .tenant-name {
        font-size: 1.1rem !important;
      }
      
      .tenant-rent {
        font-size: 1rem !important;
      }
    }
  }
  
  .page-title {
    font-size: 1.5rem !important;
  }
}

@media (max-width: 399px) {
  .stats-card {
    .counter-number {
      font-size: 1.75rem !important;
    }
    
    .icon-wrapper {
      height: 48px;
      width: 48px;
      
      .q-icon {
        font-size: 32px !important;
      }
    }
  }
  
  .payment-tracker {
    .month-item {
      flex: 0 0 calc(50% - 8px) !important;
      padding: 6px 4px !important;
      
      .month-label {
        font-size: 0.8rem !important;
      }
    }
  }
  
  .tenant-card {
    .tenant-header {
      .tenant-name {
        font-size: 1rem !important;
      }
      
      .tenant-building, .tenant-phone {
        font-size: 0.8rem !important;
      }
      
      .tenant-rent {
        font-size: 0.9rem !important;
      }
    }
  }
}
</style>
