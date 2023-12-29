import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { BASE_URL } from '../services/baseUrl';
import { editUserProjectAPI } from '../services/allAPI';
import { editProjectResponseContext } from '../contexts/ContextShare';
import {  ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function EditProject({project}) {
  const {editProjectResponse , setEditProjectResponse} = useContext(editProjectResponseContext)
    const [show, setShow] = useState(false);
    const [preview,setPreview] = useState("")

    const [projectDetials,setProjectDetials] = useState({
        id:project._id,
        title:project.title,
        projectImage:"",
        language:project.language,
        github:project.github,
        website:project.website,
        overView:project.overView
    })

    useEffect(()=>{  
        if(projectDetials.projectImage){
          setPreview(URL.createObjectURL(projectDetials.projectImage))
        }
      },[projectDetials.projectImage])

    const handleClear = ()=>{
        setProjectDetials({
            title:project.title,
            projectImage:"",
            language:project.language,
            github:project.github,
            website:project.website,
            overView:project.overView
        })
        setPreview("")
    }

    const handleClose = () =>{
       setShow(false);
       handleClear()
      }
    const handleShow = () => setShow(true);

    const handleUpdate = async()=>{
        const {id,title,projectImage,language,github,website,overView} = projectDetials

        if(!title || !language || !github || !website || !overView){
            toast.warning('Please fill the form completely')
        }
        else{
            const reqBody = new FormData()
            reqBody.append("title",title)

            preview?reqBody.append("projectImage",projectImage):reqBody.append("projectImage",project.projectImage)

            reqBody.append("language",language)
            reqBody.append("github",github)
            reqBody.append("website",website)
            reqBody.append("overView",overView)

            const token = sessionStorage.getItem("token")

            if(preview){
                const reqHeader = {
                    "Content-Type":"multipart/form-data",
                    "Authorization":`Bearer ${token}`
                }
                const result = await editUserProjectAPI(id,reqBody,reqHeader)
                console.log(result);

                if(result.status === 200){
                  console.log(result.data);
                  toast.success("Your Project Updated Successfully")
                  handleClose()
                  setEditProjectResponse(result.data)
                }
                else{
                  console.log(result);
                  toast.error(result)
                }

            }
            else{
                const reqHeader = {
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
                const result = await editUserProjectAPI(id,reqBody,reqHeader)
                console.log(result);
                if(result.status === 200){
                  console.log(result.data);
                  toast.success("Your Project Updated Successfully")
                  handleClose()
                  setEditProjectResponse(result.data)
                }
                else{
                  console.log(result);
                  toast.error(result)
                }
            }
        }
    }



    //console.log(project);
  return (
    <>
        <a className='btn' onClick={handleShow}><i style={{color:'blue'}} class="fa-solid fa-pen-to-square"></i></a>

        <Modal show={show} onHide={handleClose} size="lg" backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <h3>PROJECT DETIALS</h3>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={6}>
                <div>
                  <label htmlFor="projectimg" className='text-center'>
                      <input id="projectimg" type="file" style={{display:'none'}} onChange={e=>setProjectDetials({...projectDetials,projectImage:e.target.files[0]})}/>
                      <img width={'100%'}  src={preview?preview:`${BASE_URL}/uploads/${project.projectImage}`} alt="Upload your project screenshot here"/>
                  </label>
                </div>
            </Col>
            <Col sm={6}>
              <Form.Group className="mb-3 mt-4 input-box" controlId="exampleForm.ControlInput2">
                <Form.Control  type="text" placeholder='Project Title' value={projectDetials.title} onChange={(e)=>setProjectDetials({...projectDetials,title:e.target.value})}/>
              </Form.Group>

              <Form.Group className="mb-3 input-box" controlId="exampleForm.ControlInput2">
                <Form.Control  className='w-100' type="text" placeholder='Language Used' value={projectDetials.language} onChange={(e)=>setProjectDetials({...projectDetials,language:e.target.value})}/>
              </Form.Group>

              <Form.Group className="mb-3 input-box" controlId="exampleForm.ControlInput2">
                <Form.Control  type="text" placeholder='Github Link' value={projectDetials.github} onChange={(e)=>setProjectDetials({...projectDetials,github:e.target.value})}/>
              </Form.Group>

              <Form.Group className="mb-3 input-box" controlId="exampleForm.ControlInput2">
                <Form.Control  className='w-100' type="text" placeholder='Website Link' value={projectDetials.website} onChange={(e)=>setProjectDetials({...projectDetials,website:e.target.value})}/>
              </Form.Group>

              <Form.Group className="input-box" controlId="exampleForm.ControlInput2">
                <Form.Control  className='w-100' as="textarea" rows={2} placeholder='Project Over View' value={projectDetials.overView} onChange={(e)=>setProjectDetials({...projectDetials,overView:e.target.value})}/>
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <div className='d-flex w-100 gap-3'>
            <Button variant="danger rounded-pill" style={{width:'100%'}} onClick={handleClear}>Cancel</Button>
            <Button variant="success rounded-pill" style={{width:'100%'}} onClick={handleUpdate}>Update</Button>
          </div>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-left' theme="colored" closeOnClick draggable/>
    </>
  )
}

export default EditProject