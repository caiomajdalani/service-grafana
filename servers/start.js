const http = require('http')
const logger = require('../services/utils/logger')

module.exports = app => {
    app.database.mysql.sequelize.sync().done(() => {
        http.createServer(app)
            .listen(app.get("port"), () => {
                logger.info(`Express Server started on Port ${app.get(
                    'port'
                )} | Environment : ${app.get('env')}`);
            });
    });
}