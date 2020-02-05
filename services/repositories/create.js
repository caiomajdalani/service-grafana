'use strict'

module.exports = app = (model, obj) => 
    app.db.models[model].create(obj)
        .then(data => ({ data: JSON.stringify(data, null, 4) }))
        .catch(error => ({ error }))
