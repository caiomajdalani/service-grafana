const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const compression = require('compression');
const helmet = require('helmet')

const { API, ENVIRONMENT } = process.env
const _api = JSON.parse(API)

module.exports = app => {
    app
        .set("port", _api.PORT || 5000)
        .set("env", ENVIRONMENT || 'local')
        .use(helmet())
        .use(cors({
            origins: ["*"],
            methods: ["GET", "POST", "PUT", "DELETE"],
            allowedHeaders: ["Content-Type"]
        }))
        .use(compression())
        .use(bodyParser.json({limit: _api.REQUEST.LIMIT, extended: _api.REQUEST.EXTENDED}))
        .use(bodyParser.urlencoded({limit: _api.REQUEST.LIMIT, extended: _api.REQUEST.EXTENDED}))
        .use((req, res, next) => {
            delete req.body.id;
            next();
        })
        .use(express.static("public"));

}