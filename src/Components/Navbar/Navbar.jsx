import React, { useEffect, useState } from 'react';
import { MdOutlineMenuOpen } from "react-icons/md";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { logout } from '../../Features/Auth/AuthSlice';
import Swal from 'sweetalert2';
import { useGetCurrentUserQuery, useLogOutApiMutation } from '../../Features/Auth/AuthApi';



const Navbar = () => {
  const {data:currentData,isLoading:currentLoading,isError:currentError,isSuccess:currentSuccess}=useGetCurrentUserQuery()
    const location = useLocation()
    const {auth}=useSelector(state=>state)
    const dispatch = useDispatch()
    const [logOutApi,{data,isLoading,isError,error}]=useLogOutApiMutation()
    
    
    const [open,setOpen]=useState(false)
    const [widthSize,setWidthSize]=useState(null)

const handelLogOut=()=>{
  logOutApi()
  dispatch(logout())
  localStorage.removeItem("refreshToken")
  localStorage.removeItem("currentUser")
}
    useEffect(()=>{
        const handleResize = () => {
            const width = window.innerWidth;
            setWidthSize(width);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    },[])
    
    useEffect(()=>{
        widthSize > 1024 && setOpen(false)
    },[widthSize])

    useEffect(()=>{
        console.log('%csrc\Components\Navbar\Navbar.jsx:42 data', 'color: #007acc;', data);
        if(data?.success){
            Swal.fire({
                position: "center",
                icon: "success",
                title:`${data?.message}`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    },[data])

    return (
    <div className='  fixed z-50 left-0 w-full shadow-md shadow-violet-400/35'>
          <div className='container mx-auto '>
          <div className='bg-white flex justify-between items-center py-2  transition-all duration-300 ease-in-out font-Poppins cursor-pointer'>
           <NavLink to="/"> <h2 className='group'>
  <span className='font-semibold text-3xl tracking-wide  group-hover:tracking-wider transition-all duration-300 text-violet-600 '>
    Jobs
  </span>{" "}
  <span className='group-hover:tracking-wider transition-all duration-300 font-medium text-xl text-violet-500 underline tracking-wide'>Founder</span>
</h2></NavLink>
            {/* laptop and desktop device */}
            <ul className={`lg:flex items-center gap-5 capitalize lg:static md:absolute sm:absolute absolute top-0 ${open ? 'left-0':'left-[-4000px]'} lg:w-fit w-[50%] lg:h-fit h-screen lg:bg-inherit bg-inherit transition-all duration-500 lg:shadow-none shadow-md shadow-violet-800/80  lg:px-0 px-5  lg:pt-0 pt-3 z-50`}>
                <li className={` text-lg tracking-wide hover:tracking-wider transition-all duration-300 ${location?.pathname == "/home" ? "text-gray-500 tracking-wider text-2xl":"text-violet-500"
            }  hover:text-violet-600 lg:pb-0 pb-2`}><NavLink  to="/home">Home</NavLink></li>
              
                <li className={` text-lg tracking-wide hover:tracking-wider transition-all duration-300 ${location?.pathname == "/myPost" ? "text-gray-500 tracking-wider text-2xl":"text-violet-500"
            }  hover:text-violet-600 lg:pb-0 pb-2`}><NavLink to="/myPost">My posted jobs</NavLink></li>
                <li className=' text-lg tracking-wide hover:tracking-wider transition-all duration-300 text-violet-500 hover:text-violet-600 lg:pb-0 pb-2'>My Bids</li>
                <li className=' text-lg tracking-wide hover:tracking-wider transition-all duration-300 text-violet-500 hover:text-violet-600 lg:pb-0 pb-2'>Bid Requests</li>
          <div className=' relative group duration-300 transition-all'>
          <li className={`relative text-lg tracking-wide hover:tracking-wider transition-all duration-300 ${location?.pathname == "/profile" ? "text-gray-500 tracking-wider text-2xl":"text-violet-500"
}  hover:text-violet-600 lg:pb-0 pb-2`}>
  <NavLink to="/profile">Profile</NavLink>
 
</li>
{currentData?.data?.name && <div className='relative'><div className=' absolute -bottom-8 left-0 bg-gray-800 text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-60 hidden group-hover:block duration-300 transition-all w-[200px] z-20'>{currentData?.data?.name}</div>
<div className='absolute w-[30px] h-[10px] bg-red-900 left-3 rounded-t-[500px] -top-1 group-hover:opacity-60 hidden group-hover:block duration-300 transition-all z-30'></div>
</div>}
          </div>
                <li className=' text-lg tracking-wide hover:tracking-wider transition-all duration-300 text-violet-500 hover:text-violet-600 lg:pb-0 pb-2' ><NavLink  to="/dashboard">Dashboard</NavLink></li>
              {auth?.refreshToken ? <>
                
                <li className=' text-lg tracking-wide hover:tracking-wider transition-all duration-300 text-violet-500 hover:text-violet-600 lg:pb-0 pb-2' onClick={handelLogOut} ><NavLink>Log Out</NavLink></li>
              
              </>:  <div className='lg:block flex justify-center items-center lg:pt-0 pt-5'>
                    
                    <NavLink to="/register">
                    <button className=' group border-none outline-none text-lg tracking-wide hover:tracking-wider transition-all duration-300  hover:text-white px-5 py-1 bg-gradient-to-r from-violet-500  to-pink-500 text-white rounded-lg flex justify-center items-center group/arrowOpacity' >Register <span className='group-hover:translate-x-2 transition-all duration-300    group-hover/arrowOpacity:opacity-100 opacity-0'><svg className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg></span></button>
                    </NavLink>
                      </div>}
            </ul>
            {/* mobile icons */}
            <div className={`lg:hidden block ${open ? "transition-all duration-300":"transition-all duration-300"}`} onClick={()=>setOpen(prv=>!prv)}>
                {!open ?  <span><MdOutlineMenuOpen fontSize="38px"/></span>: <span><MdOutlineRestaurantMenu fontSize="38px"/></span> }
               
               
               
            </div>
    
        </div>
      </div>
    </div>

    );
};

export default Navbar;