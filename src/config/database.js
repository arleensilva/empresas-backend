const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
const mongoAddress =  process.env.NODE_ENV === 'production' ? 'mongo' : 'localhost';
module.exports = mongoose.connect(`mongodb://${mongoAddress}/empresas-backend`)