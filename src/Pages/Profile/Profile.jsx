import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useChangePasswordMutation, useGetCurrentUserQuery, useUpdateUserInfoMutation, useUploadImgApiMutation } from "../../Features/Auth/AuthApi";
import Swal from "sweetalert2";


const Profile = () => {
    const {data:currentData,isLoading:currentLoading,isError:currentError,isSuccess:currentSuccess}=useGetCurrentUserQuery()
    const [updateUserInfo,{data:userInfoData}]=useUpdateUserInfoMutation()
    const [changePassword,{data:changeData,isError:changeError}]=useChangePasswordMutation()

    const [uploadImgApi,{data,isLoading,isSuccess}]=useUploadImgApiMutation()
    const {email:currentEmail,name:currentName,profileUrl}=currentData?.data || {};
  const [image, setImage] = useState(profileUrl ? profileUrl:null);
  const [name, setName] = useState(currentName );
  const [email, setEmail] = useState(currentEmail );
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [file,setFile]=useState(null)
  const imgRef= useRef()
  const [errorControl,setErrorControl]=useState("")

  const handleImageChange = (e) => {

    const file = e.target.files[0];
    setFile(file)
    setImage(URL.createObjectURL(file));
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOldPasswordChange = (e) => {
    setOldPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handelEditNameEmail= async(e)=>{
    e.preventDefault()
   const userInfo ={
    name:name,
    email:email
   }
    try {
        await updateUserInfo(userInfo)
        
    } catch (error) {
        
    }
  }
  const handelPassword=async(e)=>{
    e.preventDefault()
    const userInfo ={
        oldPassword,
        newPassword
    }
    try {
        await changePassword(userInfo)
        
    } catch (error) {
        
    }
  }

  useEffect(()=>{
    if(userInfoData?.success || changeData?.success){
        Swal.fire({
            position: "center",
            icon: "success",
            title:`${userInfoData?.message || changeData?.message}`,
            showConfirmButton: false,
            timer: 1500
          });
    }
    if(changeData?.error){
        setErrorControl(changeData?.error)
    }
  },[userInfoData,changeData,changeError])

  const handelUploadImg =async ()=>{

  try {
      if(file){
          const formData = new FormData()
          formData.append("profile",file)
          await uploadImgApi(formData)
      
      }
  } catch (error) {
    
  }
 
  }
  useEffect(()=>{
    setImage(currentData?.data?.profileUrl)
    setName(currentData?.data?.name)
    setEmail(currentData?.data?.email)
  },[currentData?.data])

  return (
    <>{currentLoading? <div className="pt-[100px]">Loading....</div>:!currentLoading && currentSuccess && (<div className="flex justify-center pt-[60px] ">
    <div className="w-[700px] mt-8 p-8 bg-gray-200 rounded-lg ">
      <h2 className="text-center py-3 font-Poppins text-lg font-semibold">{currentName ? currentName:""}</h2>
      <div className="w-32 h-32 rounded-full mx-auto mb-4 relative group " >
      {image ? (
       <div  className="flex justify-center flex-col items-center"> <img
        
       src={image}
       alt="Profile"
       
       className="w-32 h-32 rounded-full mx-auto mb-4"
     />
       {file && <button disabled={isLoading} onClick={handelUploadImg} className="bg-blue-500 text-white px-4 py-2 rounded-md border-none outline-none">
       {isLoading ? "Loading..":" Upload"}
      </button>}</div>
      ) : (
        <div><img  src="" className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4"/>
      
        </div>
      )}
      <IoCloudUploadOutline onClick={()=>imgRef.current.click()}  className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:text-2xl duration-300 transition-all text-white  cursor-pointer "/>
      </div>
      <input
      ref={imgRef}
        type="file"
        accept="image/*"
        className=" mx-auto mb-4 hidden"
        onChange={handleImageChange}
      />
<div className="flex  justify-between items-start gap-5">
<form onSubmit={handelEditNameEmail} className="w-full">
<div className="mb-4">
        <label className="block mb-1">Name</label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md border-none outline-none"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md border-none outline-none"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md border-none outline-none">
        Save Changes
      </button>
</form>
  <form className="w-full" onSubmit={handelPassword}>
          <div className="mb-4">
        <label className="block mb-1">Change Password</label>
        <input
          type="password"
          placeholder="Old Password"
          value={oldPassword}
          onChange={handleOldPasswordChange}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md border-none outline-none mb-2"
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={handleNewPasswordChange}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md border-none outline-none"
        />
      </div>
      <p className="py-2 text-red-500 font-Poppins font-medium">{errorControl && errorControl}</p>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md border-none outline-none">
        Save Changes
      </button>
  </form>
</div>
    </div>
  </div>)}</>
  );
};

export default Profile;
