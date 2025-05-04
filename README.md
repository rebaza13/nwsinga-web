# NWSinga Real Estate App

A real estate management application with support for English and CKB Sorani Kurdish languages.

## Features

- Property listing and management
- Rental management system
- Contract tracking
- Debt tracking
- Multi-language support (English and CKB Sorani Kurdish)
- Dark mode
- Firebase integration

## Setup

### Install the dependencies
```bash
npm install
```

### Start the app in development mode
```bash
npx quasar dev
```

### Lint the files
```bash
npm run lint
```

### Build the app for production
```bash
npx quasar build
```

## Building for Android

### Prerequisites

- Android Studio installed
- Android SDK installed and configured
- Java Development Kit (JDK) installed

### First-time setup

Run the initialization script to set up Capacitor and the Android platform:

```bash
node init-capacitor.js
```

### Setting up Android SDK

Before building for Android, you need to make sure your Android SDK is properly configured:

1. Make sure you have Android Studio installed
2. Set the ANDROID_HOME environment variable to your Android SDK location
   - Windows: Usually `C:\Users\<username>\AppData\Local\Android\Sdk`
   - macOS: Usually `~/Library/Android/sdk`
   - Linux: Usually `~/Android/Sdk`

Or you can run the setup script to automatically configure it:

```bash
node setup-android-sdk.js
```

### Building the app

Run the build script to build the app for Android:

```bash
node build-android.js
```

Or on Windows, you can use the batch file:

```bash
android-build.bat
```

### Opening in Android Studio

After building, open the project in Android Studio:

```bash
npx cap open android
```

From Android Studio, you can run the app on an emulator or physical device.

## Troubleshooting

### Firebase Configuration

Make sure the Firebase configuration is correct in:
- `src/boot/firebase.ts` for web
- `android/app/google-services.json` for Android

### Android Build Issues

- Ensure Android Studio and the Android SDK are properly installed
- Check that the Java Development Kit (JDK) is installed and configured
- Make sure the `android` directory exists and contains the proper files
- Verify that the `local.properties` file points to your Android SDK location

### Capacitor Issues

If you encounter issues with Capacitor, try:

```bash
npx cap doctor
```

This will check your Capacitor setup and identify any issues.

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
