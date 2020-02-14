
const Sequelize = require('sequelize');
const fs = require('fs')
const path = require('path')
const logger = require('../services/utils/logger')

let mysql = null;

module.exports = app => {
  if (!mysql) {
    
    const sequelize = new Sequelize(
      app.src.database.config.database,
      app.src.database.config.username,
      app.src.database.config.password,
      app.src.database.config.params
    );
    
    sequelize
        .authenticate()
        .then(() => {
            logger.info({message: "[*] DATABASE CONNECTED SUCCESSFULLY"})
        })
        .catch(err => {
            logger.error({message: "[!] UNABLE TO CONNECT TO THE DATABASE: ", meta: new Error(err)})
        });

    mysql = {
      sequelize,
      Sequelize,
      models: {}
    };
    const dir = path.join(__dirname, "../models");
    fs.readdirSync(dir).forEach(file => {
      const modelDir = path.join(dir, file);
      const model = sequelize.import(modelDir);
      mysql.models[model.name] = model;
    });
  }
  return mysql;
};