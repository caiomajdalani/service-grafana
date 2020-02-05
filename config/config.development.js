const logger = require('../services/utils/logger')

module.exports = {
  database: "reports",
  username: "root",
  password: "admin",
  params: {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    logging: (sql) => {
      logger.info(`[${new Date()}] ${sql}`);
    },
    define: {
      underscored: true
    }
  }
};
