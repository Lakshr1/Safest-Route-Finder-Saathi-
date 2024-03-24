const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");

router.post(
	"/",
	
	async(req, res) => {
        try{
            const {lighting,ranking,remark,routesWithStreetNames,sentiment}  = req.body;
        let feedback = new Feedback({
            lighting,
            ranking,
            remark,
            routesWithStreetNames,
            sentiment
        });
        await feedback.save();
        res.status(200).send(req.body);
    } catch(err){
        res.status(500).send(err.msg);
    }
	}
	
);

module.exports = router;
