const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressValidator = require('express-validator')

var cors = require('cors');
//var whitelist = ['http://localhost:3000', 'http://localhost:3001', 'http://node.borjamediavilla.com', 'http://server.borjamediavilla.com/'];
//var corsOptions = {
// origin: function(origin, callback) {
//   if (whitelist.indexOf(origin) !== -1) {
//      callback(null, true);
//    } else {
//      callback(new Error('Not allowed by CORS'));
//}
//  }
//};

var corsOptions = {
    origin: function (origin, callback) {
        callback(null, true)

    }
}

module.exports = function () {
    let server = express(),
        create,
        start;

    create = (config, db, routes) => {
        // set all the server things
        server.set('env', config.env);
        server.set('port', config.port);
        server.set('hostname', config.hostname);

        server.use(cors(corsOptions));
        // add middleware to parse the json
        server.use(bodyParser.json());
        server.use(expressValidator())
        server.use(bodyParser.urlencoded({
            extended: false
        }));

        //connect the database
        mongoose.connect(
            db.dbURL,
            db.options
        );

        // Set up routes
        routes.init(server);
    };


    start = () => {
        let hostname = server.get('hostname'),
            port = server.get('port');
        server.listen(port, function () {
            console.log('KeywordsTool Auth Server Ready - http://' + hostname + ':' + port + '/docs');
        });
    };
    return {
        create: create,
        start: start
    };
};