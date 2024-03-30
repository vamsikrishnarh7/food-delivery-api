const Joi = require('joi');

const payloadSchema = Joi.object({
    zone : Joi.string()
        .max(50)
        .required(),
    organization_id: Joi.number()
        .positive()
        .min(1)
        .required(),
    total_distance: Joi.number()
        .positive()
        .min(1)
        .required(),
    item_type: Joi.string()
        .max(50)
        .required()

})

module.exports = payloadSchema