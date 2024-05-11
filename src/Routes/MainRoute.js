import express from "express";
import { registerController } from "../Controllers/Register.controller.js";
import { loginController } from "../Controllers/Login.controller.js";
import {
  currentUserController,
  logOutController,
} from "../Controllers/Logout.controller.js";
import { verifyUser } from "../Middleware/Auth.middleware.js";
import {
  allCategory,
  categoryController,
} from "../Controllers/Category.controller.js";
import { imageUploader } from "../Middleware/Multer.middleware.js";
import {
  addJobController,
  allJobsController,
} from "../Controllers/AddJob.controller.js";
import { jobCountController } from "../Controllers/JobsCount.controller.js";
import { myPostJobController } from "../Controllers/MyPostJob.controller.js";
import {
  currentUser,
  profilePicController,
  updateUserInfo,
  userPasswordChange,
} from "../Controllers/profile.controller.js";
const mainRoute = express.Router();

mainRoute.route("/register").post(registerController);
mainRoute.route("/login").post(loginController);
mainRoute.route("/logout").post(verifyUser, logOutController);
mainRoute.route("/category").post(categoryController);
mainRoute.route("/category").get(allCategory);
mainRoute.route("/currentUser").get(verifyUser, currentUserController);

mainRoute
  .route("/addJob")
  .post(verifyUser, imageUploader.single("logo"), addJobController);
mainRoute.route("/allJobs").get(allJobsController);
mainRoute.route("/allJobsCount").get(jobCountController);
mainRoute.route("/myJobs").get(verifyUser, myPostJobController);
mainRoute
  .route("/profileImg")
  .post(verifyUser, imageUploader.single("profile"), profilePicController);
mainRoute.route("/currentUser").get(verifyUser, currentUser);
mainRoute.route("/userInfo").post(verifyUser, updateUserInfo);
mainRoute.route("/changePassword").post(verifyUser, userPasswordChange);
// mainRoute.route("/search").post(searchController);

export default mainRoute;
