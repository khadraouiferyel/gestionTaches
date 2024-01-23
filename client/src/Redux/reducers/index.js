import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import TacheReducer from "./TacheReducer";
import CommentReducer from "./CommentReducer";
import UserReducer from "./UserReducer"

const rootReducer=combineReducers({AuthReducer,TacheReducer,CommentReducer,UserReducer});

export default rootReducer;