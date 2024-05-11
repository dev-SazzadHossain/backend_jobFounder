import jwt from "jsonwebtoken";
import { Register } from "../Model/Users/Register.model.js";
export const checkAdmin = async (req, res, next) => {
  try {
    const token =
      req.cookies.refreshToken ||
      req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      return res.send({ message: "Unauthorized request" });
    }
    const checkTokenIsVerify = await jwt.verify(
      token,
      process.env.REFRESH_TOKEN_SECRET
    );
    if (!checkTokenIsVerify) {
      return res.send({ message: "Invalid AccessToken" });
    }
    const user = await Register.findById(checkTokenIsVerify?._id);
    if (!user) {
      return res.send({ message: "Unauthorized user" });
    }
    if (!(user?.role === "admin")) {
      return res.send({ error: "Invalid User Access Only Access Admin" });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.send({
      error: "Check Admin Error",
      errorMessage: error.message,
    });
  }
};
