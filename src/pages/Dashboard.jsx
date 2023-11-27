import React from 'react'
import Header from '../components/Header'
import Myproject from '../components/Myproject'
import { Col, Row } from 'react-bootstrap'
import Profile from '../components/Profile'

function Dashboard() {
  return (
    <div>
      <Header Dashboard/>
      <div className=' container-fluid'>
        <h3>Welcome <span className='text-warning'>User</span></h3>
        <Row>
          <Col sm={12} md={8}>
            <Myproject/>
          </Col>
          <Col sm={12} md={4}>
            <Profile/>
          </Col>
        </Row>
        
      </div>
    </div>
  )
}

export default Dashboard