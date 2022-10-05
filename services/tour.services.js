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

exports.createTourService = async (data) => {
    const product = await Tours.create(data);
    return product;
}

exports.getTourServicebyId= async(id)=>{
    const tour = await Tours.findOne(id);
    return tour;
}

exports.updateToureService = async (tourId, data) => {
    const result = await Tours.updateOne({ _id: tourId }, { $set: data }, { runValidators: true })
    return result;
}
