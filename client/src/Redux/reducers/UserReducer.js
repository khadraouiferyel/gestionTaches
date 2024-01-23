import { GET_USERS } from "../types/Usertype";

const initialState = {
  users:[],
}

const UserReducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case GET_USERS:
        return{...state,users:payload.listOfUsers}

    default:
        return state
    }
}
export default UserReducer;