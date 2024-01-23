import { GET_COMMENTS } from "../types/Commenttype";

const initialState = {
    comments:[],
  
}

const CommentReducer =(state = initialState, { type, payload }) => {
    switch (type) {
    case GET_COMMENTS:
        return{...state,comments:payload.listOfComment}

   

    default:
        return state
    }
}
export default CommentReducer;