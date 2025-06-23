import { commonAPI } from "./commonApi"
import { serverURL } from "./serverUrl"

// add students
export const addStudentAPI =  async (reqBody, reqHeader) =>{
    return await commonAPI('POST', `${serverURL}/add-student`, reqBody, reqHeader)
}

// get students
export const getStudentDataAPI = async()=>{
    return await commonAPI(`GET`, `${serverURL}/get-students`)
}


// update Student
export const updateStudentAPI = async(id, reqBody, reqHeader)=>{
    return await commonAPI("PUT", `${serverURL}/update-student/${id}`, reqBody, reqHeader)
}

// Delete employee by ID
export const deleteStudentAPI = async (id, reqHeader) => {
    return await commonAPI("DELETE", `${serverURL}/delete-students/${id}`,{}, reqHeader);
};


