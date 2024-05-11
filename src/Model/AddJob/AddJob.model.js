import mongoose, { Schema, SchemaType } from "mongoose";

const jobSchema = new Schema(
  {
    logo: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
      lowercase: true,
    },
    duration: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    whoCreated: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Register",
    },
    experience: {
      type: Number,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
    applied: {
      type: Number,
      required: true,
    },
    applicationEnd: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

export const AddJob = mongoose.model("AddJob", jobSchema);
