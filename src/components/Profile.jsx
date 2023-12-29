import React, { useEffect } from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { BASE_URL } from '../services/baseUrl';
import { editUserProfileAPI } from '../services/allAPI';
import {  ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Profile() {
    const [open, setOpen] = useState(false);

    const [isUpdate,setIsUpdate] = useState(false)

    const [userProfile,setUSerProfile] = useState({
        username:"",
        email:"",
        password:"",
        github:"",
        linkedin:"",
        profile:""
    })
    //once an image is uploaded that image will be stored in existing image
    const [existingImage,setExistingImage]=useState("")
    //to hold the url of the new image
    const [preview,setPreview]=useState("")

    useEffect(()=>{
        const user = JSON.parse(sessionStorage.getItem("existingUser"))

        setUSerProfile(
            {...userProfile,
            id:user._id,
            username:user.username,
            email:user.email,
            password:user.password,
            github:user.github,
            linkedin:user.linkedin,
            profile:""}
            )

        setExistingImage(user.profile)
    },[isUpdate])

    useEffect(()=>{
        if(userProfile.profile){
            setPreview(URL.createObjectURL(userProfile.profile))
        }
        else{
            setPreview("")
        }
    },[userProfile.profile])

    const handleProfileUpdate = async()=>{
        const {id,username,email, password, github,linkedin, profile} = userProfile

        if(!github || !linkedin){
            toast.warning('Please fill the form completly')
        }
        else{
            const reqBody = new FormData()
            reqBody.append("username",username)
            reqBody.append("email",email)
            reqBody.append("password",password)
            reqBody.append("github",github)
            reqBody.append("linkedin",linkedin)
            preview?reqBody.append("profile",profile):reqBody.append("profile",existingImage)

            const token = sessionStorage.getItem("token")

            if(preview){
                const reqHeader = {
                    "Content-Type":"multipart/form-data",
                    "Authorization":`Bearer ${token}`
                }
                const result = await editUserProfileAPI(id,reqBody,reqHeader)
                console.log(result);
                if(result.status ===200){
                    toast.success('Profile updated successfully')
                    sessionStorage.setItem("existingUser",JSON.stringify(result.data))
                    setIsUpdate(true)
                }
                else{
                    toast.error(result.response.data)
                }
            }
            else{
                const reqHeader = {
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
                const result = await editUserProfileAPI(id,reqBody,reqHeader)
                console.log(result);
                if(result.status ===200){
                    toast.success('Profile updated successfully')
                    sessionStorage.setItem("existingUser",JSON.stringify(result.data))
                    setIsUpdate(true)
                }
                else{
                    toast.error(result.response.data)
                }
            }
        }
    }

  return (
    <div className='card shadow p-5 mb-5 '>
        <div className='d-flex justify-content-between'>
            <h1>Profile</h1>
            <button onClick={() => setOpen(!open)} className='btn btn-outline-info'><i class="fa-solid fa-angle-down"></i></button>
        </div>
        <Collapse in={open}>
            <div className="row justify-content-center  mt-4">
                <label htmlFor="profile" className='text-center'>
                    <input id="profile" type="file" style={{display:'none'}} onChange={(e)=>setUSerProfile({...userProfile,profile:e.target.files[0]})}/>
                    {existingImage==""?
                        <img width={'180px'} height={'200px'} src={preview?preview:"https://cdn4.vectorstock.com/i/1000x1000/25/68/executive-businessman-profile-isolated-icon-vector-9692568.jpg"} alt="" className='rounded-circle '/>:
                        <img width={'180px'} height={'200px'} src={preview?preview:`${BASE_URL}/uploads/${existingImage}`} alt="" className='rounded-circle '/>
                    }
                </label>

                <div className='mb-3 mt-3' >
                    <input width={'300px'} type="text" value={userProfile.github} onChange={(e)=>setUSerProfile({...userProfile,github:e.target.value})} className='form-control' placeholder='GitHub'/>
                </div>
                <div className='mb-3'>
                    <input type="text" value={userProfile.linkedin} onChange={(e)=>setUSerProfile({...userProfile,linkedin:e.target.value})} className='form-control' placeholder='LinkedIn'/>
                </div>
                <div>
                    <button className='btn btn-success rounded w-100' onClick={handleProfileUpdate}>Update</button>
                </div>
            </div>
        </Collapse>
        <ToastContainer position='top-left' theme="colored" closeOnClick draggable/>
    </div>
  )
}


export default Profile