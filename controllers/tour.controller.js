const { getAllTourServices } = require('../services/tour.services');


//get all tour
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



exports.createTour = async (req, res, next) => {
    try {
        const result = await createTourService(req.body);
        res.status(200).json({
            stauts: "success",
            massage: "Data inside successfully",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            stauts: "fail",
            message: "Data is not inserted",
            error: error.message
        })
    }
}

exports.getTourById =async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId(id)) {
            return res.status(400).json({
                status: false,
                message: 'Invalid Tour Info',
                error: error.message
            })
        }
        const result = await getTourServicebyId({ _id: mongoose.Types.ObjectId(id) })

        res.status(200).json({
            stauts: "success",
            massage: "Data get successfully",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            stauts: "fail",
            message: "Tour is not find by id",
            error: error.message
        })
    }
}

exports.updateTour = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await updateToureService(id, req.body)
        res.status(200).json({
            stauts: "success",
            massage: "Data Update successfully",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            stauts: "fail",
            message: "Product is not update",
            error: error.message
        })
    }
}

exports.trendingTour = async (req, res, next) => {
    try {
        const result = await trendingTourService();
        res.status(200).json({
            stauts: "success",
            massage: "Getting A cheapest Tour Successfully",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            stauts: "fail",
            message: "cheapestTour Data is not find",
            error: error.message
        })
    }
}


