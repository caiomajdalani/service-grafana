'use strict'

/**
 * @typedef Element
 * @property {string} id
 * @property {string} keyword
 * @property {string} name
 * @property {string} description
 * @property {integer} line
 * @property {string} type
 * @property {Array.<Tag>} tags
 * @property {Array.<Step>} steps
 * @property {Array.<After>} after
 */

/**
 * @typedef Tag
 * @property {string} name
 * @property {string} line
 */

/**
 * @typedef Step
 * @property {string} keyword
 * @property {string} name
 * @property {integer} line
 * @property {Array.<Match>} match
 * @property {Array.<Result>} result
 */

/**
 * @typedef Match
 * @property {string} location
 */

/**
 * @typedef Result
 * @property {string} status
 * @property {integer} duration
 */

/**
 * @typedef After
 * @property {Array.<string>} output
 * @property {Array.<Match>} match
 * @property {Array.<Result>} result
 */

/**
 * @typedef Report
 * @property {string} uri
 * @property {string} id
 * @property {string} keyword
 * @property {string} name
 * @property {string} description
 * @property {integer} line
 * @property {Array.<Element>} elements
 */

/**
 * @typedef createReport
 * @property {string} project.required
 * @property {string} platform.required 
 * @property {string} executionDate.required 
 * @property {Array.<Report>} report.required
 */

/**
 * @typedef responseReport
 * @property {string} id.required 
 * @property {string} project.required
 * @property {string} platform.required 
 * @property {string} executionDate.required 
 * @property {Array.<Report>} report.required
 */

/**
 * @typedef Errors
 * @property {integer} code - Error business code
 * @property {string} message - Error message
 */

/**
 * Create a Report
 * @route POST /reports
 * @group REPORTS - Resource for reports operations.
 * @param {createReport.model} createReport.body.required - Create Report payload.
 * @returns {responseReport.model} 201 - Report object with it properties.
 * @returns {Errors.model} 400 - Invalid properties.
 * @returns {Error} 401 - Unauthorized.
 * @returns {Errors.model} 409 - Business error.
 * @returns {Error} 422 - UnprocessableEntity
 * @returns {Error} 500 - Internal server error.
 */

exports.foo = () => {}