import React, { createContext, useState } from 'react'

//to create contextapi we use the method - createContext()
export const addProjectResponseContext = createContext()

export const editProjectResponseContext = createContext()

export const isAuthTokenContext = createContext()

function ContextShare({children}) {
    //children is a predifined props used to share data between all components
    //create data that need to be shared
    const [addProjectResponse , setAddProjectResponse] = useState({})

    const [editProjectResponse , setEditProjectResponse] = useState({})

    const [isAuthToken,setIsAuthToken] = useState(false)
  return (
    <>
        <addProjectResponseContext.Provider value={{addProjectResponse , setAddProjectResponse}}>
        <editProjectResponseContext.Provider value={{editProjectResponse , setEditProjectResponse}}> 
        <isAuthTokenContext.Provider value={{isAuthToken,setIsAuthToken}}>
          {children}
        </isAuthTokenContext.Provider>
        </editProjectResponseContext.Provider>
        </addProjectResponseContext.Provider>
    </>
  )
}

export default ContextShare