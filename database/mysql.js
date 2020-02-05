
const Sequelize = require('sequelize');
const fs = require('fs')
const path = require('path')
const logger = require('../services/utils/logger')

let mysql = null;

module.exports = app => {
  if (!mysql) {

    const config = app.config.config;

    const sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config.params
    );
    
    sequelize
        .authenticate()
        .then(() => {
            logger.info({message: "Database connected succesfully"})
        })
        .catch(err => {
            logger.error({message: "Internal error", meta: new Error(err)})
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