const { generateImages } = require('@capacitor/assets');

generateImages({
  assetPath: './src/assets/building-icon.svg',
  iconBackgroundColor: '#3A506B',
  splashBackgroundColor: '#3A506B',
  ios: {
    sources: ['./src/assets/building-icon.svg'],
  },
  android: {
    sources: ['./src/assets/building-icon.svg'],
    resourcesDirectory: './src-capacitor/android/app/src/main/res',
  }
}).then(() => {
  console.log('Icons and splash screens generated successfully!');
}).catch(err => {
  console.error('Error generating icons:', err);
});
