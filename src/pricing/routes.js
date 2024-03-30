const {Router} = require('express');
const controller = require('./controller');

const router = Router();

/**
 * @swagger
 * /api/v1/pricing/:
 *  post:
 *     tags:
 *     summary: Get total price
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            properties:
 *              zone:
 *                type: string
 *              organization_id:
 *                type: string
 *              total_distance:
 *                type: integer
 *              item_type:
 *                type: string
 *            required:
 *              - zone
 *              - organization_id
 *              - total_distance
 *              - item_type
 *     responses:
 *      200:
 *        description: Fetched Successfully
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.post('/', (req,res) => {
    controller.getPricing(req,res);
});

module.exports = router