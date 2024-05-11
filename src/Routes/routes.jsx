import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import RootLayouts from "../Layouts/RootLayouts";
import DashboardLayout from "../Dashboard/DashboardLayout/DashboardLayout";
import DashboardAnalytics from "../Dashboard/DashboardAnalytics/DashboardAnalytics";
import AddCategory from "../Dashboard/AddCategory/AddCategory";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import LoginRoute from "./LoginRoute";
import NotLoginUser from "./NotLoginUser";
import AddJob from "../Dashboard/AddJob/AddJob";
import MyPost from "../Pages/MyPost/MyPost";
import Profile from "../Pages/Profile/Profile";
import JobDetails from "../Pages/JobDetails/JobDetails";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<RootLayouts />}>
        <Route element={<LoginRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/myPost" element={<MyPost />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/jobDetails/:id" element={<JobDetails />} />
        </Route>

        <Route element={<NotLoginUser />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Route>
      <Route element={<AdminRoute />}>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="/dashboard" element={<DashboardAnalytics />} />
          <Route path="/dashboard/addCategory" element={<AddCategory />} />
          <Route path="/dashboard/addJob" element={<AddJob />} />
        </Route>
      </Route>
    </Route>
  )
);
