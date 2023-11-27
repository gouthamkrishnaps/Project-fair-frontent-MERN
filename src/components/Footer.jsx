import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='p-5 text-light' style={{backgroundColor:'black'}}>
        <div className='container mt-3'>
            <Row className='footer-row d-flex justify-content-between align-items-center gap-2'>
                <Col>
                    <h6><i class="fa-solid fa-users"></i> PROJECT FAIR</h6>
                    <span style={{textAlign:'justify'}}>Lorem ipsum dolor sit adipisicing elit. Facere eligendi cupiditate doloremque accusantium deleniti dolores fugiat</span>
                </Col>
                <Col className='d-flex flex-column'>
                    <h6>PRODUCTS</h6>
                    <span><Link style={{textDecoration:'none',color:'grey'}} to={''}>Angular</Link></span>
                    <span><Link style={{textDecoration:'none',color:'grey'}} to={''}>React</Link></span>
                    <span><Link style={{textDecoration:'none',color:'grey'}} to={''}>Vue</Link></span>
                    <span><Link style={{textDecoration:'none',color:'grey'}} to={''}>Larvel</Link></span>
                </Col>
                <Col className='d-flex flex-column'>
                    <h6>USEFUL LINKS</h6>
                    <span>Pricing</span>
                    <span>Settings</span>
                    <span>Orders</span>
                    <span>Help</span>
                </Col>
                <Col className='d-flex flex-column'>
                    <h6>CONTACT</h6>
                    <span><i class="fa-solid fa-location-dot"></i> New York ,NV 10013 ,us</span>
                    <span><i class="fa-solid fa-envelope"></i> projectfair@gmail.com</span>
                    <span><i class="fa-solid fa-phone"></i> +01 2378932</span>
                    <span><i class="fa-solid fa-phone"></i> +01 2348459</span>
                </Col>
            </Row>
            <div className='footer-row pt-5 text-center'><span>Copyright ©️ 2023 Project-Fair. Built with react</span></div>
        </div>
    </div>
  )
}

export default Footer