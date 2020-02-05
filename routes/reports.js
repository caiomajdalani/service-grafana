const replies = require('../services/replies/index')

const createReport = async (request, response) => {
    try {
        return replies.ok(response)('Ok!')
    } catch (error) {
        logger.error({message: "Internal server error", meta: new Error(err)})
        return replies.internalServerError(response)('Error.')
    }
}

module.exports = app => {

    app
        .route('/reports')
        .post(createReport)
}
