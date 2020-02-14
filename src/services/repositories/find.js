module.exports = app => (model, query = {}) => 
    app.src.database.mysql.models[model].findAll({where: query})
        .then(data => ({ data }))
        .catch(error => ({ error }))