import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ProCards from '../components/ProCards'
import { allProjectAPI } from '../services/allAPI'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Project() {

  const [isToken,setIsToken] = useState(false)
  const [allProject,setAllProject] = useState([])

  const getAllProject = async()=>{
    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")

      const reqHeader = {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }

      const result = await allProjectAPI(searchKey,reqHeader)
      //console.log(result.data);
      setAllProject(result.data)
    }
  }

  const [searchKey,setSearchKey] = useState("")
  console.log(searchKey);

  useEffect(()=>{
    getAllProject()
  },[searchKey])

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setIsToken(true)
    }
  },[])
  return (
    <div>
      <Header />
      <h2 className='text-center mt-5 mb-5'>All Projects</h2>
      <div className='d-flex justify-content-center align-items-center'>
         <div className='d-flex'>
            <input style={{width:'500px'}} type="text" value={searchKey} onChange={(e)=>setSearchKey(e.target.value)} className='form-control mb-5' placeholder='Search projects based on technologies'/>
            
         </div>
      </div>
      <div className='p-5 d-flex gap-5'>
          {allProject?.length>0?
            <Row>
              {allProject.map((item)=>(
                 <Col lg={3} className='mb-5'> <ProCards data={item}/></Col>
              ))}
            </Row>
                :
                 <div>
                   {isToken?
                      <><h6 className='text-danger'>Sorry No Project Currently Available</h6></>:
                      <div style={{width:'100%'}} className='d-flex justify-content-center align-items-center'>
                            <div>
                              <img src="https://i.pinimg.com/originals/89/00/4b/89004be943011dffa76598bd33170660.png" alt="" height={'300px'} width={'100%'}/>
                              <h6 className='text-center mt-5'>Please <Link to={'/login'} style={{textDecoration:'none',color:'blue'}}>Login</Link> to view more project</h6>
                            </div>
                      </div>
                    }
                 </div>

          }
        
      </div>
    </div>
  )
}

export default Project