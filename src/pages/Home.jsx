import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ProCards from '../components/ProCards'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    {/* section one */}
    <div className='' style={{width:'100%',height:'100vh',backgroundColor:'#628ECB'}}>{/* #62b8ecb */}
        <div className="container-fluid rounded">
            <Row>
                <Col sm={12} lg={6} className=''  style={{marginTop:'300px'}}>
                    <h1 style={{fontSize:'100px'}} className='text-light'>Projects Fair</h1>
                    <p className='w-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nobis recusandae ullam placeat</p>
                    <button  className='btn btn-dark'><Link style={{textDecoration:'none',color:'white'}} to={'/login'}>Get Started <i class="fa-solid fa-arrow-right"></i></Link></button>
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
            <ProCards/>
            <ProCards/>
            <ProCards/>
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