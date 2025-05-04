// Install missing dependencies for Vercel deployment
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('Running Vercel pre-build setup...');

// Install required dependencies for the build
const dependencies = [
  '@capacitor/cli',
  '@capacitor-firebase/analytics',
  'firebase',
  '@capacitor-community/contacts'
];

console.log(`Installing dependencies: ${dependencies.join(', ')}`);
try {
  execSync(`npm install ${dependencies.join(' ')} --no-save`, { stdio: 'inherit' });
  console.log('Dependencies installed successfully');
} catch (error) {
  console.error('Error installing dependencies:', error);
  process.exit(1);
}

// Add types to tsconfig.json if needed
try {
  const tsconfigPath = path.resolve(__dirname, 'tsconfig.json');
  if (fs.existsSync(tsconfigPath)) {
    const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf8'));
    
    // Ensure types array exists
    if (!tsconfig.compilerOptions) {
      tsconfig.compilerOptions = {};
    }
    
    if (!tsconfig.compilerOptions.types) {
      tsconfig.compilerOptions.types = [];
    }
    
    // Add types if needed
    const requiredTypes = ['node'];
    for (const type of requiredTypes) {
      if (!tsconfig.compilerOptions.types.includes(type)) {
        tsconfig.compilerOptions.types.push(type);
      }
    }
    
    // Save updated tsconfig
    fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2));
    console.log('Updated tsconfig.json with required types');
  }
} catch (error) {
  console.error('Error updating tsconfig.json:', error);
}

console.log('Vercel pre-build setup completed');