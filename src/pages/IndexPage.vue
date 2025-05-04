<template>
  <q-page padding>
    <!-- Hero section with improved design -->
    <div class="hero-section q-py-lg q-mb-lg">
      <div class="text-center">
        <h1 class="text-h3 q-mb-sm animated-title">{{ $t('home.title') }}</h1>
        <p class="text-subtitle1 q-mb-lg animated-subtitle">{{ $t('home.description') }}</p>
        <q-btn
          color="accent"
          :label="$t('navigation.properties')"
          to="/properties"
          class="q-px-md scale-btn"
          unelevated
          size="lg"
          rounded
        />
      </div>
    </div>

    <!-- Summary Cards with improved layout -->
    <div class="q-mb-lg">
      <div class="row q-col-gutter-md">
        <!-- Properties Card -->
        <div class="col-12 col-sm-6 col-md-3 animate-card" style="--delay: 0.1s">
          <q-card class="summary-card" @click="$router.push('/properties')">
            <q-card-section class="bg-primary text-white card-header">
              <div class="row items-center no-wrap justify-between">
                <div class="col-auto">
                  <div class="text-h3 counter-number">{{ properties.length }}</div>
                  <div class="text-subtitle1">{{ $t('navigation.properties') }}</div>
                </div>
                <div class="icon-wrapper">
                  <q-icon name="apartment" size="42px" class="rotating-icon" />
                </div>
              </div>
            </q-card-section>
            <q-card-section class="bg-white text-primary text-center">
              <q-btn flat color="primary" :label="$t('common.view')" icon-right="arrow_forward" to="/properties" class="scale-btn" />
            </q-card-section>
          </q-card>
        </div>

        <!-- Tenants Card -->
        <div class="col-12 col-sm-6 col-md-3 animate-card" style="--delay: 0.2s">
          <q-card class="summary-card" @click="$router.push('/rent')">
            <q-card-section class="bg-secondary text-white card-header">
              <div class="row items-center no-wrap justify-between">
                <div class="col-auto">
                  <div class="text-h3 counter-number">{{ tenants.length }}</div>
                  <div class="text-subtitle1">{{ $t('rent.title') }}</div>
                </div>
                <div class="icon-wrapper">
                  <q-icon name="people" size="42px" class="pulse-icon" />
                </div>
              </div>
            </q-card-section>
            <q-card-section class="bg-white text-secondary text-center">
              <q-btn flat color="secondary" :label="$t('common.view')" icon-right="arrow_forward" to="/rent" class="scale-btn" />
            </q-card-section>
          </q-card>
        </div>

        <!-- Contracts Card -->
        <div class="col-12 col-sm-6 col-md-3 animate-card" style="--delay: 0.3s">
          <q-card class="summary-card" @click="$router.push('/contracts')">
            <q-card-section class="bg-accent text-white card-header">
              <div class="row items-center no-wrap justify-between">
                <div class="col-auto">
                  <div class="text-h3 counter-number">{{ contracts.length }}</div>
                  <div class="text-subtitle1">{{ $t('navigation.contracts') }}</div>
                </div>
                <div class="icon-wrapper">
                  <q-icon name="description" size="42px" class="floating-icon" />
                </div>
              </div>
            </q-card-section>
            <q-card-section class="bg-white text-accent text-center">
              <q-btn flat color="accent" :label="$t('common.view')" icon-right="arrow_forward" to="/contracts" class="scale-btn" />
            </q-card-section>
          </q-card>
        </div>

        <!-- Total Revenue Card -->
        <div class="col-12 col-sm-6 col-md-3 animate-card" style="--delay: 0.4s">
          <q-card class="summary-card" @click="$router.push('/contracts')">
            <q-card-section class="bg-positive text-white card-header">
              <div class="row items-center no-wrap justify-between">
                <div class="col-auto">
                  <div class="text-h3 counter-number">{{ formatCurrency(totalRevenue) }}</div>
                  <div class="text-subtitle1">{{ $t('home.totalRevenue') }}</div>
                </div>
                <div class="icon-wrapper">
                  <q-icon name="payments" size="42px" class="bounce-icon" />
                </div>
              </div>
            </q-card-section>
            <q-card-section class="bg-white text-positive text-center">
              <q-btn flat color="positive" :label="$t('common.view')" icon-right="arrow_forward" to="/contracts" class="scale-btn" />
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <!-- Recent Activity with improved design -->
    <div class="q-mb-lg animate-up" style="--delay: 0.5s">
      <div class="section-header q-mb-sm">
        <h2 class="text-h5 section-title">{{ $t('home.recentActivity') }}</h2>
      </div>
      
      <q-card class="activity-card">
        <q-list separator>
          <q-item 
            v-for="(activity, index) in recentActivities" 
            :key="activity.id" 
            clickable 
            v-ripple
            class="activity-item"
            :style="`--delay: ${0.6 + index * 0.1}s`"
          >
            <q-item-section avatar>
              <q-avatar :color="activity.color" text-color="white" :icon="activity.icon" class="pulse-once" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-weight-medium">{{ activity.title }}</q-item-label>
              <q-item-label caption>{{ activity.description }}</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-chip size="sm" dense outline>{{ activity.time }}</q-chip>
            </q-item-section>
          </q-item>
          
          <q-item v-if="recentActivities.length === 0" class="text-center">
            <q-item-section>
              <div class="text-center q-pa-md">
                <q-icon name="history" size="3rem" color="grey-5" />
                <p class="text-subtitle1 q-mt-sm">{{ $t('common.noActivity') }}</p>
              </div>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </div>

    <!-- Featured properties section with improved cards -->
    <div class="q-pa-md animate-up" style="--delay: 0.7s">
      <div class="section-header q-mb-sm">
        <h2 class="text-h5 section-title">{{ $t('home.featuredProperties') }}</h2>
        <q-btn 
          to="/properties" 
          flat 
          round 
          color="primary" 
          icon="arrow_forward" 
          class="view-all-btn"
          v-if="properties.length > 0"
        />
      </div>

      <div v-if="properties.length === 0" class="text-center q-pa-lg">
        <q-icon name="apartment" size="4rem" color="grey-5" class="pulse-icon" />
        <p class="text-subtitle1 q-mt-sm">{{ $t('common.noResults') }}</p>
        <q-btn
          color="primary"
          :label="$t('properties.addProperty')"
          to="/properties"
          class="q-mt-md scale-btn"
          unelevated
          rounded
        />
      </div>

      <div v-else class="row q-col-gutter-md">
        <div 
          v-for="(property, index) in featuredProperties" 
          :key="property.id" 
          class="col-12 col-sm-6 col-md-4 property-column"
          :style="`--delay: ${0.8 + index * 0.1}s`"
        >
          <q-card class="property-card" :to="`/properties/${property.id}`">
            <div
              class="property-image"
              :style="property.image ? `background-image: url(${property.image})` : ''"
            >
              <q-icon v-if="!property.image" name="image" class="no-image-placeholder" />
              <div class="property-overlay">
                <div class="property-type-badge">{{ property.type }}</div>
              </div>
            </div>

            <q-card-section class="property-content">
              <div class="text-h6 property-title">{{ property.location }}</div>
              <div class="text-subtitle2 q-mt-sm property-price">{{ formatCurrency(parseInt(property.price.replace(/[^0-9]/g, ''))) }}</div>
              <div class="text-body2 q-mt-sm ellipsis-2-lines property-description">{{ property.description }}</div>
            </q-card-section>

            <q-card-actions class="property-actions">
              <q-btn flat color="primary" :label="$t('properties.details')" :to="`/properties/${property.id}`" class="scale-btn" />
              <q-space />
              <q-btn
                round
                color="accent"
                icon="phone"
                class="call-btn scale-btn"
                @click.stop="callOwner(property.phoneNumber)"
              />
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useQuasar } from 'quasar';

