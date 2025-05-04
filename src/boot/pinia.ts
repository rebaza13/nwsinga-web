import { defineBoot } from '#q-app/wrappers';
import { createPinia } from 'pinia';

// Create a single pinia instance
const pinia = createPinia();

export default defineBoot(({ app }) => {
  // Use the pinia instance
  app.use(pinia);
});
