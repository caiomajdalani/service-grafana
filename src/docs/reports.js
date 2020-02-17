'use strict'

/**
 * @typedef Features
 * @property {integer} total - Total number of features on Report
 * @property {integer} failures - Number of features that fail on Report
 */

/**
 * @typedef Scenarios
 * @property {integer} total - Total number of scenarios on Report
 * @property {integer} failures - Number of scenarios that fail on Report
 */

/**
 * @typedef Report
 * @property {Features.model} features - Features properties 
 * @property {Scenarios.model} scenarios - Scenarios properties
 */

/**
 * @typedef createReport
 * @property {integer} projectId.required - ProjectId
 * @property {string} executionDate.required - Date of Report execution (Ex.: 2020-02-17T09:15:22-03:00)
 * @property {Report.model} report.required - Report data
 */

/**
 * @typedef responseReport
 * @property {integer} id.required - ReportId
 * @property {integer} projectId.required - ProjectId
 * @property {string} executionDate.required - Date of Report execution (Ex.: 2020-02-17T09:15:22-03:00)
 * @property {integer} features.required - Total number of features on Report
 * @property {integer} featuresFailed.required - Number of features that fail on Report
 * @property {integer} scenarios.required - Total number of scenarios on Report
 * @property {integer} scenariosFailed.required - Number of scenarios that fail on Report
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