// Initialize i18n and Quasar
const { t } = useI18n();
const $q = useQuasar();

// Sample properties data (will be replaced with real data later)
const properties = ref([
  {
    id: 1,
    type: t('properties.house'),
    location: 'Downtown',
    price: '250000',
    description: 'Beautiful house with 3 bedrooms and 2 bathrooms in a prime location.',
    phoneNumber: '+1234567890',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: 2,
    type: t('properties.apartment'),
    location: 'City Center',
    price: '150000',
    description: 'Modern apartment with 2 bedrooms and amazing city views.',
    phoneNumber: '+1234567891',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: 3,
    type: t('properties.land'),
    location: 'Suburban Area',
    price: '100000',
    description: 'Large plot of land perfect for building your dream home.',
    phoneNumber: '+1234567892',
    image: null
  }
]);

// Sample tenants data
const tenants = ref([
  {
    id: 1,
    name: 'Ahmad Mohammed',
    phoneNumber: '+1234567890',
    building: 1,
    monthlyRent: 800,
    payments: [
      { month: 1, amount: 800, date: '2023-01-05' },
      { month: 2, amount: 800, date: '2023-02-03' },
      { month: 3, amount: 800, date: '2023-03-02' }
    ]
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    phoneNumber: '+1234567891',
    building: 2,
    monthlyRent: 1200,
    payments: [
      { month: 1, amount: 1200, date: '2023-01-10' },
      { month: 2, amount: 1200, date: '2023-02-12' }
    ]
  }
]);

