const mongoose = require("mongoose");

const tourSchema = mongoose.Schema({
    packageName: {
    type: String,
    required: [true, "Please provide a packageName for tour"],
    trim: true,
    unique: true,
    minLength: [3, "packageName mast be 3 characters"],
    maxLength: [100, "packageName is too larges"],
  },
  packageType: {
    type: String,
    required: true,
    enum: {
      values: ["premium-package", "business-class", "normal-package"],
      massage: "packageType value can't be {VALUE},must be premium-package/business-class/normal-package",
    }
  },
  packageLocation: {
    type: String,
    required: true,
    minLength: [3, "packageName mast be 3 characters"],
    maxLength: [100, "packageName is too larges"]
  },
  packageDescription: {
    type: String,
    required: true
  },
  packagePrice: {
    type: Number,
    required: true,
    min: [0, "packagePrice can't be negative"],
  }
},
  { timestamps: true }
)
//model
const tourData = mongoose.model('tourData', tourSchema)

module.exports = tourData;