// Simple script to run the app
import { execSync } from 'child_process';

try {
  console.log('Starting the app...');
  execSync('npx quasar dev', { stdio: 'inherit' });
} catch (error) {
  console.error('Error running the app:', error);
}
