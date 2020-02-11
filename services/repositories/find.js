module.exports = app => (model) => 
    app.database.mysql.models[model].findAll({})
        .then(data => ({ data }))
        .catch(error => ({ error }))