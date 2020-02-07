const logger = require('../services/utils/logger')
const { MYSQL } = process.env
const _mysql = MYSQL ? JSON.parse(MYSQL) : null

module.exports = {
  database: _mysql.DATABASE,
  username: _mysql.USERNAME,
  password: _mysql.PASSWORD,
  params: {
    host: _mysql.HOST,
    dialect: 'mysql',
    port: _mysql.PORT,
    logging: (sql) => {
      logger.info(`[${new Date()}] ${sql}`);
    },
    define: {
      underscored: true
    }
  }
};
