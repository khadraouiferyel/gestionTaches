import { GET_TACHES } from "../types/Tachetype"


const initialState ={
    Taches:[],
    Tache:{}

}

const TacheReducer = (state=initialState,action)=>{
    switch (action.type) {
        case GET_TACHES: return {...state,Taches:action.payload.listOfTaches}
        
            
    
        default:
            return state
    }
}
export default TacheReducer;