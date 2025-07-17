const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Add resolver aliases
config.resolver.alias = {
  '@': path.resolve(__dirname, 'src'),
  '@/app': path.resolve(__dirname, 'src/app'),
  '@/assets': path.resolve(__dirname, 'src/core/assets'),
  '@/components': path.resolve(__dirname, 'src/components'),
  '@/constants': path.resolve(__dirname, 'src/core/constants'),
  '@/hooks': path.resolve(__dirname, 'src/core/hooks'),
  '@/scripts': path.resolve(__dirname, 'src/core/scripts'),
  '@/types': path.resolve(__dirname, 'src/core/types'),
  '@/utils': path.resolve(__dirname, 'src/core/utils'),
  '@/config': path.resolve(__dirname, 'src/core/config'),
  '@/lib': path.resolve(__dirname, 'src/core/lib'),
  '@/core': path.resolve(__dirname, 'src/core'),
};

module.exports = withNativeWind(config, { input: './global.css' });
