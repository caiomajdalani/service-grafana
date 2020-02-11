const replies = require('../services/replies')
const logger = require('../services/utils/logger')
const validator = require('../services/validators')

const _mapReport = (body) => {
    return {
        projectId: body.projectId,
        executionDate: body.executionDate,
        features: body.report.features.total,
        featuresFailed: body.report.features.failures,
        scenarios: body.report.scenarios.total,
        scenariosFailed: body.report.scenarios.failures
    }
}

module.exports = app => {

    app
        .route('/reports')
        .post(async (request, response) => {
            try {
                const { value: dataValidation, error: errorValidation } = validator.report.validate(request)
                if (errorValidation) {
                    return replies.badRequest(response)(errorValidation.message)
                } else {

                    const { data: dataFindProject, error: errorFindProject } = await app.services.repositories.findOne('project', {id: request.body.projectId})
                    if (errorFindProject) {
                        return replies.conflict(response)(`ProjectId = ${request.body.projectId} not found.`)
                    } else {
                        const _report = await _mapReport(request.body)

                        const { data: dataFindReport, error: errorFindReport } = await app.services.repositories.findOne('report', {project_id: _report.projectId, execution_date: _report.executionDate})
                        if (dataFindReport){
                            return replies.conflict(response)(`Report already exists at ID: ${dataFindReport.id}`)
                        } else {
                            const { data: dataCreateReport, error: errorCreateReport } = await app.services.repositories.create('report', _report)
                            if(errorCreateReport){
                                logger.error({message: "Error saving on Database", meta: new Error(errorCreateReport)})
                                return replies.unprocessableEntity(response)('Error.')
                            } else {
                                return replies.created(response)(dataCreateReport)
                            }
                        }
                        
                    }

                }

            } catch (error) {
                logger.error({message: "Internal server error", meta: new Error(error)})
                return replies.internalServerError(response)('Error.')
            }
        })
}
