module.exports = app => (model, query) => 
    app.database.mysql.models[model].findOne({where: query})
        .then(data => ({ 
            data: data.get({
                plain: true
             })
         }))
        .catch(error => ({ error }))

