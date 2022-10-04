const { application } = require("express");
const express = require("express");


//module scaffolding
const tourRoutes = express.Router()

tourRoutes.route('/tours', getToursData )

module.exports=tourRoutes; 
