const config    = require('../config/config');
const mongoose  = require('mongoose');


mongoose.connect(config.connectionString);
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../app/model/user')
};