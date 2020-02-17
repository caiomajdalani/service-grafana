const replies = require('../services/replies')
const logger = require('../services/utils/logger')
const validator = require('../services/validators')

module.exports = app => {
    app
        .route('/v1/projects')
        .post(async (request, response) => {
            try {
        
                const { value: dataValidation, error: errorValidation } = validator.project.validate(request)
                if (errorValidation) {
                    return replies.badRequest(response)(errorValidation.message)
                } else {
        
                    const { data: dataFindProject, error: errorFindProject } = await app.src.services.repositories.findOne('project', request.body)
                    if (dataFindProject) {
                        if(dataFindProject.active) {
                            return replies.conflict(response)(`This project already exists at ID = ${dataFindProject.id}`)
                        } else {
                            const { data: dataUpdateProject, error: errorUpdateProject } = await app.src.services.repositories.update('project', { active: true }, request.body)
                            if(errorUpdateProject){
                                logger.error({message: "Error updating on Database", meta: new Error(errorUpdateProject)})
                                return replies.unprocessableEntity(response)('Error.')
                            } else {
                                const { data: dataFindProject, error: errorFindProject } = await app.src.services.repositories.findOne('project', request.body)
                                return replies.created(response)(dataFindProject)
                            }
                        }
                        
                    } else {
                        const { data: dataCreateProject, error: errorCreateProject } = await app.src.services.repositories.create('project', request.body)
                        if(errorCreateProject){
                            logger.error({message: "Error saving on Database", meta: new Error(errorCreateProject)})
                            return replies.unprocessableEntity(response)('Error.')
                        } else {
                            return replies.created(response)(dataCreateProject)
                        }
                    }
                    
                }
        
            } catch (error) {
                logger.error({message: "Internal server error", meta: new Error(error)})
                return replies.internalServerError(response)('Error.')
            }
        })
        .get(async(request, response)=>{
            try {
                const { data: dataFindProjects, error: errorFindProjects } = await app.src.services.repositories.find('project', {active: true})
                if(errorFindProjects){
                    logger.error({message: "Error querying on Database", meta: new Error(errorFindProjects)})
                    return replies.unprocessableEntity(response)('Error.')
                } else {
                    return replies.ok(response)(dataFindProjects)
                }
            } catch (error) {
                logger.error({message: "Internal server error", meta: new Error(error)})
                return replies.internalServerError(response)('Error.')
            }
        });

    app
        .route('/v1/projects/:projectId')
        .get(async(request, response)=>{
            try {
                const { value: dataValidation, error: errorValidation } = validator.projectId.validate(request.params.projectId)
                if (errorValidation) {
                    return replies.badRequest(response)(errorValidation.message)
                } else {
                    const { data: dataFindProject, error: errorFindProject } = await app.src.services.repositories.findOne('project', {id: request.params.projectId})
                    if(errorFindProject){
                        return replies.notFound(response)(`ProjectId = ${request.params.projectId} not found.`)
                    } else {
                        return replies.ok(response)(dataFindProject)
                    }
                }
            } catch (error) {
                logger.error({message: "Internal server error", meta: new Error(error)})
                return replies.internalServerError(response)('Error.')
            }
        })
        .delete(async(request, response)=>{
            try {
                const { value: dataValidation, error: errorValidation } = validator.projectId.validate(request.params.projectId)
                if (errorValidation) {
                    return replies.badRequest(response)(errorValidation.message)
                } else {
                    const { data: dataFindProject, error: errorFindProject } = await app.src.services.repositories.findOne('project', {id: request.params.projectId})
                    if(errorFindProject){
                        return replies.notFound(response)(`ProjectId = ${request.params.projectId} not found.`)
                    } else {
                        const { data: dataUpdateProject, error: errorUpdateProject } = await app.src.services.repositories.update('project', { active: false }, {id: request.params.projectId})
                        if(errorUpdateProject){
                            logger.error({message: "Error updating on Database", meta: new Error(errorUpdateProject)})
                            return replies.unprocessableEntity(response)('Error.')
                        } else {
                            return replies.accepted(response)(`ProjectId = ${request.params.projectId} deactivated.`)
                        }
                    }
                }
            } catch (error) {
                logger.error({message: "Internal server error", meta: new Error(error)})
                return replies.internalServerError(response)('Error.')
            }
        })

}
