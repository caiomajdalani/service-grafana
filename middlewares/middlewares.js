const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const compression = require('compression');
const helmet = require('helmet')

module.exports = app => {
    app
        .set("port", process.env.PORT || 5000)
        .set("env", process.env.NODE_ENV || 'dev')
        .use(helmet())
        .use(cors({
            origins: ["*"],
            methods: ["GET", "POST", "PUT", "DELETE"],
            allowedHeaders: ["Content-Type"]
        }))
        .use(compression())
        .use(bodyParser.json({limit: '50mb', extended: true}))
        .use(bodyParser.urlencoded({limit: '50mb', extended: true}))
        .use((req, res, next) => {
            delete req.body.id;
            next();
        })
        .use(express.static("public"));

}