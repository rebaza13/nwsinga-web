import { defineBoot } from '#q-app/wrappers';
import { FirebaseAnalytics } from '@capacitor-firebase/analytics';
import { Capacitor } from '@capacitor/core';

export default defineBoot(({ app }) => {
  // Only initialize Firebase Analytics on native platforms
  if (Capacitor.isNativePlatform()) {
    // Initialize Firebase Analytics
 
    // Call the initialization function and handle the promise

    // Make Firebase Analytics available to all components
    app.config.globalProperties.$analytics = {
      logEvent: async (name: string, params?: Record<string, any>) => {
        try {
          await FirebaseAnalytics.logEvent({ name, params });
        } catch (error) {
          console.error('Error logging event:', error);
        }
        return true; // Return a value to avoid floating promise
      },
      setCurrentScreen: async (screenName: string, screenClassOverride?: string) => {
        try {
          await FirebaseAnalytics.setCurrentScreen({ screenName, screenClassOverride });
        } catch (error) {
          console.error('Error setting screen name:', error);
        }
        return true; // Return a value to avoid floating promise
      }
    };
  }
});
