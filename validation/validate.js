const Joi=require('joi');

const schema=Joi.object({
    name:Joi.string()
    .alphanum()
    .min(3)
    .max(8),

    email :Joi.string()
    .email({minDomainSegments:2,tlds:{allow:['com','net']}}),
    
    mobileno:Joi.string()
    .min(10)
    .max(12)
});

module.exports={schema}