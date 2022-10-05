const mongoose = require('mongoose')
const Tours=require('../model/tour.schema.js')

exports.getAllTourServices=async(filters,queries)=>{

    const tour = await Tours.find(filters)
    .skip(queries.skip)
    .limit(queries.limit)
    .sort(queries.sortBy)
    .select(queries.fields)
    const totalProduct=await Tours.countDocuments(filters);
    const pageCount=Math.ceil(totalProduct/queries.limit)
    return {totalProduct,pageCount,tour};
    
}