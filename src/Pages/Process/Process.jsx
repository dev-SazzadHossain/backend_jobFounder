import React from 'react';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import img from "../../assets/w1-hover.webp"


const Process = () => {
    return (
        <>
        <div className=' grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-5 cursor-pointer'>
            {[...Array(4)].map(item=>(<div className='w-full' >
        <div className=' flex  justify-between  items-center w-full group transition-all duration-300'>
            <div className=' border-dashed border p-3 border-violet-400 rounded-md hover:bg-violet-500 transition-all duration-300'>
            <img  className='w-14 h-14 bg-blue-200 bg-contain p-3 rounded-md' src={img} alt="" />
            </div>
             <div>
<HiOutlineArrowNarrowRight  fontSize="46px" color='blue' className=' opacity-20 -translate-x-20 transition-all duration-300  group-hover:opacity-100 group-hover:translate-x-0'/>
             </div>
            
         </div>
        <div className='py-4'>
        <h3 className='py-2 font-Poppins text-xl tracking-wide'>Create an Account</h3>
         <p className=' leading-5'>It is long established fact reader distracted readable content</p>
        </div>
         
        
         
     </div>))}
        </div>
        </>
        
    );
};

export default Process;