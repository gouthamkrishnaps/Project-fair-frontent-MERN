import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import ProCards from '../components/ProCards'
import { Link } from 'react-router-dom'
import { homeProjectAPI } from '../services/allAPI'

function Home() {
    const [isLogin,setIsLogin] = useState(false)

    const [homeProject,setHomeProject] = useState([])

    const getHomeProject = async()=>{
        const result = await homeProjectAPI()
        console.log(result.data);
        setHomeProject(result.data)
        
    }
    console.log(homeProject);

    useEffect(()=>{
        if(sessionStorage.getItem('token')){
            setIsLogin(sessionStorage.getItem('token'))
        }
        else{
            setIsLogin("")
        }
    },[])
    console.log(isLogin);

    useEffect(()=>{
        getHomeProject()
    },[])
  return (
    <>
    {/* section one */}
    <div className='' style={{width:'100%',height:'100vh',backgroundColor:'#628ECB'}}>{/* #62b8ecb */}
        <div className="container-fluid rounded">
            <Row>
                <Col sm={12} lg={6} className=''  style={{marginTop:'300px'}}>
                    <h1 style={{fontSize:'100px'}} className='text-light'>Projects Fair</h1>
                    <p className='w-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nobis recusandae ullam placeat</p>
                    {isLogin?
                        <button  className='btn btn-dark'><Link style={{textDecoration:'none',color:'white'}} to={'/dashboard'}>Manage Project <i class="fa-solid fa-arrow-right"></i></Link></button>:
                        <button  className='btn btn-dark'><Link style={{textDecoration:'none',color:'white'}} to={'/login'}>Get Started <i class="fa-solid fa-arrow-right"></i></Link></button>
                    }
                </Col>
                <Col sm={12} lg={6} className='d-flex justify-content-center align-items-center' style={{marginTop:'180px'}}>
                    <img className='w-100' src="http://www.pngmart.com/files/11/Technology-Transparent-Background.png" alt="" />
                </Col>
            </Row>
        </div>
    </div>

    {/* section two */}
    <div style={{width:'100%'}} className='mt-5 mb-5'>
        <h1 className='mt-5 mb-5 text-center'>Explore Our Projects</h1>
       {/*  <marquee scrollAmount={20}> */}
            <div className="d-flex justify-content-center align-items-center gap-5">
            {homeProject?.length>0?
            homeProject.map((item)=>(
                <ProCards data={item}/>
            ))
                :null
            }
            </div>
        {/* </marquee> */}
        <div>
            <h6 className='text-center mt-5 mb-5'><Link style={{textDecoration:'none'}} to={'/project'}>See more projects</Link></h6>
        </div>
        
    </div>
    </>
  )
}

export default Home