const express = require("express");
const { getTourData } = require("../controllers/tour.controller");


//module scaffolding
const tourRoutes = express.Router()

tourRoutes.route('/tours', getTourData )

module.exports=tourRoutes; 
