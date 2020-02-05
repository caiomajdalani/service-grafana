const express = require('express');
const app = express();

// ----------------------------------------------------------------------------------------------

const consign = require('consign');

consign({verbose: false})
  .include("./config/config.js")
  .then('./database/mysql.js')
  .then("./middlewares/middlewares.js")
  .then("routes")
//   .then('./services/repositories/create.js')
  .then('./docs/swagger.js')
  .then("./servers/start.js")
  .into(app);
  
// ----------------------------------------------------------------------------------------------

module.exports = app;