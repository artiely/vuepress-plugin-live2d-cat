const { resolve } = require("path");

module.exports = {
  name:'live2d-cat',
  enhanceAppFiles: resolve(__dirname, "enhanceAppFile.js"),
};
