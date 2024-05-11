import { Register } from "../Model/Users/Register.model.js";
import { options } from "../utils/option.js";

export const logOutController = async (req, res) => {
  try {
    await Register.findByIdAndUpdate(
      req?.user?._id,
      {
        $unset: {
          refreshToken: 1, // remove token
        },
      },
      {
        new: true,
      }
    );

    return res
      .status(200)
      .clearCookie("accessToken", options)
      .clearCookie("refreshToken", options)
      .send({
        success: true,
        message: "Logout Successfully",
      });
  } catch (error) {
    return res.send({ error: error.message });
  }
};

export const currentUserController = async (req, res) => {
  try {
    const user = await Register.findOne(req?.user?._id);
    if (user) {
      return res.send({ success: true, data: user });
    }
  } catch (error) {
    return res.send({ error: "Not Found User" });
  }
};
