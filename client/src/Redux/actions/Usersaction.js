import axios from "axios"

import { GET_USERS } from "../types/Usertype";



export const getUser =()=>async(dispatch)=>{
    try {
        const res = await axios.get("/user/users");
        dispatch({type:GET_USERS,payload:res.data})
    } catch (error) {
        console.log(error);
    }
}

export const deleteUser =(id,Navigate)=>async(dispatch)=>{
    try {
        await axios.delete(`/user/${id}`);
        dispatch(getUser)
        Navigate("/Profile/users")
    } catch (error) {
        console.log(error)
    }
}
export const addUser=(newUser,Navigate)=>async(dispatch)=>{
    try {
        await axios.post("/user/addUser",newUser);
        dispatch(getUser);
        Navigate("/Profile/users");
    } catch (error) {
        console.log(error)
    }
}
