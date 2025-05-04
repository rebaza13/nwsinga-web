<template>
  <q-page padding>
    <div class="q-mb-lg">
      <div class="row justify-between items-center q-py-md">
        <h1 class="text-h4 q-my-none">{{ $t('debts.title') }}</h1>
        <q-btn
          color="primary"
          :label="$t('debts.addDebt')"
          @click="openDebtDialog"
          icon="add"
          unelevated
        />
      </div>
    </div>

    <!-- Debt Form Dialog -->
    <q-dialog v-model="showForm" persistent>
      <q-card style="width: 600px; max-width: 90vw;">
        <q-card-section class="row items-center">
          <div class="text-h6">{{ $t('debts.addDebt') }}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup @click="cancelForm" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-form @submit="saveDebt" class="q-gutter-md">
            <!-- Debtor Name -->
            <q-input
              v-model="debtForm.debtorName"
              :label="$t('debts.debtorName') + ' *'"
              outlined
              :rules="[val => !!val || $t('common.required')]"
            />

            <!-- Debt Date -->
            <q-input
              v-model="debtForm.date"
              :label="$t('debts.debtDate') + ' *'"
              outlined
              readonly
              :rules="[val => !!val || $t('common.required')]"
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-date v-model="debtForm.date" mask="YYYY-MM-DD">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>

            <!-- Due Date -->
            <q-input
              v-model="debtForm.dueDate"
              :label="$t('debts.dueDate')"
              outlined
              readonly
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-date v-model="debtForm.dueDate" mask="YYYY-MM-DD">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>

            <!-- Amount -->
            <q-input
              v-model.number="debtForm.amount"
              :label="$t('debts.amount') + ' *'"
              outlined
              type="number"
              :rules="[
                val => !!val || $t('common.required'),
                val => val > 0 || $t('common.invalidNumber')
              ]"
            />

            <!-- Currency -->
            <q-select
              v-model="debtForm.currency"
              :options="currencyOptions"
              :label="$t('debts.currency') + ' *'"
              outlined
              :rules="[val => !!val || $t('common.required')]"
            />

            <!-- Contact Info -->
            <q-input
              v-model="debtForm.contactInfo"
              :label="$t('debts.contactInfo')"
              outlined
            />

            <!-- Description -->
            <q-input
              v-model="debtForm.description"
              :label="$t('debts.description')"
              outlined
              type="textarea"
              rows="3"
            />

            <!-- Status -->
            <q-select
              v-model="debtForm.status"
              :options="statusOptions"
              :label="$t('debts.status') + ' *'"
              outlined
              :rules="[val => !!val || $t('common.required')]"
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
            @click="saveDebt"
            unelevated
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Debts Summary -->
    <div class="row q-col-gutter-md q-mb-lg">
      <div class="col-12 col-md-4">
        <q-card class="bg-primary text-white">
          <q-card-section>
            <div class="text-h6">{{ $t('debts.totalDebts') }}</div>
            <div class="text-h3">{{ debtStore.debts.length }}</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-4">
        <q-card class="bg-secondary text-white">
          <q-card-section>
            <div class="text-h6">{{ $t('debts.totalAmountUSD') }}</div>
            <div class="text-h3">${{ formatNumber(totalAmountUSD) }}</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-4">
        <q-card class="bg-accent text-white">
          <q-card-section>
            <div class="text-h6">{{ $t('debts.totalAmountIQD') }}</div>
            <div class="text-h3">{{ formatNumber(totalAmountIQD) }} IQD</div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- Search and Filter -->
    <div class="row q-col-gutter-md q-mb-md">
      <div class="col-12 col-md-8">
        <q-input
          v-model="searchText"
          :placeholder="$t('common.search')"
          outlined
          dense
          clearable
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
      <div class="col-12 col-md-4">
        <q-select
          v-model="statusFilter"
          :options="filterOptions"
          :label="$t('debts.status')"
          outlined
          dense
          option-label="label"
          option-value="value"
          map-options
        />
      </div>
    </div>

    <!-- Debts List -->
    <div v-if="filteredDebts.length === 0" class="text-center q-pa-lg">
      <q-icon name="money_off" size="4rem" color="grey-5" />
      <p class="text-subtitle1 q-mt-sm">{{ $t('common.noResults') }}</p>
    </div>

    <div v-else class="q-mt-md">
      <q-list class="q-pa-none">
        <q-item
          v-for="debt in filteredDebts"
          :key="debt.id"
          class="debt-item q-mb-md"
          clickable
          v-ripple
        >
          <q-item-section>
            <div class="row items-start justify-between q-mb-sm">
              <div class="col-8">
                <q-item-label class="text-h6">
                  {{ debt.debtorName }}
                </q-item-label>
                <q-item-label caption class="q-mt-xs">
                  <q-icon name="event" size="xs" class="q-mr-xs" />
                  {{ formatDate(debt.date) }}
                  <span v-if="debt.dueDate">
                    - {{ $t('debts.due') }}: {{ formatDate(debt.dueDate) }}
                  </span>
                </q-item-label>
              </div>
              <div class="col-4 text-right">
                <q-badge :color="getStatusColor(debt.status)" class="q-mb-sm">
                  {{ typeof debt.status === 'object' ? (debt.status as any).label : statusMap[debt.status] || debt.status }}
                </q-badge>
                <div class="text-h6 text-weight-bold q-mt-sm">
                  {{ formatCurrency(debt.amount, debt.currency) }}
                </div>
              </div>
            </div>

            <q-separator class="q-my-sm" />

            <div class="row q-col-gutter-sm">
              <div class="col-12" v-if="debt.description">
                <q-item-label class="text-body2">
                  <q-icon name="description" size="xs" class="q-mr-xs" />
                  {{ debt.description }}
                </q-item-label>
              </div>
              <div class="col-12" v-if="debt.contactInfo">
                <q-item-label caption>
                  <q-icon name="phone" size="xs" class="q-mr-xs" />
                  {{ debt.contactInfo }}
                </q-item-label>
              </div>
            </div>

            <div class="row justify-end q-mt-md">
              <q-btn
                flat
                round
                color="primary"
                icon="edit"
                @click.stop="editDebt(debt)"
                class="q-mr-xs"
                size="sm"
              >
                <q-tooltip>{{ $t('common.edit') }}</q-tooltip>
              </q-btn>
              <q-btn
                flat
                round
                color="negative"
                icon="delete"
                @click.stop="confirmDeleteDebt(debt)"
                size="sm"
              >
                <q-tooltip>{{ $t('common.delete') }}</q-tooltip>
              </q-btn>
            </div>
          </q-item-section>
        </q-item>
      </q-list>
    </div>

    <!-- Delete Confirmation Dialog -->
    <q-dialog v-model="showDeleteConfirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="warning" color="negative" text-color="white" />
          <span class="q-ml-sm">{{ $t('debts.confirmDelete') }}</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat :label="$t('common.cancel')" color="primary" v-close-popup />
          <q-btn flat :label="$t('common.yes')" color="negative" @click="deleteDebt" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed, reactive, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useQuasar } from 'quasar';
