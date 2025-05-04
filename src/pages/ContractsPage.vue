<template>
  <q-page padding>
    <div class="q-mb-lg">
      <div class="row justify-between items-center q-py-md">
        <h1 class="text-h4 q-my-none">{{ $t('contracts.title') }}</h1>
        <q-btn
          color="primary"
          :label="$t('contracts.addContract')"
          @click="openContractDialog"
          icon="add"
          unelevated
        />
      </div>
    </div>

    <!-- Contract Form Dialog -->
    <q-dialog v-model="showForm" persistent>
      <q-card style="width: 600px; max-width: 90vw;">
        <q-card-section class="row items-center">
          <div class="text-h6">{{ $t('contracts.addContract') }}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup @click="cancelForm" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-form @submit="saveContract" class="q-gutter-md">
            <!-- Contract Date -->
            <q-input
              v-model="contractForm.date"
              :label="$t('contracts.contractDate') + ' *'"
              outlined
              readonly
              :rules="[val => !!val || $t('common.required')]"
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-date v-model="contractForm.date" mask="YYYY-MM-DD">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>

            <!-- First Party -->
            <q-input
              v-model="contractForm.firstParty"
              :label="$t('contracts.firstParty') + ' *'"
              outlined
              :rules="[val => !!val || $t('common.required')]"
            />

            <!-- Second Party -->
            <q-input
              v-model="contractForm.secondParty"
              :label="$t('contracts.secondParty') + ' *'"
              outlined
              :rules="[val => !!val || $t('common.required')]"
            />

            <!-- Contract Amount -->
            <q-input
              v-model.number="contractForm.amount"
              :label="$t('contracts.contractAmount') + ' *'"
              outlined
              type="number"
              :rules="[
                val => !!val || $t('common.required'),
                val => val > 0 || $t('common.invalidNumber')
              ]"
            />

            <!-- Description -->
            <q-input
              v-model="contractForm.description"
              :label="$t('contracts.description')"
              outlined
              type="textarea"
              rows="3"
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
            @click="saveContract"
            unelevated
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Contracts Summary -->
    <div class="row q-col-gutter-md q-mb-lg">
      <div class="col-12 col-md-6">
        <q-card class="bg-primary text-white">
          <q-card-section>
            <div class="text-h6">{{ $t('contracts.totalContracts') }}</div>
            <div class="text-h3">{{ contractStore.contracts.length }}</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-6">
        <q-card class="bg-secondary text-white">
          <q-card-section>
            <div class="text-h6">{{ $t('contracts.totalAmount') }}</div>
            <div class="text-h3">{{ formatCurrency(totalAmount) }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- Search -->
    <div class="q-mb-md">
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

    <!-- Contracts List -->
    <div v-if="filteredContracts.length === 0" class="text-center q-pa-lg">
      <q-icon name="description" size="4rem" color="grey-5" />
      <p class="text-subtitle1 q-mt-sm">{{ $t('common.noResults') }}</p>
    </div>

    <div v-else class="q-mt-md">
      <q-list class="q-pa-none">
        <q-item
          v-for="contract in filteredContracts"
          :key="contract.id"
          class="contract-item q-pa-md q-mb-md"
          clickable
          v-ripple
        >
          <q-item-section>
            <div class="row items-start justify-between q-mb-sm">
              <div class="col-9">
                <q-item-label class="contract-parties">
                  {{ contract.firstParty }} & {{ contract.secondParty }}
                </q-item-label>
                <q-item-label class="contract-date q-mt-xs">
                  <q-icon name="event" size="xs" class="q-mr-xs" />
                  {{ formatDate(contract.date) }}
                </q-item-label>
              </div>
              <div class="col-3 text-right">
                <q-item-label class="contract-amount">
                  {{ formatCurrency(contract.amount) }}
                </q-item-label>
              </div>
            </div>

            <q-item-label v-if="contract.description" class="contract-description">
              {{ contract.description }}
            </q-item-label>

            <div class="row justify-end q-mt-sm">
              <q-btn
                flat
                round
                color="negative"
                icon="delete"
                @click.stop="confirmDeleteContract(contract)"
                size="sm"
              >
                <q-tooltip>{{ $t('contracts.delete') }}</q-tooltip>
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
          <span class="q-ml-sm">{{ $t('contracts.confirmDelete') }}</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat :label="$t('common.cancel')" color="primary" v-close-popup />
          <q-btn flat :label="$t('common.yes')" color="negative" @click="deleteContract" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed, reactive, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useQuasar } from 'quasar';
import { useContractStore } from 'src/stores/contractStore';
import type { Contract } from 'src/stores/contractStore';

// Initialize i18n and Quasar
const { t } = useI18n();
const $q = useQuasar();

// Form visibility
const showForm = ref(false);
const openContractDialog = () => {
  resetForm();
  showForm.value = true;
};

// Initialize contract store
const contractStore = useContractStore();

// Load contracts on component mount
onMounted(async () => {
  await contractStore.loadContracts();
});

// Contract form
const contractForm = reactive<{
  id: number;
  date: string;
  firstParty: string;
  secondParty: string;
  amount: number;
  description: string;
}>({
  id: 0,
  date: '',
  firstParty: '',
  secondParty: '',
  amount: 0,
  description: ''
});

// Date picker model
const date = ref('');
const showDatePicker = ref(false);

// Search
const searchText = ref('');

const filteredContracts = computed(() => {
  if (!searchText.value) return contractStore.contracts;

  const search = searchText.value.toLowerCase();
  return contractStore.contracts.filter(contract =>
    contract.firstParty.toLowerCase().includes(search) ||
    contract.secondParty.toLowerCase().includes(search) ||
    contract.description.toLowerCase().includes(search)
  );
});

// Total amount
const totalAmount = computed(() => {
  return contractStore.totalAmount;
});

// Helper functions
const formatCurrency = (amount: number) => {
  return '$' + amount.toLocaleString();
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};

// Save contract
const saveContract = async () => {
  const id = await contractStore.addContract({
    date: contractForm.date,
    firstParty: contractForm.firstParty,
    secondParty: contractForm.secondParty,
    amount: Number(contractForm.amount),
    description: contractForm.description
  });

  if (id) {
    $q.notify({
      color: 'positive',
      message: t('contracts.contractAdded'),
      icon: 'check'
    });
  }

  resetForm();
  showForm.value = false;
};

// Reset form
const resetForm = () => {
  Object.assign(contractForm, {
    id: 0,
    date: '',
    firstParty: '',
    secondParty: '',
    amount: 0,
    description: ''
  });
};

// Cancel form
const cancelForm = () => {
  resetForm();
  showForm.value = false;
};

// Delete contract
const showDeleteConfirm = ref(false);
const contractToDelete = ref<Contract | null>(null);

const confirmDeleteContract = (contract: Contract) => {
  contractToDelete.value = contract;
  showDeleteConfirm.value = true;
};

const deleteContract = async () => {
  if (contractToDelete.value) {
    const success = await contractStore.deleteContract(contractToDelete.value.id);
    if (success) {
      $q.notify({
        color: 'positive',
        message: t('contracts.contractDeleted'),
        icon: 'check'
      });
    }
  }
  showDeleteConfirm.value = false;
  contractToDelete.value = null;
};
</script>
