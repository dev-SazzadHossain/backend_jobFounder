import { AddJob } from "../Model/AddJob/AddJob.model.js";
import { Category } from "../Model/Category/Category.model.js";

export const categoryController = async (req, res) => {
  try {
    const { categoryName } = req.body;
    if (categoryName == "") {
      return res.send({ error: "filed is required" });
    }

    const exists = await Category.findOne({ categoryName });
    if (exists) {
      return res.send({ error: "Already Added This Category" });
    }

    const category = new Category({
      categoryName: categoryName,
    });

    await category.save({ validateBeforeSave: false });

    return res
      .status(200)
      .send({ success: true, message: "Category Added Successfully" });
  } catch (error) {
    return res.send({ error: error.message });
  }
};

export const allCategory = async (req, res) => {
  try {
    const allCategory = await Category.find({});
    // const response = await Category.aggregate([
    //   {
    //     $lookup: {
    //       from: "addjobs",
    //       localField: "_id",
    //       foreignField: "categoryId",
    //       as: "category_jobs",
    //     },
    //   },
    //   {
    //     $project: {
    //       _id: 0,
    //       categoryName: "$_id",
    //       jobCount: { $size: "$category_jobs" },
    //     },
    //   },
    // ]);

    const response = await Category.aggregate([
      {
        $lookup: {
          from: "addjobs",
          localField: "_id",
          foreignField: "categoryId",
          as: "jobs",
        },
      },
      {
        $project: {
          _id: 0,
          categoryName: "$categoryName",
          jobCount: { $size: "$jobs" },
        },
      },
    ]);
    if (allCategory) {
      return res.send({ success: true, data: response });
    }
  } catch (error) {
    return res.send({ error: error.message });
  }
};
