const express = require("express");
const tourController = require('../controllers/tour.controller.js');
const viewCount = require("../middleware/viewCount.js");


//module scaffolding
const tourRoutes = express.Router()

tourRoutes.route('/tours').get(tourController.getAllTour).post(tourController.createTour)
tourRoutes.route('/tour/:id').get(viewCount, tourController.getTourById).patch(tourController.updateTour)

module.exports=tourRoutes; 