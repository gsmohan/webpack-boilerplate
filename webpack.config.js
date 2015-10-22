module.exports = {
  entry: "./app/main.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders:[
      {test:/\.scss$/, loader:"style!css!sass"},
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'file-loader?limit=10000!image-webpack-loader?progressive=true' }
    ]
  }
};
