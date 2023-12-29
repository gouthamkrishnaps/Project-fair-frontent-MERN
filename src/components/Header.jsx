import React, { useContext } from 'react'
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthTokenContext } from '../contexts/ContextShare';


function Header({Dashboard}) {
    const {isAuthToken,setIsAuthToken} = useContext(isAuthTokenContext)
    //const Dashbtn = Dashboard?true:false 

    const naviagte = useNavigate()

    const handleLogout = ()=>{
        sessionStorage.removeItem("token")
        sessionStorage.removeItem("existingUser")
        setIsAuthToken(false)
        naviagte('/')
    }

 
  return (
    <div>
        <Navbar expand="lg" style={{backgroundColor:'#628ECB',color:'white'}}>
        <Container>
            <h2 href="#home" ><Link style={{textDecoration:'none',color:'white'}} to={'/'}><i class="fa-solid fa-users"></i> Project Fair</Link></h2>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav ">
                <Nav className="ms-auto">
                    { Dashboard &&
                        <button onClick={handleLogout} className='btn btn-danger'>Logout <i class="fa-solid fa-right-from-bracket"></i></button>
                    }
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}

export default Header