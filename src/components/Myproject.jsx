import React from 'react'
import Addproject from './Addproject'

function Myproject() {
  return (
    <div className='container-fluid'>
        <div className='border border-2 rounded p-2 shadow' >
            <div className='d-flex justify-content-between align-item-center'>
                <h5>My projects</h5>
                <Addproject/>
            </div>

            <div className='d-flex align-item-center border m-2 rounded'>
                <div><h6 className='p-2'>Project Title</h6></div>
                <div className='ms-auto'>
                    <button className='btn'><i style={{color:'blue'}} class="fa-solid fa-pen-to-square"></i></button>
                    <button className='btn'><i style={{color:''}} class="fa-brands fa-github"></i></button>
                    <button className='btn'><i style={{color:'red'}} class="fa-solid fa-trash-can"></i></button>
                </div>
            </div>
            <p className='text-danger fw-bold'>No project added yet !!</p>
        </div>
    </div>
  )
}

export default Myproject