const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title:'Food Delivery API Docs',
            version: '1.0.0',
            description:"This is a RESTful API for Food Delivery App backend"
        },
        servers:[
            {
                url:'http://localhost:3000',
                description: "Local server"
            },
            {
                url:'live server',
                description: "Live server"
            }
        ]
    },
    apis:[`./src/pricing/*.js`]
}

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;