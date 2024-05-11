import { AddJob } from "../Model/AddJob/AddJob.model";
import { Register } from "../Model/Users/Register.model";

export const searchController = async (req, res) => {
  try {
    // const position = "react developer";
    // const response = await AddJob.aggregate([
    //   {
    //     $match: { position: position.toLowerCase() },
    //   },
    //   {},
    // ]);
  } catch (error) {
    return res.send({ error: error.message });
  }
};
