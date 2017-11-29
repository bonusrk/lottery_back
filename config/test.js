const defer = require('config/defer').deferConfig;
const path = require('path');

module.exports = {
  // secret data can be moved to env variables
  // or a separate config
  secret: 'mysecret',
  mongoose: {
    uri: 'mongodb://localhost/lottery',
    useMongoClient: true,
    keepAlive: 1,
    poolSize: 5
  },
  root: process.cwd(),
};