const reroutes  = require('express').Router();
const User      = require('./User');


reroutes.get('/', (req, res) => {
    return res.send({
        error   : false,
        message : "Connected" 
    })
});


reroutes.use('/user', User);

module.exports = reroutes;
