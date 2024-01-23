import axios from "axios"
import { GET_TACHES } from "../types/Tachetype";

export const gettache = ()=>async(dispatch)=>{

    try {
        const res = await axios.get("/tache");
        dispatch({type:GET_TACHES,payload:res.data})
    } catch (error) {
        console.log(error)
    }

}


export const addtache =(newTache,Navigate)=> async(dispatch)=>{

    const token =localStorage.getItem("token")
    
    const config ={
        headers:{
            authorization:token,
        },
    };
    
    try {

        await axios.post("/tache/addTache",newTache,config);
        
        dispatch(gettache());
        Navigate("/Profile/taches");
    } catch (error) {
        console.log(error)
    }

}
export const deleteTache =(id,Navigate)=>async(dispatch)=>{
    
    
try {
    await  axios.delete(`/tache/${id}`);
    
    dispatch(gettache());
    Navigate("/Profile/taches");

} catch (error) {
    
}
}
export const editTache =(id,updateTache,Navigate)=>async(dispatch)=>{
    
    try {
        await axios.put(`/tache/${id}`,updateTache);
        dispatch(gettache());
        Navigate("/Profile/taches")
    } catch (error) {
        console.log(error);
    }
}