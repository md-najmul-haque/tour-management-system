const { getAllTourServices } = require('../services/tour.services');

//controller 
// const controller = {};

//get random user
exports.getAllTour = async (req, res, next) => {
    try {
        let filters = { ...req.query }
        const excludeField = ['sort', 'page', 'limit']
        excludeField.forEach(field => delete filters[field])

        let filterString = JSON.stringify(filters)
        filterString = filterString.replace(/\b(gt|gte|lt|Lte)\b/g, match => `$${match}`)

        filters = JSON.parse(filterString)


        const queries = {}
        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ')
            queries.sortBy = sortBy
        }
        if (req.query.fields) {
            const fields = req.query.fields.split(',').join(' ')
            queries.fields = fields
        }
        //Pagination
        if (req.query.page) {
            const { page = 1, limit = 10 } = req.query;
            const skip = (page - 1) * parseInt(limit);
            queries.skip = skip;
            queries.limit = parseInt(limit);
        }
        const result = await getAllTourServices(filters, queries)
        res.status(200).json({
            status: "success",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            stauts: "fail",
            message: "Cant not get data",
            error: error.message
        })
    }
}

//export controller 
// module.exports = controller;