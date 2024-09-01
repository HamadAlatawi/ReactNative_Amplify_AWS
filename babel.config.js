module.exports = function(api) {
  api.cache(true);
  process.env.NODE_ENV = process.env.NODE_ENV || 'development';
  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      ["inline-dotenv", {
        path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development'
      }],
    ]
  };
};