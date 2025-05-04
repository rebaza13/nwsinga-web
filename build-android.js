#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import os from 'os';

// Get the directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Determine if we're on Windows
const isWindows = os.platform() === 'win32';

console.log(chalk.blue('===================================='));
console.log(chalk.blue('🚀 Starting Android Build Process'));
console.log(chalk.blue('===================================='));

// Step 1: Build the web app
console.log(chalk.green('📦 Building web application...'));
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log(chalk.green('✅ Web build completed successfully'));
} catch (error) {
  console.error(chalk.red('❌ Web build failed:'), error.message);
  process.exit(1);
}

// Step 2: Copy web assets to Capacitor
console.log(chalk.green('📋 Copying web assets to Capacitor...'));
try {
  execSync('npx cap copy android', { stdio: 'inherit' });
  console.log(chalk.green('✅ Assets copied successfully'));
} catch (error) {
  console.error(chalk.red('❌ Copying assets failed:'), error.message);
  process.exit(1);
}

// Step 3: Update Capacitor plugins
console.log(chalk.green('🔌 Updating Capacitor plugins...'));
try {
  execSync('npx cap update android', { stdio: 'inherit' });
  console.log(chalk.green('✅ Plugins updated successfully'));
} catch (error) {
  console.error(chalk.red('❌ Plugin update failed:'), error.message);
  console.log(chalk.yellow('⚠️ Continuing with build process...'));
}

// Step 4: Apply patches for Android build if needed
console.log(chalk.green('🔧 Applying Android patches...'));
try {
  // Ensure the gradle.properties has the correct settings
  const gradlePropsPath = path.join(__dirname, 'src-capacitor', 'android', 'gradle.properties');
  if (fs.existsSync(gradlePropsPath)) {
    let gradleProps = fs.readFileSync(gradlePropsPath, 'utf8');
    
    // Ensure we have the correct Java version
    if (!gradleProps.includes('org.gradle.java.home')) {
      console.log(chalk.yellow('⚠️ Adding Java home path to gradle.properties...'));
      gradleProps += '\n# Use JDK 17 for compatibility\n';
      gradleProps += '# org.gradle.java.home=/path/to/jdk17\n';
    }
    
    // Add memory settings if not present
    if (!gradleProps.includes('org.gradle.jvmargs')) {
      console.log(chalk.yellow('⚠️ Adding memory settings to gradle.properties...'));
      gradleProps += '\norg.gradle.jvmargs=-Xmx4096m -XX:MaxPermSize=1024m -XX:+HeapDumpOnOutOfMemoryError\n';
    }
    
    fs.writeFileSync(gradlePropsPath, gradleProps);
  }
  
  console.log(chalk.green('✅ Android patches applied successfully'));
} catch (error) {
  console.error(chalk.red('❌ Applying patches failed:'), error.message);
  console.log(chalk.yellow('⚠️ Continuing with build process...'));
}

// Step 5: Build debug APK
console.log(chalk.green('🔨 Building Android debug APK...'));
try {
  // Change directory to the android folder in src-capacitor
  const androidPath = path.join(__dirname, 'src-capacitor', 'android');
  process.chdir(androidPath);
  
  // Use the fully qualified path to gradlew.bat or ./gradlew
  const gradleCommand = isWindows ? 
    path.join(androidPath, 'gradlew.bat') : 
    path.join(androidPath, 'gradlew');
  
  // On Unix systems, ensure gradlew is executable
  if (!isWindows) {
    try {
      fs.chmodSync(gradleCommand, 0o755); // Make executable
    } catch (err) {
      console.log(chalk.yellow('⚠️ Could not change permissions on gradlew file'));
    }
  }
  
  // Run gradle command with assembleDebug
  execSync(`"${gradleCommand}" assembleDebug`, { stdio: 'inherit' });
  console.log(chalk.green('✅ Debug APK built successfully'));
  
  // Find the APK file
  const apkDir = path.join(androidPath, 'app', 'build', 'outputs', 'apk', 'debug');
  if (fs.existsSync(apkDir)) {
    const apkFiles = fs.readdirSync(apkDir).filter(file => file.endsWith('.apk'));
    if (apkFiles.length > 0) {
      const apkPath = path.join(apkDir, apkFiles[0]);
      console.log(chalk.green(`📱 Debug APK created at: ${apkPath}`));
    }
  }
} catch (error) {
  console.error(chalk.red('❌ Android build failed:'), error.message);
  process.exit(1);
}

console.log(chalk.blue('===================================='));
console.log(chalk.blue('🎉 Android Build Process Completed'));
console.log(chalk.blue('===================================='));
