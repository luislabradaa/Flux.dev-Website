const serverless = require('serverless-http');
const app = require('../../app'); // Importa tu app desde app.js

// Exporta tu aplicación como una función serverless
module.exports.handler = serverless(app);
