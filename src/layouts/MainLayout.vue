<template>
  <q-layout view="hHh lpR fFf">
    <!-- Header -->
    <q-header :class="[
      'safe-area-top modern-header',
      isDark ? 'bg-dark header-dark' : 'bg-primary header-light'
    ]">
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
          class="no-focus-outline"
        />
        <q-toolbar-title class="text-weight-bold title-font">
          {{ $t('home.title') }}
        </q-toolbar-title>
        <q-btn
          flat
          round
          dense
          :icon="isDark ? 'dark_mode' : 'light_mode'"
          @click="toggleDarkMode"
          class="no-focus-outline"
        />
      </q-toolbar>
    </q-header>

    <!-- Left drawer with navigation, using Quasar's built-in RTL handling -->
    <q-drawer
      v-model="leftDrawerOpen"
      :side="$q.lang.rtl ? 'right' : 'left'"
      bordered
      :width="280"
      :breakpoint="500"
      :class="isDark ? 'bg-dark' : 'bg-white'"
      behavior="mobile"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item-label header class="text-weight-bold text-h6 q-pa-md q-pb-sm app-title">
            {{ $t('home.title') }}
          </q-item-label>

          <q-separator />

          <q-item
            v-for="(item, index) in navigationItems"
            :key="index"
            :to="item.to"
            exact
            clickable
            v-ripple
            :active="$route.path === item.to"
            :active-class="isDark ? 'bg-primary-dark text-white' : 'bg-primary text-white'"
          >
            <q-item-section avatar>
              <q-icon :name="item.icon" size="md" />
            </q-item-section>
            <q-item-section>
              {{ item.label }}
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <!-- Main content with page transitions -->
    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition
          name="page"
          mode="out-in"
          appear
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>

    <!-- Modern animated bottom navigation -->
    <q-footer :class="[
      'safe-area-bottom modern-footer',
      isDark ? 'footer-dark' : 'footer-light'
    ]">
      <div class="modern-nav-container">
        <div 
          v-for="(item, index) in bottomNavItems" 
          :key="index"
          class="modern-nav-item"
          :class="{ 'active': $route.path === item.to }"
          @click="navigateTo(item.to)"
        >
          <div class="icon-container">
            <transition name="bounce" mode="out-in">
              <q-icon 
                :name="item.icon" 
                size="22px"
                :key="$route.path === item.to ? 'active' : 'inactive'"
                class="nav-icon"
              />
            </transition>
            <div class="nav-indicator" v-if="$route.path === item.to"></div>
          </div>
          <div class="nav-label">{{ item.label }}</div>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { useDarkMode } from 'src/composables/useDarkMode';
import { useQuasar } from 'quasar';

// Initialize i18n and Quasar
const { t } = useI18n();
const router = useRouter();
const $q = useQuasar();

// Use dark mode composable
const { isDark, toggleDarkMode } = useDarkMode();

// Drawer state
const leftDrawerOpen = ref(false);

// Navigation items for drawer
const navigationItems = computed(() => [
  {
    icon: 'home',
    label: t('navigation.home'),
    to: '/'
  },
  {
    icon: 'apartment',
    label: t('navigation.properties'),
    to: '/properties'
  },
  {
    icon: 'payments',
    label: t('navigation.rent'),
    to: '/rent'
  },
  {
    icon: 'description',
    label: t('navigation.contracts'),
    to: '/contracts'
  },
  {
    icon: 'money_off',
    label: t('navigation.debts'),
    to: '/debts'
  },
  {
    icon: 'contacts',
    label: t('navigation.contacts'),
    to: '/contacts'
  },
  {
    icon: 'settings',
    label: t('navigation.settings'),
    to: '/settings'
  }
]);

// Bottom navigation items (limited to the most important ones)
const bottomNavItems = computed(() => [
  {
    icon: 'home',
    label: t('navigation.home'),
    to: '/'
  },
  {
    icon: 'apartment',
    label: t('navigation.properties'),
    to: '/properties'
  },
  {
    icon: 'payments',
    label: t('navigation.rent'),
    to: '/rent'
  },
  {
    icon: 'contacts',
    label: t('navigation.contacts'),
    to: '/contacts'
  },
  {
    icon: 'settings',
    label: t('navigation.settings'),
    to: '/settings'
  }
]);

// Function to handle navigation
const navigateTo = (path: string) => {
  void router.push(path); // Adding void operator to fix the no-floating-promises error
  if (leftDrawerOpen.value) {
    leftDrawerOpen.value = false;
  }
};
</script>

<style lang="scss">
/* Header styling */
.modern-header {
  background-color: var(--primary-color);
  transition: background-color 0.3s ease;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
}

.header-light {
  background-color: var(--primary-color) !important;
  color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  padding-top: 8px;
}

.header-dark {
  background-color: #1d1d1d !important;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 8px;
}

.footer-light {
  background-color: white !important;
  color: #333;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  padding-bottom: env(safe-area-inset-bottom, 8px);
  box-shadow: 0 -1px 8px rgba(0, 0, 0, 0.05);
}

.footer-dark {
  background-color: #1d1d1d !important;
  color: white;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-bottom: env(safe-area-inset-bottom, 8px);
  box-shadow: 0 -1px 8px rgba(0, 0, 0, 0.2);
}

/* Title font */
.title-font {
  font-weight: 600;
  letter-spacing: 0.3px;
}

.app-title {
  font-weight: 600;
  letter-spacing: 0.3px;
  padding-bottom: 16px;
  color: var(--primary-color);
  
  .body--dark & {
    color: white;
  }
}

/* Modern animated bottom navigation */
.modern-footer {
  height: auto;
  padding: 4px 0;
  transition: all 0.3s ease;
}

.modern-nav-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 8px;
}

.modern-nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 56px;
  padding: 8px 0;
  cursor: pointer;
  position: relative;
  transition: transform 0.2s ease;
  user-select: none;
  
  &:active {
    transform: scale(0.92);
  }
  
  .icon-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 28px;
    margin-bottom: 4px;
  }
  
  .nav-icon {
    font-size: 22px;
    transform-origin: center;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  
  .nav-indicator {
    position: absolute;
    bottom: -4px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: var(--primary-color);
    transform-origin: center;
    animation: indicator-appear 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  
  .nav-label {
    font-size: 11px;
    font-weight: 500;
    opacity: 0.85;
    transition: all 0.3s ease;
    margin-top: 2px;
  }
  
  &.active {
    .nav-icon {
      color: var(--primary-color);
      transform: scale(1.1);
    }
    
    .nav-label {
      color: var(--primary-color);
      opacity: 1;
      font-weight: 600;
    }
  }
}

/* Bounce animation */
.bounce-enter-active {
  animation: bounce-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes bounce-in {
  0% {
    transform: scale(0.6);
    opacity: 0;
  }
  70% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes indicator-appear {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Remove outline on focus for nav elements */
.no-focus-outline:focus {
  outline: none !important;
}

/* Page transition animations */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

/* Ensure proper spacing on mobile */
@media (max-width: 599px) {
  .q-page {
    padding: 16px 12px;
  }
  
  .modern-nav-item {
    min-width: 52px;
  }
  
  .nav-label {
    font-size: 10px !important;
  }
  
  .modern-nav-container {
    padding: 0 4px;
  }
}

@media (max-width: 320px) {
  .modern-nav-item {
    min-width: 48px;
  }
  
  .nav-label {
    font-size: 9px !important;
  }
  
  .nav-icon {
    font-size: 20px !important;
  }
}
</style>
