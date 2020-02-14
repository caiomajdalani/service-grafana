'use strict'

/**
 * @typedef Features
 * @property {integer} total
 * @property {integer} failures
 */

/**
 * @typedef Scenarios
 * @property {integer} total
 * @property {integer} failures
 */

/**
 * @typedef Report
 * @property {Features.model} features
 * @property {Scenarios.model} scenarios
 */

/**
 * @typedef createReport
 * @property {integer} projectId.required
 * @property {string} executionDate.required 
 * @property {Report.model} report.required
 */

/**
 * @typedef responseReport
 * @property {integer} id.required 
 * @property {integer} projectId.required
 * @property {string} executionDate.required 
 * @property {integer} features.required
 * @property {integer} featuresFailed.required
 * @property {integer} scenarios.required
 * @property {integer} scenariosFailed.required
 */

/**
 * Create a Report
 * @route POST /v1/reports
 * @group REPORTS - Resource for reports operations.
 * @param {createReport.model} createReport.body.required - Create Report payload.
 * @returns {responseReport.model} 201 - Report object with it properties.
 * @returns {Error} 400 - Invalid properties.
 * @returns {Error} 401 - Unauthorized.
 * @returns {Error} 409 - Business error.
 * @returns {Error} 422 - UnprocessableEntity
 * @returns {Error} 500 - Internal server error.
 */

exports.foo = () => {}