// @ts-ignore - Import will be resolved at runtime
import { useDebtStore } from 'src/stores/debtStore';
// @ts-ignore - Import will be resolved at runtime
import type { Debt } from 'src/stores/debtStore';

// Initialize i18n and Quasar
const { t } = useI18n();
const $q = useQuasar();

// Form visibility
const showForm = ref(false);
const openDebtDialog = () => {
  resetForm();
  showForm.value = true;
};

// Initialize debt store
const debtStore = useDebtStore();

// Load debts on component mount
onMounted(async () => {
  await debtStore.loadDebts();
});

// Currency options
const currencyOptions = [
  { label: 'USD ($)', value: 'USD' },
  { label: 'IQD', value: 'IQD' }
];

// Status options
const statusOptions = [
  { label: t('debts.statusPending'), value: 'Pending' },
  { label: t('debts.statusPartial'), value: 'Partial' },
  { label: t('debts.statusPaid'), value: 'Paid' },
  { label: t('debts.statusOverdue'), value: 'Overdue' }
];

// Status map for quick lookup
const statusMap = {
  'Pending': t('debts.statusPending'),
  'Partial': t('debts.statusPartial'),
  'Paid': t('debts.statusPaid'),
  'Overdue': t('debts.statusOverdue')
};

// Filter options with "All" option
const filterOptions = computed(() => {
  return [
    { label: t('common.all'), value: '' },
    ...statusOptions
  ];
});

// Debt form
const debtForm = reactive<{
  id: string;
  debtorName: string;
  date: string;
  dueDate: string;
  amount: number;
  currency: string;
  contactInfo: string;
  description: string;
  status: string;
  isEditing: boolean;
}>({
  id: '',
  debtorName: '',
  date: '',
  dueDate: '',
  amount: 0,
  currency: 'USD',
  contactInfo: '',
  description: '',
  status: 'Pending',
  isEditing: false
});

// Search and filter
const searchText = ref('');
const statusFilter = ref('');

