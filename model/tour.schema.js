import mongoose from "mongoose";

export const tourSchema = mongoose.Schema(
  {
    id: String,
    name: {
      type: String,
      required: true,
      min: 5,
      max: 100,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    package: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    views: Number,
  },
  { timestamps: true }
);

const tourData = mongoose.model("tour", tourSchema);

export default TourData;