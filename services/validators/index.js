const Joi = require('@hapi/joi');

const schema = {
    project: Joi.object({
        body: Joi.object({
            name: Joi.string().valid('PedeFacil', 'Portal', 'Ecommerce', 'Allowance', 'SodexoMobile', 'PartnersBridge', 'BUS', 'Gateway', 'Test'),
            platform: Joi.string().valid('API', 'WEB', 'Mobile', 'Test')
        })
    }).unknown(),
    report: Joi.object({
        body: Joi.object({
            projectId: Joi.number().integer(),
            executionDate: Joi.date().iso(),
            report: Joi.object({
                features: Joi.object({
                    total: Joi.number().integer(),
                    failures: Joi.number().integer()
                }),
                scenarios: Joi.object({
                    total: Joi.number().integer(),
                    failures: Joi.number().integer()
                })
            })
        })
    }).unknown()
}

module.exports = schema;