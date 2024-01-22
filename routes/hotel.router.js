const express = require('express');
const router = express.Router();

const hotels = require("../data/hotels")

router.route("/hotelCategory") //localhost:3500/api/hotels/hotelCategory
    .get((req,res) => {
        res.json(hotels.data)
    })

module.exports=router;