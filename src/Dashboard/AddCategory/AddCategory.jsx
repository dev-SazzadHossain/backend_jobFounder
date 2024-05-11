import React, { useEffect, useState } from 'react';
import { useCategoryApiMutation } from '../../Features/Category/CategoryApi';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const categoryList =[
    {name:"Web Design"},{name:"Web Development"},{name:"React Developer"},{name:"FrontEnd Developer"},{name:"Mern Stack Developer"}
]

const AddCategory = () => {
    const [categoryName,setCategoryName]=useState("")
    const [categoryApi,{data,isLoading,isError,error}]=useCategoryApiMutation()
    const navigate = useNavigate()

const handelCategory = e=>{
    e.preventDefault()
    if(!Boolean(categoryName)){
        Swal.fire("Choose Category")
        return 
    }else{
        categoryApi({
            categoryName
        })
    }
  

}

useEffect(()=>{
    if(data?.success){
        Swal.fire({
            position: "center",
            icon: "success",
            title:`${data?.message}`,
            showConfirmButton: false,
            timer: 1500
          });
          navigate("/")
    }
    if(data?.error){
        Swal.fire({
            position: "center",
            icon: "success",
            title:`${data?.error} You Can Post Jobs`,
            showConfirmButton: false,
            timer: 1500
          });
    }
},[data])
    
    
    return (
        <div className='w-full h-screen px-5  flex flex-col items-center justify-center'>

            <form  onSubmit={handelCategory} className=' lg:w-[600px] md:w-full w-full shadow-md p-10 '>
               <div className='flex  items-center gap-5'>
               <label htmlFor="category" className='font-Poppins text-md font-semibold'> Category Name :</label>
               <select  onChange={(e)=>setCategoryName(e.target.value)} name='categoryName' className='outline-none border-none shadow-sm px-3 py-2 shadow-violet-400/90 lg:w-[300px] md:w-[300px] sm:w-full w-full'>
                {categoryName == "" && <option value="Choose Category">Choose Category</option>}
                {categoryList?.map(category => <option value={category?.name}>{category?.name}</option>)}
               
               </select>
               </div>
               <div className='pt-5'>
                <button disabled={isLoading} type='submit' className=' bg-gradient-to-r from-violet-500 to-pink-600 text-white py-2 px-5 rounded-md'>{isLoading ? "Loading":"Add Category"}</button>
               </div>
            </form>

        </div>
    );
};

export default AddCategory;