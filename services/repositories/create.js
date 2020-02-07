'use strict'

module.exports = app => (model, obj) => 
    app.database.mysql.models[model].create(obj)
        .then(data => ({ data }))
        .catch(error => ({ error }))
