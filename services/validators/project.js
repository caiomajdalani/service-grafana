const Joi = require('@hapi/joi');

const schema = {
    project: Joi.object({
        body: Joi.object({
            name: Joi.string().valid('PedeFacil', 'Portal', 'Ecommerce', 'Allowance', 'SodexoMobile', 'PartnersBridge', 'BUS', 'Gateway'),
            platform: Joi.string().valid('API', 'WEB', 'Mobile')
        })
    }).unknown()
}

module.exports = schema;