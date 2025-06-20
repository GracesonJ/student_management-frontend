import { commonAPI } from "./commonApi"
import { serverURL } from "./serverUrl"

// add Project
export const addStudentAPI =  async (reqBody, reqHeader) =>{
    return await commonAPI('POST', `${serverURL}/add-student`, reqBody, reqHeader)
}

// get home Project
export const getStudentDataAPI = async()=>{
    return await commonAPI(`GET`, `${serverURL}/get-students`)
}


// // update Student
// export const updateStudentAPI = async(reqBody)=>{
//     return await commonAPI("PUT", `${serverURL}/update-student`, reqBody)
// }