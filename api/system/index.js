const express = require('express');
let system = express.Router();
const ping = require('./ping');

system.get('/', ping);

module.exports = system;