// Sample contracts data
const contracts = ref([
  {
    id: 1,
    date: '2023-01-15',
    firstParty: 'John Smith',
    secondParty: 'ABC Corporation',
    amount: 25000,
    description: 'Sale of property at 123 Main St.'
  },
  {
    id: 2,
    date: '2023-02-20',
    firstParty: 'Sarah Johnson',
    secondParty: 'XYZ Real Estate',
    amount: 15000,
    description: 'Rental agreement for commercial space.'
  }
]);

// Sample recent activities
const recentActivities = ref([
  {
    id: 1,
    title: 'New Property Added',
    description: 'A new apartment was added in City Center',
    time: '2 hours ago',
    icon: 'apartment',
    color: 'primary'
  },
  {
    id: 2,
    title: 'Rent Payment Received',
    description: 'Ahmad Mohammed paid 800 IQD for January',
    time: '1 day ago',
    icon: 'payments',
    color: 'positive'
  },
  {
    id: 3,
    title: 'New Contract Signed',
    description: 'Contract between John Smith and ABC Corporation',
    time: '3 days ago',
    icon: 'description',
    color: 'accent'
  }
]);

// Computed properties
const totalRevenue = computed(() => {
  // Sum of all tenant monthly rents
  const rentRevenue = tenants.value.reduce((sum, tenant) => sum + tenant.monthlyRent, 0);
  // Sum of all contract amounts
  const contractRevenue = contracts.value.reduce((sum, contract) => sum + contract.amount, 0);
  return rentRevenue + contractRevenue;
});

const featuredProperties = computed(() => {
  // Return only 3 properties for the featured section
  return properties.value.slice(0, 3);
});

// Format currency to IQD
const formatCurrency = (amount: number) => {
  return amount.toLocaleString() + ' IQD';
};

// Function to handle phone call
function callOwner(phoneNumber: string) {
  window.location.href = `tel:${phoneNumber}`;
  $q.notify({
    color: 'accent',
    textColor: 'white',
    icon: 'phone',
    message: t('properties.call') + ': ' + phoneNumber,
    position: 'top',
    timeout: 2000,
    classes: 'notification-toast'
  });
}

// Animation for elements when they come into view
onMounted(() => {
  // Add animation class to trigger entrance animations
  setTimeout(() => {
    document.querySelectorAll('.animate-card, .animate-up, .activity-item, .property-column').forEach(el => {
      el.classList.add('animate-visible');
    });
  }, 100);
});
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  color: white;
  border-radius: var(--card-border-radius);
  padding: 40px 20px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIj48cGF0aCBkPSJNNjQwIDE0MEwxMjgwIDBIMHoiLz48L2c+PC9zdmc+');
  background-size: 100% 100%;
  transform: rotate(180deg);
  opacity: 0.15;
}

/* Section headers with "View All" button */
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.section-title {
  position: relative;
  font-weight: 600;
  color: var(--primary-color);
  margin: 0;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 40px;
  height: 3px;
  background-color: var(--accent-color);
  border-radius: 3px;
}

.view-all-btn {
  margin-left: 8px;
  transition: transform 0.2s ease;
}

.view-all-btn:hover {
  transform: translateX(2px);
}

