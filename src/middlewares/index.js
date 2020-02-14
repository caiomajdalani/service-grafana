const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const compression = require('compression');
const helmet = require('helmet')
const expressWinston = require('express-winston');
const winston = require('winston')

const { API, ENVIRONMENT } = process.env
const _api = JSON.parse(API)

module.exports = app => {
    app
        .set("host", _api.HOST || 'localhost')
        .set("port", _api.PORT || 5000)
        .set("env", ENVIRONMENT || 'LOCAL')
        .set("version", _api.VERSION)
        .use(helmet())
        .use(cors({
            origins: ["*"],
            methods: ["GET", "POST", "PUT", "DELETE"],
            allowedHeaders: ["Content-Type"]
        }))
        .use(compression())
        .use(bodyParser.json({limit: _api.REQUEST.LIMIT, extended: _api.REQUEST.EXTENDED}))
        .use(bodyParser.urlencoded({limit: _api.REQUEST.LIMIT, extended: _api.REQUEST.EXTENDED}))
        .use(expressWinston.logger({
            transports: [
              new winston.transports.Console({
                format: winston.format.combine(
                    winston.format.timestamp(),
                    winston.format.colorize(),
                )
            }), 
            new winston.transports.File({ filename: './logs/errors.log', level: 'error' }),
            new winston.transports.File({ filename: './logs/combined.log' })
            ],
            format: winston.format.combine(
              winston.format.timestamp(),
              winston.format.colorize(),
              winston.format.json(),
              winston.format.printf((info)=>{
                  return `${info.timestamp} ${info.message} -> ${JSON.stringify(info.meta)}`;
              })
            ),
            msg: "HTTP {{req.method}} {{req.url}}",
            expressFormat: true,
            colorize: true,
            ignoreRoute: function (req, res) { return false; }
        }));

}