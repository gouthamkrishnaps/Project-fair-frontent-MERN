import React, { useEffect } from 'react'
import { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addProjectAPI } from '../services/allAPI';

function Addproject() {
  const [show, setShow] = useState(false);

  //to hold url of the image
  const [preview,setPreview] = useState("")
  const handleClear = ()=>{
    setProjectDetials({
      title:"",
      projectImage:"",
      language:"",
      github:"",
      website:"",
      overView:""
    })
    setPreview("")
  }
  const handleClose = () => {
    setShow(false);
    handleClear()
  }
  const handleShow = () => setShow(true);



  const [projectDetials,setProjectDetials] = useState({
    title:"",
    projectImage:"",
    language:"",
    github:"",
    website:"",
    overView:""
  })
  
  console.log(projectDetials);

  const [token,setToken] = useState("")

  useEffect(()=>{  
    if(projectDetials.projectImage){
      //javascript predifined method - url -createobjecturl - file will be converted to url
      setPreview(URL.createObjectURL(projectDetials.projectImage))
    }
  },[projectDetials.projectImage])

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))
    }
    else{
      setToken("")
    }
    
  },[])
  console.log(token);

  const handleAdd = async(e)=>{
    e.preventDefault()

    const{title,projectImage,language,github,website,overView} = projectDetials

    if(!title || !projectImage || !language || !github || !website || !overView){
      alert('Please fill the form completely')
    }
    else{
      //reqBody
      //if there is any uploading content in system we should send the body in the form of formdata
      //create object for the class formdata
      const reqBody = new FormData()
      //2) add value to the formdata - append()
      reqBody.append("title",title)
      reqBody.append("projectImage",projectImage)
      reqBody.append("language",language)
      reqBody.append("github",github)
      reqBody.append("website",website)
      reqBody.append("overView",overView)
    if(token){
      const reqHeader = {
        "Content-Type":"multipart/form-data",
        "Authorization":`Bearer ${token}`
      }
      
      const result = await addProjectAPI(reqBody,reqHeader)
      //console.log(result);
      if(result.status===200){
        alert('Project Successfully Added')
        handleClose()
      }
      else{
        console.log(result);
        alert(result.response.data)
      }
    }
  }
  }

  return (
    <>
        <Button onClick={handleShow} className='btn btn-success'>Add project</Button>
        <Modal show={show} onHide={handleClose} size="lg" backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <h3>PROJECT DETIALS</h3>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={6}>
                <div>
                  <label htmlFor="projectimg" className='text-center'>
                      <input id="projectimg" type="file" style={{display:'none'}} onChange={(e)=>setProjectDetials({...projectDetials,projectImage:e.target.files[0]})}/>
                      <img width={'100%'}  src={preview?preview:"http://www.clipartbest.com/cliparts/yik/6KL/yik6KLopT.png"}  alt="Upload your project screenshot here"/>
                  </label>
                </div>
            </Col>
            <Col sm={6}>
              <Form.Group className="mb-3 mt-4 input-box" controlId="exampleForm.ControlInput2">
                <Form.Control value={projectDetials.title} onChange={(e)=>setProjectDetials({...projectDetials,title:e.target.value})} className='w-100' type="text" placeholder='Project Title'/>
              </Form.Group>

              <Form.Group className="mb-3 input-box" controlId="exampleForm.ControlInput2">
                <Form.Control value={projectDetials.language} onChange={(e)=>setProjectDetials({...projectDetials,language:e.target.value})} className='w-100' type="text" placeholder='Language Used'/>
              </Form.Group>

              <Form.Group className="mb-3 input-box" controlId="exampleForm.ControlInput2">
                <Form.Control value={projectDetials.github} onChange={(e)=>setProjectDetials({...projectDetials,github:e.target.value})} className='w-100' type="text" placeholder='Github Link'/>
              </Form.Group>

              <Form.Group className="mb-3 input-box" controlId="exampleForm.ControlInput2">
                <Form.Control value={projectDetials.website} onChange={(e)=>setProjectDetials({...projectDetials,website:e.target.value})} className='w-100' type="text" placeholder='Website Link'/>
              </Form.Group>

              <Form.Group className="input-box" controlId="exampleForm.ControlInput2">
                <Form.Control value={projectDetials.overView} onChange={(e)=>setProjectDetials({...projectDetials,overView:e.target.value})} className='w-100' as="textarea" rows={2} placeholder='Project Over View'/>
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <div className='d-flex w-100 gap-3'>
            <Button variant="danger rounded-pill" style={{width:'100%'}} onClick={handleClear}>Cancel</Button>
            <Button variant="success rounded-pill" style={{width:'100%'}} onClick={handleAdd}>Add</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Addproject