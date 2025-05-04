import { ref, watch } from 'vue';
import { useQuasar } from 'quasar';

export function useDarkMode() {
  const $q = useQuasar();
  
  // Initialize dark mode from localStorage or default to false
  const isDark = ref(localStorage.getItem('darkMode') === 'true');
  
  // Apply the dark mode setting
  $q.dark.set(isDark.value);
  
  // Function to toggle dark mode
  const toggleDarkMode = () => {
    isDark.value = !isDark.value;
    $q.dark.set(isDark.value);
    localStorage.setItem('darkMode', isDark.value.toString());
  };
  
  // Watch for changes to isDark and update localStorage
  watch(isDark, (newValue) => {
    $q.dark.set(newValue);
    localStorage.setItem('darkMode', newValue.toString());
  });
  
  return {
    isDark,
    toggleDarkMode
  };
}
