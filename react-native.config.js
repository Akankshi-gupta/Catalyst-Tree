module.exports = {
    assets: ['./assets/fonts'], // Path to your fonts folder
    expo: {
      name: 'The-Catalyst-Tree',
      web: {
        bundler: 'webpack'
      }
    },
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'],

};