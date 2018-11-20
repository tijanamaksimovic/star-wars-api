module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://swapi.co/',
        changeOrigin: true,
      },
    },
  },
};
