import { defineBoot } from '#q-app/wrappers';
import { watch } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineBoot(({ app }) => {
  // Get the saved locale from localStorage if available
  const savedLocale = localStorage.getItem('app-locale');

  // Function to set document direction based on locale
  const setDirection = (locale: string) => {
    document.documentElement.dir = locale === 'ckb' ? 'rtl' : 'ltr';
    // Add a body class for RTL styling
    if (locale === 'ckb') {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }
  };

  // Set initial direction based on saved locale
  setDirection(savedLocale || 'en-US');

  // Add a global mixin to watch for locale changes
  app.mixin({
    mounted() {
      // Watch for locale changes and update direction
      if (this.$i18n) {
        watch(() => this.$i18n.locale, (newLocale) => {
          setDirection(newLocale);
        });
      }
    }
  });
});
