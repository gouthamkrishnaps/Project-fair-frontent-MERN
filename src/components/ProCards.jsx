import React from 'react'
import Card from 'react-bootstrap/Card';
import cardimg1 from '../images/cardimageone.png'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';
import { BASE_URL } from '../services/baseUrl';

function ProCards({data}) {
    //console.log(data.projectImage);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
        <Card className='projectcard' style={{ width: '20rem' }} onClick={handleShow}>
        <Card.Img variant="top" src={`${BASE_URL}/uploads/${data.projectImage}`} />
        <Card.Body>
            <h4 className='text-center'>{data.title}</h4>
        </Card.Body>
        </Card>
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{data.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <img style={{width:'100%',height:'200px'}} src={`${BASE_URL}/uploads/${data.projectImage}`} alt="" />
            </Col>
            <Col md={6}>
              <h4>Description</h4>
              <p style={{fontSize:'13px'}}>{data.overView}</p>
              <span><span className='fw-bolder'>Technologies</span>: {data.language}</span>
            </Col>
          </Row>
          <div className='d-flex mt-2 mb-2 gap-2'>
            <a className='p-1 rounded' style={{boxShadow:'2px 2px 2px 0px grey'}} href={data.github} target='_blank'><i style={{color:'black'}} className="fa-brands fa-github fa-2x"></i></a>
            <a className='p-1 rounded' style={{boxShadow:'2px 2px 2px 0px grey'}} href={data.website} target='_blank'><i style={{color:'black'}} className="fa-solid fa-link fa-2x"></i></a>
          </div>
        </Modal.Body>
        </Modal>
    </div>
  )
}

export default ProCards