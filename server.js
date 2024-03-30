const express = require('express');
const app = express();
const pricingRoutes = require('./src/pricing/routes');
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./src/utils/swagger');
const cors = require('cors');

let corsOptions = { 
    origin : ['http://localhost:3000'], 
 } 

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors(corsOptions));

app.get("/",(req,res) => {
    res.send('Hello world!');
});

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.use('/api/v1/pricing', pricingRoutes);

// handling errors
app.use((req,res,next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});
app.use((error,req,res,next) => {
    res.status(error.status || 500).json({
        error:{
            status: error.status,
            message : error.message
        }
    });
});

app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`);
})
