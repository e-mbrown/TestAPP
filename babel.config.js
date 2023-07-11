module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
          "module-resolver",
          {
              alias: {
                  "@comp": "./components",
                  "@style": "./style.css",
                  "@asset": "./assets"
              }
          }
      ]
  ]
  };
};
