'use strict'

/**
 * @typedef createProject
 * @property {string} name.required - Project Name (Accepted values: 'PedeFacil', 'Portal', 'Ecommerce', 'Allowance', 'SodexoMobile', 'PartnersBridge', 'BUS', 'Gateway', 'Test')
 * @property {string} platform.required - Project Platform (Accepted values: 'API', 'WEB', 'Mobile', 'Test')
 */

 /**
 * @typedef responseProject
 * @property {integer} id.required - ProjectId
 * @property {string} project.required - Project Name
 * @property {string} platform.required - Project Platform
 * @property {boolean} active.required - Is project active?
 */

/**
 * Create a Project
 * @route POST /v1/projects
 * @group PROJECTS - Resource for projects operations.
 * @param {createProject.model} createProject.body.required - Create Project payload.
 * @returns {responseProject.model} 201 - Project object with it properties.
 * @returns {Error} 400 - Invalid properties.
 * @returns {Error} 401 - Unauthorized.
 * @returns {Error} 409 - Business error.
 * @returns {Error} 422 - UnprocessableEntity
 * @returns {Error} 500 - Internal server error.
 */

/**
 * Find projects
 * @route GET /v1/projects
 * @group PROJECTS - Resource for projects operations.
 * @returns {Array.<responseProject>} 200 - Array of Projects objects with it properties.
 * @returns {Error} 400 - Invalid properties.
 * @returns {Error} 401 - Unauthorized.
 * @returns {Error} 409 - Business error.
 * @returns {Error} 422 - UnprocessableEntity
 * @returns {Error} 500 - Internal server error.
 */

/**
 * Find a project
 * @route GET /v1/projects/{projectId}
 * @group PROJECTS - Resource for projects operations.
 * @param {integer} projectId.path.required - Project ID
 * @returns {responseProject.model} 200 - Project object with it properties.
 * @returns {Error} 400 - Invalid properties.
 * @returns {Error} 401 - Unauthorized.
 * @returns {Error} 409 - Business error.
 * @returns {Error} 422 - UnprocessableEntity
 * @returns {Error} 500 - Internal server error.
 */

/**
 * Deactivate a project
 * @route DELETE /v1/projects/{projectId}
 * @group PROJECTS - Resource for projects operations.
 * @param {integer} projectId.path.required - Project ID
 * @returns {string} 202 - ProjectId = {projectId} deactivated.
 * @returns {Error} 400 - Invalid properties.
 * @returns {Error} 401 - Unauthorized.
 * @returns {Error} 409 - Business error.
 * @returns {Error} 422 - UnprocessableEntity
 * @returns {Error} 500 - Internal server error.
 */

exports.foo = () => {}