/* Animated title and subtitle */
.animated-title {
  animation: fadeInDown 0.8s ease-out both;
  font-weight: 700;
}

.animated-subtitle {
  animation: fadeInUp 0.8s ease-out 0.3s both;
  opacity: 0.9;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Card animations and styling */
.summary-card {
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.07);
  height: 100%;
}

.summary-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
}

.card-header {
  position: relative;
  overflow: hidden;
  padding: 20px;
}

.card-header::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at top right, rgba(255,255,255,0.2), transparent 70%);
  pointer-events: none;
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

/* Icon animations */
.rotating-icon {
  transition: transform 0.5s ease;
}

.summary-card:hover .rotating-icon {
  transform: rotate(15deg);
}

.pulse-icon {
  animation: pulse 2s infinite;
}

.floating-icon {
  animation: float 3s infinite ease-in-out;
}

.bounce-icon {
  animation: bounce 2s infinite;
}

.pulse-once {
  animation: pulseOnce 1s forwards;
}

/* Animation keyframes */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-6px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

@keyframes pulseOnce {
  0% {
    transform: scale(0.9);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Button scale animation */
.scale-btn {
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.3s;
}

.scale-btn:hover {
  transform: scale(1.05);
}

.scale-btn:active {
  transform: scale(0.95);
}

/* Property card enhancements */
.property-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
  cursor: pointer;
}

.property-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
}

.property-image {
  height: 180px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #f0f0f0;
  position: relative;
  overflow: hidden;
}

.property-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.property-card:hover .property-overlay {
  opacity: 1;
}

.property-type-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: var(--primary-color);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transform: translateY(-20px);
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.property-card:hover .property-type-badge {
  transform: translateY(0);
  opacity: 1;
}

.no-image-placeholder {
  color: #9e9e9e;
  font-size: 3rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.property-content {
  flex: 1;
  padding: 16px;
}

.property-title {
  font-weight: 600;
  color: var(--primary-color);
}

.property-price {
  font-weight: 700;
  color: var(--accent-color);
}

.property-description {
  color: rgba(0, 0, 0, 0.7);
}

.property-actions {
  padding: 8px 16px 16px;
}

.call-btn {
  box-shadow: 0 4px 8px rgba(var(--accent-rgb), 0.3);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.call-btn:hover {
  box-shadow: 0 6px 12px rgba(var(--accent-rgb), 0.4);
  background: var(--accent-dark-color) !important;
}

/* Activity card styles */
.activity-card {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.activity-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.activity-item {
  transition: background-color 0.3s ease;
  border-left: 0 solid transparent;
  transition: border-left 0.3s ease, background-color 0.3s ease;
}

.activity-item:hover {
  background-color: rgba(0, 0, 0, 0.02);
  border-left: 4px solid var(--primary-color);
}

/* Counter animation for numbers */
.counter-number {
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Entrance animations for cards and sections */
.animate-card, .animate-up {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  transition-delay: var(--delay, 0s);
}

.activity-item, .property-column {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  transition-delay: var(--delay, 0s);
}

.animate-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Custom notification toast */
.notification-toast {
  border-radius: 8px;
  font-weight: 500;
}

/* Responsive adjustments */
@media (max-width: 599px) {
  .hero-section {
    padding: 30px 16px;
  }
  
  .property-image {
    height: 160px;
  }
  
  .animated-title {
    font-size: 2rem !important;
  }
  
  .section-title {
    font-size: 1.25rem !important;
  }
  
  .card-header {
    padding: 16px;
  }
  
  .counter-number {
    font-size: 2rem !important;
  }
  
  .icon-wrapper {
    height: 48px;
    width: 48px;
  }
  
  .icon-wrapper .q-icon {
    font-size: 32px !important;
  }
}

@media (max-width: 399px) {
  .hero-section {
    padding: 24px 12px;
  }
  
  .property-image {
    height: 140px;
  }
  
  .animated-title {
    font-size: 1.75rem !important;
  }
  
  .card-header {
    padding: 12px;
  }
  
  .counter-number {
    font-size: 1.75rem !important;
  }
  
  .icon-wrapper {
    height: 42px;
    width: 42px;
  }
  
  .icon-wrapper .q-icon {
    font-size: 28px !important;
  }
}

.ellipsis-2-lines {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
