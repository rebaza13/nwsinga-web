<template>
  <q-page padding>
    <div class="q-pa-md">
      <h1 class="text-h4 q-mb-md">{{ $t('settings.title') }}</h1>

      <q-card class="q-mb-lg">
        <q-card-section>
          <h2 class="text-h6 q-mb-md">{{ $t('settings.language') }}</h2>
          <q-select
            v-model="currentLocale"
            :options="localeOptions"
            outlined
            emit-value
            map-options
            @update:model-value="changeLocale"
          />
        </q-card-section>
      </q-card>

      <q-card>
        <q-card-section>
          <h2 class="text-h6 q-mb-md">{{ $t('settings.theme') }}</h2>
          <div class="row items-center">
            <q-icon name="light_mode" class="q-mr-md" />
            <q-toggle
              v-model="darkMode"
              color="primary"
              @update:model-value="handleDarkModeChange"
            />
            <q-icon name="dark_mode" class="q-ml-md" />
          </div>
          <div class="text-subtitle1 q-mt-sm">
            {{ darkMode ? $t('settings.darkMode') : $t('settings.lightMode') }}
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useQuasar } from 'quasar';
import { useDarkMode } from 'src/composables/useDarkMode';

// Initialize i18n
const i18n = useI18n();
const $q = useQuasar();

// Get the current locale from localStorage or default to 'en-US'
const savedLocale = localStorage.getItem('app-locale') || 'en-US';
const currentLocale = ref(savedLocale);

// Dark mode
const { isDark, toggleDarkMode } = useDarkMode();
const darkMode = ref(isDark.value);

// Initialize settings when component mounts
onMounted(() => {
  // Make sure the darkMode ref stays in sync with isDark
  darkMode.value = isDark.value;

  // Make sure the locale is set correctly
  const savedLocale = localStorage.getItem('app-locale') || 'en-US';
  currentLocale.value = savedLocale;

  // Set the document direction
  document.documentElement.dir = savedLocale === 'ckb' ? 'rtl' : 'ltr';

  console.log('Settings initialized with locale:', savedLocale);
});

const localeOptions = [
  { label: 'English', value: 'en-US' },
  { label: 'کوردی سۆرانی', value: 'ckb' }
];

function changeLocale(val: string) {
  // Set the locale - need to access the global i18n instance
  // In Vue I18n v9, we need to use the global property
  // @ts-expect-error
  i18n.locale = val;
  currentLocale.value = val;

  // Update the document direction
  document.documentElement.dir = val === 'ckb' ? 'rtl' : 'ltr';

  // Update body class for RTL styling
  if (val === 'ckb') {
    document.body.classList.add('rtl');
  } else {
    document.body.classList.remove('rtl');
  }

  // Save to localStorage
  localStorage.setItem('app-locale', val);

  console.log('Language changed to:', val);
}

function handleDarkModeChange(val: boolean) {
  // Set dark mode directly
  $q.dark.set(val);
  localStorage.setItem('darkMode', val.toString());

  // Also update the isDark ref from the composable
  if (isDark.value !== val) {
    toggleDarkMode();
  }
}
</script>

