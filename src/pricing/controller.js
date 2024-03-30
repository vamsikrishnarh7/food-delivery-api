const pool = require('../../db');
const queries = require('./queries');
const payloadSchema = require('../helpers/validation_schema')

const getPricing = (req,res) => {
    //validading API input payload
    const value = payloadSchema.validate(req.body);
    if(value.error) res.status(400).json({
        error:{
            status:500,
            message:"Bad Request"
        }
    })

    const {zone,organization_id,total_distance,item_type} = req.body;
    const item_id = (item_type === "perishable")?1:2;
    console.log("getting students");
    pool.query(queries.getPricing+item_id,(error,result) => {
        if(error) res.status(500).json({
            error:{
                status:error.status,
                message:"internal server error"
            }
        })
        // console.log(result.rows);
        const {base_distance_in_km,km_price,fix_price} = result.rows[0];
        // calculating total price
        let total_price = 0;
        if(total_distance <= base_distance_in_km){
            total_price = fix_price;
        }
        else total_price = fix_price + (total_distance-base_distance_in_km) * km_price;

        res.status(200).json({
            total_price:total_price
        })
    });
}

module.exports = {getPricing,};
