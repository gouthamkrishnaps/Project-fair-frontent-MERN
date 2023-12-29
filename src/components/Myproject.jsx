import React, { useEffect, useState } from 'react'
import Addproject from './Addproject'
import { allUserProjectAPI, deleteUserProjectAPI } from '../services/allAPI'
import EditProject from './EditProject'
import { addProjectResponseContext, editProjectResponseContext } from '../contexts/ContextShare'
import { useContext } from 'react'
import {  ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Myproject() {
    //useContent hook is used to access the context api
    const {addProjectResponse , setAddProjectResponse} = useContext(addProjectResponseContext)
    const {editProjectResponse , setEditProjectResponse} = useContext(editProjectResponseContext)
    const [allUserProject,setAllUserProject] = useState([])

    const getUserProject = async()=>{
        if(sessionStorage.getItem("token")){
            
        const token = sessionStorage.getItem("token")

        const reqHeader ={
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }

        const result = await allUserProjectAPI(reqHeader)
        console.log(result.data);
        setAllUserProject(result.data)
        }
        
    }

    const handleDelete = async(id)=>{
        const token = sessionStorage.getItem("token")
        const reqHeader ={
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
        
        const result = await deleteUserProjectAPI(id,reqHeader)
        toast.error('Project deleted')
        console.log(result);
        if(result.status === 200){
            getUserProject()
        }
        else{
            toast.error(result.response.data)
        }
    }

    useEffect(()=>{
        getUserProject()
    },[addProjectResponse,editProjectResponse])
  return (
    <div className='container-fluid'>
        <div className='border mb-4 border-2 rounded p-2 shadow' >
            <div className='d-flex justify-content-between align-item-center'>
                <h5>My Projects</h5>
                <Addproject/>
            </div>

            {allUserProject?.length>0?
            allUserProject?.map((item)=>(
                <div className='d-flex align-item-center border m-2 rounded'>
                <div><h6 className='p-2'>{item.title}</h6></div>
                <div className='ms-auto d-flex'>
                    <EditProject project={item}/>
                    <a href={item.github} className='btn'><i style={{color:''}} class="fa-brands fa-github"></i></a>
                    <a className='btn' onClick={()=>handleDelete(item._id)}><i style={{color:'red'}} class="fa-solid fa-trash-can"></i></a>
                </div>
                </div>
            )):
            <p className='text-danger fw-bold'>No project added yet !!</p>
            }
            
        </div>
        <ToastContainer position='top-left' theme="colored" closeOnClick draggable/>
    </div>
  )
}

export default Myproject