import React, { useContext, useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI, registerAPI } from '../services/allAPI';
import {  ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isAuthTokenContext } from '../contexts/ContextShare';

function Auth({register}) {
    const {isAuthToken,setIsAuthToken} = useContext(isAuthTokenContext)
    //to hold the value from input box
    const [userData,setUserData] = useState({
        username:"",
        email:"",
        password:""
    })
    console.log(userData);
    const registerForm = register?true:false 

    const navigate = useNavigate()

    //register
    const handleRegister = async(e)=>{
        e.preventDefault()
        const {username,email,password} = userData
        if(!username || !email || !password){
            toast.info('Please fill the form completely')
        }
        else{
            const result = await registerAPI(userData)
            console.log(result);
            if(result.status === 200){
                toast.success(`${result.data.username} is successfully registered`)
                setUserData({
                    username:"",
                    email:"",
                    password:""
                })
                //move to login

                navigate('/login')
            }
            else{
                toast.error(result.response.data)
            }
        }
    }
    const handleLogin = async(e)=>{
        e.preventDefault()
        const {email,password} = userData
        if(!email || !password){
            toast.info('Please fill the form completely')
        }
        else{
            const result = await loginAPI(userData)
            console.log(result);
            if(result.status === 200){
                toast.success('Login successfull')

                sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
                sessionStorage.setItem("token",result.data.token)
                setUserData({
                    email:"",
                    password:""
                })
                setIsAuthToken(true)
                //navigate to home after login
                setTimeout(()=>{
                    navigate('/')
                },2000)
               
            }
            else{
                toast.error(result.response.data)
            }
        }
    }
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
                                                <Form.Control type="email" placeholder="Username" value={userData.username} onChange={(e)=>setUserData({...userData,username:e.target.value})}/>
                                            </Form.Group>
                                        }
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Control type="email" placeholder="Email-address" value={userData.email} onChange={(e)=>setUserData({...userData,email:e.target.value})} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Control type="password" placeholder="Password" value={userData.password} onChange={(e)=>setUserData({...userData,password:e.target.value})} />
                                        </Form.Group>
                                        

                                    {
                                        registerForm?
                                        <div >
                                        <button onClick={handleRegister} className='btn btn-warning'>Register</button>
                                        <p style={{color:'white'}} className='mt-2'>Already a User? Click here to <Link to={'/login'} style={{color:'black',textDecoration:'none'}}>Login</Link></p>
                                        </div>:
                                        <div >
                                        <button onClick={handleLogin} className='btn btn-warning'>Login</button>
                                        <p style={{color:'white'}} className='mt-2'>New User? Click here to <Link to={'/register'} style={{color:'black',textDecoration:'none'}}>Register</Link></p>
                                    </div>
                                    }
                            </Form>
                                     <ToastContainer position='top-left' theme="colored" closeOnClick draggable/>
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