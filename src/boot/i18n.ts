import { defineBoot } from '#q-app/wrappers';
import { createI18n } from 'vue-i18n';

import messages from 'src/i18n';

export type MessageLanguages = keyof typeof messages;
// Type-define 'en-US' as the master schema for the resource
export type MessageSchema = typeof messages['en-US'];

// See https://vue-i18n.intlify.dev/guide/advanced/typescript.html#global-resource-schema-type-definition
/* eslint-disable @typescript-eslint/no-empty-object-type */
declare module 'vue-i18n' {
  // define the locale messages schema
  export interface DefineLocaleMessage extends MessageSchema {}

  // define the datetime format schema
  export interface DefineDateTimeFormat {}

  // define the number format schema
  export interface DefineNumberFormat {}
}
/* eslint-enable @typescript-eslint/no-empty-object-type */

export default defineBoot(({ app }) => {
  // Get saved locale from localStorage or use default
  const savedLocale = localStorage.getItem('app-locale') || 'en-US';

  // @ts-ignore - Ignore type checking for messages
  const i18n = createI18n({
    locale: savedLocale,
    legacy: false,
    messages,
  });

  // Watch for locale changes and save to localStorage
  const { global } = i18n;

  // Create a watcher for locale changes
  const originalLocale = global.locale;
  Object.defineProperty(global, 'locale', {
    get: () => originalLocale.value,
    set: (value) => {
      originalLocale.value = value;
      // Save to localStorage whenever locale changes
      localStorage.setItem('app-locale', value);
    }
  });

  // Set i18n instance on app
  app.use(i18n);
});
