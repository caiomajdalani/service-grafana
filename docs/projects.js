'use strict'

/**
 * @typedef createProject
 * @property {string} name.required
 * @property {string} platform.required
 */

 /**
 * @typedef responseProject
 * @property {integer} id.required 
 * @property {string} project.required
 * @property {string} platform.required 
 */

/**
 * Create a Project
 * @route POST /projects
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
 * @route GET /projects
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
 * @route GET /projects/{projectId}
 * @group PROJECTS - Resource for projects operations.
 * @param {integer} projectId.path.required - Project ID
 * @returns {responseProject.model} 200 - Project object with it properties.
 * @returns {Error} 400 - Invalid properties.
 * @returns {Error} 401 - Unauthorized.
 * @returns {Error} 409 - Business error.
 * @returns {Error} 422 - UnprocessableEntity
 * @returns {Error} 500 - Internal server error.
 */

exports.foo = () => {}