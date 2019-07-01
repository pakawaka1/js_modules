const path = require('path')
const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        // for vue files, test: /\.vue$/
        test: /\.js$/
      }
    ]
  }
}

module.exports = config
