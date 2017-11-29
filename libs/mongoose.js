const mongoose = require('mongoose');
const config = require('config');

mongoose.Promise = global.Promise;

const beautifyUnique = require('mongoose-beautiful-unique-validation');

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  mongoose.set('debug', true);
}

mongoose.connect(config.mongoose.uri, config.mongoose);


// вместо MongoError будет выдавать ValidationError (проще ловить и выводить)
mongoose.plugin(beautifyUnique);

module.exports = mongoose;