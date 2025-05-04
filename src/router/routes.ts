import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue')
      },
      {
        path: 'properties',
        component: () => import('pages/PropertiesPage.vue')
      },
      {
        path: 'rent',
        component: () => import('pages/RentPage.vue')
      },
      {
        path: 'contracts',
        component: () => import('pages/ContractsPage.vue')
      },
      {
        path: 'debts',
        component: () => import('pages/DebtsPage.vue')
      },
      {
        path: 'contacts',
        component: () => import('pages/ContactsPage.vue')
      },
      {
        path: 'settings',
        component: () => import('pages/SettingsPage.vue')
      }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
