import { ObjectId } from "mongodb";
import { uploadImage } from "../Middleware/Cludinary.middleware.js";
import { AddJob } from "../Model/AddJob/AddJob.model.js";
import { Category } from "../Model/Category/Category.model.js";

export const addJobController = async (req, res) => {
  try {
    const {
      companyName,
      location,
      position,
      duration,
      description,
      salary,
      category,
      experience,
      qualification,
      level,
      applied,
      applicationEnd,
    } = req.body;
    if (
      [
        companyName,
        location,
        position,
        duration,
        description,
        salary,
        category,
        experience,
        qualification,
        level,
        applied,
        applicationEnd,
      ].some((filed) => filed.trim() == "")
    ) {
      return res.send({ error: "all filed are required" });
    }

    // upload logo company
    const path = req.file?.path;
    if (!path) {
      return res.send({ error: "file missing" });
    }

    const logo = await uploadImage(path);
    if (!logo) {
      return res.send({ error: "logo is Required" });
    }
    const categoryId = await Category.findOne({ categoryName: category });
    if (!categoryId) {
      return res.send({ error: "not found category" });
    }

    const newStore = new AddJob({
      logo: logo?.url,
      companyName,
      location,
      position,
      duration,
      description,
      salary: Number(salary),
      experience: Number(experience),
      qualification,
      level,
      applied: Number(applied),
      applicationEnd: Date(applicationEnd),
      categoryId: categoryId?._id,
      whoCreated: req.user?._id,
    });

    const store = await newStore.save({ validateBeforeSave: false });

    return res.status(200).send({
      success: true,
      message: "AddJob Created Successfully",
      data: store,
    });
  } catch (error) {
    return res.send({ error: error?.message });
  }
};

export const allJobsController = async (req, res) => {
  try {
    const { name, city, category } = req.query;
    if (name !== "" || city !== "" || category !== "") {
      const categoryData = await Category.findOne({
        categoryName: category,
      });
      console.log(categoryData?._id);
      //   if (!categoryData) {
      //     return res.send({ error: "category Not Found" });
      //   }
      const position = await AddJob.find({
        $or: [
          {
            position: { $regex: new RegExp(name, "i") },
          },
          { categoryId: categoryData._id },
        ],
      });
      return res
        .status(200)
        .send({ success: true, message: "filer data", data: position });
    } else {
      const allJobs = await AddJob.find({});
      return res.status(200).send({ success: true, data: allJobs });
    }
  } catch (error) {
    return res.send({ error: error.message });
  }
};
