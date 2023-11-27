import React from 'react'
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header({Dashboard}) {
    //const Dashbtn = Dashboard?true:false 
  return (
    <div>
        <Navbar expand="lg" style={{backgroundColor:'#628ECB',color:'white'}}>
        <Container>
            <h2 href="#home" ><Link style={{textDecoration:'none',color:'white'}} to={'/'}><i class="fa-solid fa-users"></i> Project Fair</Link></h2>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav ">
                <Nav className="ms-auto">
                    { Dashboard &&
                        <button className='btn btn-danger border'>Logout <i class="fa-solid fa-right-from-bracket"></i></button>
                    }
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}

export default Header