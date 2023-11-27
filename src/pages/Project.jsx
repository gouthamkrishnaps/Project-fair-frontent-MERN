import React from 'react'
import Header from '../components/Header'
import ProCards from '../components/ProCards'

function Project() {
  return (
    <div>
      <Header />
      <h2 className='text-center mt-5 mb-5'>All Projects</h2>
      <div className='d-flex justify-content-center align-items-center'>
         <div className='d-flex'>
            <input style={{width:'500px'}} type="text" className='form-control mb-5' placeholder='Search projects based on technologies'/>
            
         </div>
      </div>
      <div className='p-5 d-flex gap-5'>
        <ProCards/>
        <ProCards/>
        <ProCards/>
        <ProCards/>
      </div>
    </div>
  )
}

export default Project