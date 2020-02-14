const express = require('express');
const app = express();

// ----------------------------------------------------------------------------------------------

const consign = require('consign');

consign({verbose: false})
  .include('./src/database')
  .then("./src/middlewares")
  .then("./src/routes")
  .then('./src/services/repositories')
  .then('./src/docs/swagger.js')
  .then("./src/servers/start.js")
  .into(app);
    
// ----------------------------------------------------------------------------------------------

module.exports = app;