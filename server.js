const express = require('express');
const app = express();
const pricingRoutes = require('./src/pricing/routes');
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./src/utils/swagger');

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/",(req,res) => {
    res.send('Hello world!');
});

app.use('/api/v1/pricing', pricingRoutes);



app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`);
})
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));