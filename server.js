const server = require('./config/api')();
const config = require('./config/env/config');
const db = require('./config/mongodb');
let routes = require('./api');

//create the basic server setup 
server.create(config, db, routes);

//start the server
server.start();