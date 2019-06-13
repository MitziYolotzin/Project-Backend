const express = require('express');
let system = express.Router();
const ping = require('./ping');
const geo =require('./geolocation');

system.get('/ping', ping);
system.post('/geolocation', geo);

module.exports = system;