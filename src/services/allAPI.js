import { BASE_URL } from "./baseUrl"
import { commonApi } from "./commonApi"



//register api
export const registerAPI = async(user)=>{
    return await commonApi("POST",`${BASE_URL}/user/register`,user,"")
}

//login api
export const loginAPI = async(user)=>{
    return await commonApi("POST",`${BASE_URL}/user/login`,user,"")
}

//add project
export const addProjectAPI = async(reqBody,reqHeader)=>{
    return await commonApi("POST",`${BASE_URL}/project/add`,reqBody,reqHeader)
}

//home project
export const homeProjectAPI = async()=>{
    return await commonApi("GET",`${BASE_URL}/project/home-project`)
}

//all project
export const allProjectAPI = async(reqHeader)=>{
    return await commonApi("GET",`${BASE_URL}/project/all-project`,"",reqHeader)
}

//all user project
export const allUserProject = async(reqHeader)=>{
    return await commonApi("GET",`${BASE_URL}/user/all-project`,"",reqHeader)
}