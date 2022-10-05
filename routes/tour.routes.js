const express = require("express");
const controller = require('../controllers/tour.controller.js')


//module scaffolding
const tourRoutes = express.Router()

tourRoutes.route('/tours').get(controller.getAllTour).post(controller.createTour)


module.exports=tourRoutes; 
