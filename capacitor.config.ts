import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.hci.vitalapp',
  appName: 'Vital',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
