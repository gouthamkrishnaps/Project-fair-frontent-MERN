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
export const allProjectAPI = async(searchKey,reqHeader)=>{
    return await commonApi("GET",`${BASE_URL}/project/all-project?search=${searchKey}`,"",reqHeader)
}

//all user project
export const allUserProjectAPI = async(reqHeader)=>{
    return await commonApi("GET",`${BASE_URL}/user/all-project`,"",reqHeader)
}

//edit user project
export const editUserProjectAPI = async(projectId,reqBody,reqHeader)=>{
    //path parameter - :id - router
    return await commonApi("PUT",`${BASE_URL}/project/update/${projectId}`,reqBody,reqHeader)
}

//deleteuserproject
export const deleteUserProjectAPI = async(projectId,reqHeader)=>{
    //path parameter - :id - router
    return await commonApi("DELETE",`${BASE_URL}/project/delete/${projectId}`,{},reqHeader)
}

//edit user profile
export const editUserProfileAPI = async(userId,reqBody,reqHeader)=>{
    //path parameter - :id - router
    return await commonApi("PUT",`${BASE_URL}/user/edit/${userId}`,reqBody,reqHeader)
}
