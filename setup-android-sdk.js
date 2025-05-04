const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');

// Function to find the Android SDK location
function findAndroidSdkLocation() {
  // Common locations for Android SDK
  const possibleLocations = [
    path.join(os.homedir(), 'AppData', 'Local', 'Android', 'Sdk'), // Windows default
    path.join(os.homedir(), 'Library', 'Android', 'sdk'), // macOS default
    path.join(os.homedir(), 'Android', 'Sdk'), // Linux default
    process.env.ANDROID_HOME, // From environment variable
    process.env.ANDROID_SDK_ROOT // From environment variable
  ];

  // Check each location
  for (const location of possibleLocations) {
    if (location && fs.existsSync(location)) {
      return location;
    }
  }

  // If we can't find it, ask the user
  console.log('Could not automatically find Android SDK location.');
  console.log('Please enter the path to your Android SDK:');
  
  // In a real script, you would prompt the user for input
  // For this example, we'll just return null
  return null;
}

// Function to create local.properties file
function createLocalProperties(sdkLocation) {
  if (!sdkLocation) {
    console.error('Android SDK location not found. Please set ANDROID_HOME environment variable.');
    process.exit(1);
  }

  // Normalize path for the platform and escape backslashes for properties file
  const normalizedPath = sdkLocation.replace(/\\/g, '\\\\');
  
  const localPropertiesContent = `## This file must *NOT* be checked into Version Control Systems,
# as it contains information specific to your local configuration.
#
# Location of the SDK. This is only used by Gradle.
# For customization when using a Version Control System, please read the
# header note.
sdk.dir=${normalizedPath}`;

  const capacitorAndroidDir = path.join(__dirname, 'src-capacitor', 'android');
  const localPropertiesPath = path.join(capacitorAndroidDir, 'local.properties');

  // Create the directory if it doesn't exist
  if (!fs.existsSync(capacitorAndroidDir)) {
    fs.mkdirSync(capacitorAndroidDir, { recursive: true });
  }

  // Write the file
  fs.writeFileSync(localPropertiesPath, localPropertiesContent);
  console.log(`Created local.properties at ${localPropertiesPath}`);
}

// Main function
function main() {
  console.log('Setting up Android SDK configuration...');
  
  // Find Android SDK location
  const sdkLocation = findAndroidSdkLocation();
  
  // Create local.properties file
  createLocalProperties(sdkLocation);
  
  console.log('Android SDK configuration complete!');
  console.log('You can now build your app with:');
  console.log('  npx quasar build -m capacitor -T android');
}

// Run the main function
main();
