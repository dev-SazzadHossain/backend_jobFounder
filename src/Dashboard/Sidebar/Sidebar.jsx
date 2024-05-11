import { MdOutlineRestaurantMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Sidebar = ({ setOpen, open }) => {
  return (
    <div className=" h-screen w-[200px] border border-r-blue-400 border-l-0 px-3">
      <div
        className={`lg:hidden md:hidden  block ${
          open ? "transition-all duration-300" : "transition-all duration-300"
        }`}
      >
        {open && (
          <span onClick={() => setOpen(false)}>
            <MdOutlineRestaurantMenu fontSize="38px" />
          </span>
        )}
      </div>
      <ul>
        <li className=" text-lg tracking-wide hover:tracking-wider transition-all duration-300 text-white hover:text-white  text-center rounded-md bg-violet-500 mt-3 mb-3 py-2 px-2">
          <NavLink>Analytics</NavLink>
        </li>

        <NavLink
          to="/dashboard/addCategory"
          className={({ isActive }) =>
            ` text-lg tracking-wide hover:tracking-wider transition-all duration-300 text-white hover:text-white  text-center rounded-md   mb-3 py-2 px-2 block ${
              isActive ? "bg-red-500" : "bg-violet-500"
            } `
          }
        >
          Add Category
        </NavLink>

        <li className=" text-lg tracking-wide hover:tracking-wider transition-all duration-300 text-white hover:text-white  text-center rounded-md  bg-violet-500   mb-3 py-2 px-2">
          {" "}
          <NavLink to="/dashboard/addJob">Add Job</NavLink>
        </li>
        <li className=" text-lg tracking-wide hover:tracking-wider transition-all duration-300 text-white hover:text-white  text-center rounded-md bg-violet-500  mb-3 py-2 px-2">
          {" "}
          <NavLink>Bid Request</NavLink>
        </li>
        <li className=" text-lg tracking-wide hover:tracking-wider transition-all duration-300 text-white hover:text-white  text-center rounded-md bg-violet-500  mb-3 py-2 px-2">
          <NavLink>Profile</NavLink>
        </li>
        <li className=" text-lg tracking-wide hover:tracking-wider transition-all duration-300 text-white hover:text-white  text-center rounded-md bg-violet-500  mb-3 py-2 px-2">
          {" "}
          <NavLink>Log Out</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
