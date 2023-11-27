import React from 'react'
import Card from 'react-bootstrap/Card';
import cardimg1 from '../images/cardimageone.png'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';

function ProCards() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
        <Card className='projectcard' style={{ width: '20rem' }} onClick={handleShow}>
        <Card.Img variant="top" src={cardimg1} />
        <Card.Body>
            <h4 className='text-center'>Media Player</h4>
        </Card.Body>
        </Card>
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Media Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <img style={{width:'100%',height:'200px'}} src={cardimg1} alt="" />
            </Col>
            <Col md={6}>
              <h4>Description</h4>
              <p style={{fontSize:'13px'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam blanditiis libero accusantium pariatur quasi neque quia soluta rerum, amet fugit nobis distinctio voluptatem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, at accusantium sequi ea temporibus omnis minima. Mollitia at explicabo inventore provident dicta quod nobis dolore.</p>
              <span><span className='fw-bolder'>Technologies</span>: HTML , CSS , REACT</span>
            </Col>
          </Row>
          <div className='d-flex mt-2 mb-2 gap-2'>
            <a className='p-1 rounded' style={{boxShadow:'2px 2px 2px 0px grey'}} href="https://github.com/gouthamkrishnaps/Media-player-Frontend" target='_blank'><i style={{color:'black'}} class="fa-brands fa-github fa-2x"></i></a>
            <a className='p-1 rounded' style={{boxShadow:'2px 2px 2px 0px grey'}} href="https://mediaplayer-frontend.vercel.app/" target='_blank'><i style={{color:'black'}}class="fa-solid fa-link fa-2x"></i></a>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ProCards