import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Auth({register}) {
    const registerForm = register?true:false 
  return (
    <>
        <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center'>
            <div>
                <Link to={'/'} style={{color:'black',textDecoration:'none',fontWeight:'bold'}}><i class="fa-solid fa-arrow-left"></i> Back to home</Link>
                <div className="p-5 rounded-4" style={{width:'1200px',backgroundColor:'#628ECB'}}>
                    
                    <Row>
                        <Col>
                            <img className='w-100' src="http://www.pngmart.com/files/7/Web-Design-PNG-Transparent.png" alt="" />
                        </Col>
                        <Col>
                            <div className='d-flex justify-content-center align-items-center'>
                                <div className='w-100'>
                                    <h2 className='text-light text-center'><i class="fa-solid fa-users"></i> Project Fair</h2>
                                    <h6 className='text-light text-center'>
                                        {
                                            registerForm? "Sign up to your Account" : "Sign in to your Account"
                                        }
                                    </h6>
                                    <Form className='w-100 mt-5'>
                                        {
                                            registerForm &&
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Control type="email" placeholder="Username" />
                                            </Form.Group>
                                        }
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Control type="email" placeholder="Email-address" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                        
                                    </Form>
                                    {
                                        registerForm?
                                        <div >
                                        <button className='btn btn-warning'>Register</button>
                                        <p style={{color:'white'}} className='mt-2'>Already a User? Click here to <Link to={'/login'} style={{color:'black',textDecoration:'none'}}>Login</Link></p>
                                        </div>:
                                        <div >
                                        <button className='btn btn-warning'>Login</button>
                                        <p style={{color:'white'}} className='mt-2'>New User? Click here to <Link to={'/register'} style={{color:'black',textDecoration:'none'}}>Register</Link></p>
                                    </div>
                                    }
                                    
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    </>
  )
}

export default Auth