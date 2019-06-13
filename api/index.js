
var swaggerUi = require('swagger-ui-express')
const versionsRoute = require('./versions');
const system = require('./system')
const swaggerDocument = require('./docs/openapi.json');
// const options = {
//     // customCss: '.swagger-ui .topbar { display: none }'
//     explorer: true,
//     swaggerOptions: {
//         urls: [
//             {
//                 url: 'https://gist.githubusercontent.com/Israel-Laguan/484576e1eeace16adf80df51864a9b48/raw/34c1aac1283a17643ef9dcecb272dc85881e5e4c/keywordstool.json',
//                 name: 'v2'
//             },
//             {
//                 url: 'http://petstore.swagger.io/v2/swagger.json',
//                 name: 'Spec2'
//             }
//         ]
//     }
// };

const init = (server) => {
    server.get('*', function (req, res, next) {
        console.log('Request was made to: ' + req.originalUrl);
        return next();
    });
    
    server.use('/', system)
    server.use('/', swaggerUi.serve);
    server.get('/', swaggerUi.setup(swaggerDocument));
    // server.use('/docs', swaggerUi.serve, swaggerUi.setup(null, options));
    server.use('/api', versionsRoute);
}
module.exports = {
    init: init
};