const filteredDebts = computed(() => {
  let result = [...debtStore.debts];

  // Filter by search text
  if (searchText.value) {
    const search = searchText.value.toLowerCase();
    result = result.filter(debt =>
      debt.debtorName.toLowerCase().includes(search) ||
      (debt.description && debt.description.toLowerCase().includes(search)) ||
      (debt.contactInfo && debt.contactInfo.toLowerCase().includes(search))
    );
  }

  // Filter by status
  if (statusFilter.value && statusFilter.value !== '') {
    console.log('Filtering by status:', statusFilter.value);
    result = result.filter(debt => {
      // Handle status as object or string
      const debtStatus = typeof debt.status === 'object' && debt.status ? (debt.status as any).value : debt.status;
      return debtStatus === statusFilter.value;
    });
  }

  return result;
});

// Total amounts
const totalAmountUSD = computed(() => {
  return debtStore.debts
    .filter(debt => debt.currency === 'USD')
    .reduce((sum, debt) => sum + debt.amount, 0);
});

const totalAmountIQD = computed(() => {
  return debtStore.debts
    .filter(debt => debt.currency === 'IQD')
    .reduce((sum, debt) => sum + debt.amount, 0);
});

// Helper functions
const formatCurrency = (amount: number, currency: string) => {
  if (currency === 'USD') {
    return '$' + formatNumber(amount);
  } else {
    return formatNumber(amount) + ' IQD';
  }
};

const formatNumber = (num: number) => {
  return num.toLocaleString();
};

const formatDate = (dateString: string) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString();
};

const getStatusColor = (status: any) => {
  // Handle status as object
  const statusValue = typeof status === 'object' ? status?.value : status;

  switch (statusValue) {
    case 'Paid':
      return 'positive';
    case 'Partial':
      return 'warning';
    case 'Overdue':
      return 'negative';
    default:
      return 'blue';
  }
};

const getStatusLabel = (status: string) => {
  // Use the status map for consistent translation
  return statusMap[status] || status;
};

// Save debt
const saveDebt = async () => {
  // Ensure status is a string, not an object
  const statusValue = typeof debtForm.status === 'object' && debtForm.status ? (debtForm.status as any).value : debtForm.status;

  if (debtForm.isEditing) {
    // Update existing debt
    const success = await debtStore.updateDebt(debtForm.id, {
      debtorName: debtForm.debtorName,
      date: debtForm.date,
      dueDate: debtForm.dueDate,
      amount: Number(debtForm.amount),
      currency: debtForm.currency,
      contactInfo: debtForm.contactInfo,
      description: debtForm.description,
      status: statusValue
    });

    if (success) {
      $q.notify({
        color: 'positive',
        message: t('debts.debtUpdated'),
        icon: 'check'
      });
    }
  } else {
    // Add new debt
    const id = await debtStore.addDebt({
      debtorName: debtForm.debtorName,
      date: debtForm.date,
      dueDate: debtForm.dueDate,
      amount: Number(debtForm.amount),
      currency: debtForm.currency,
      contactInfo: debtForm.contactInfo,
      description: debtForm.description,
      status: statusValue
    });

    if (id) {
      $q.notify({
        color: 'positive',
        message: t('debts.debtAdded'),
        icon: 'check'
      });
    }
  }

  resetForm();
  showForm.value = false;
};

// Edit debt
const editDebt = (debt: Debt) => {
  Object.assign(debtForm, {
    ...debt,
    isEditing: true
  });
  showForm.value = true;
};

// Reset form
const resetForm = () => {
  Object.assign(debtForm, {
    id: '',
    debtorName: '',
    date: '',
    dueDate: '',
    amount: 0,
    currency: 'USD',
    contactInfo: '',
    description: '',
    status: 'Pending',
    isEditing: false
  });
};

// Cancel form
const cancelForm = () => {
  resetForm();
  showForm.value = false;
};

// Delete debt
const showDeleteConfirm = ref(false);
const debtToDelete = ref<Debt | null>(null);

const confirmDeleteDebt = (debt: Debt) => {
  debtToDelete.value = debt;
  showDeleteConfirm.value = true;
};

const deleteDebt = async () => {
  if (debtToDelete.value) {
    const success = await debtStore.deleteDebt(debtToDelete.value.id);
    if (success) {
      $q.notify({
        color: 'positive',
        message: t('debts.debtDeleted'),
        icon: 'check'
      });
    }
  }
  showDeleteConfirm.value = false;
  debtToDelete.value = null;
};
</script>

<style scoped>
.debt-item {
  transition: background-color 0.3s;
}

.debt-item:hover {
  background-color: rgba(0, 0, 0, 0.03);
}
</style>
