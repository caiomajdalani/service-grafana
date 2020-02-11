const Joi = require('@hapi/joi');

const schema = {
    project: Joi.object({
        body: Joi.object({
            name: Joi.string().valid('PedeFacil', 'Portal', 'Ecommerce', 'Allowance', 'SodexoMobile', 'PartnersBridge', 'BUS', 'Gateway', 'Test').required(),
            platform: Joi.string().valid('API', 'WEB', 'Mobile', 'Test').required()
        })
    }).unknown(),
    report: Joi.object({
        body: Joi.object({
            projectId: Joi.number().integer().min(1).required(),
            executionDate: Joi.date().iso().required(),
            report: Joi.object({
                features: Joi.object({
                    total: Joi.number().integer().min(1).required(),
                    failures: Joi.number().integer().max(Joi.ref('total')).min(0)
                }),
                scenarios: Joi.object({
                    total: Joi.number().integer().min(1).required(),
                    failures: Joi.number().integer().max(Joi.ref('total')).min(0)
                })
            })
        })
    }).unknown(),
    projectId: Joi.number().integer().min(1).required()
}

module.exports = schema;