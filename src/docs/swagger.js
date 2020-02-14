

module.exports = app => {
    //swaggger 
    const expressSwagger = require('express-swagger-generator')(app);
    let options = {
        swaggerDefinition: {
            info: {
                description: 'Send your cucumber reports to Grafana Dashboards',
                title: 'Service Reports API',
                version: '1.0.0',
            },
            host: `${app.get('host')}:${app.get('port')}`,
            basePath: '/',
            produces: [
                "application/json"
            ],
            schemes: ['http'],
        },
        basedir: __dirname, 
        files: ['./*.js'] 
    };
    expressSwagger(options)
}