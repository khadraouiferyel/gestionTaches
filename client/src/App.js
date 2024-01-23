import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/Navbares";
import PrivateRoute from "./components/Private/PrivateRoute";

import Profile from "./components/Profile";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AddTache from "./components/Taches/AddTache";

import ListOfTache from "./components/Taches/ListOfTache";
import AddUser from "./components/users/AddUser";
import ListOfUsers from "./components/users/ListOfUsers";
import { getCurrent } from "./Redux/actions/Authaction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrent());
  }, []);
  return (
    <div className="App">
      <NavBar></NavBar>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/signIn" element={<SignIn></SignIn>} />
        <Route path="/signUp" element={<SignUp></SignUp>} />
        <Route
          path="/Profile/"
          element={
            <PrivateRoute>
              <Profile></Profile>
            </PrivateRoute>
          }
        />
        <Route
          path="/Profile/taches"
          element={<ListOfTache></ListOfTache>}
        ></Route>
        <Route path="/Profile/addtache" element={<AddTache></AddTache>} />
        <Route
          path="/Profile/users"
          element={<ListOfUsers></ListOfUsers>}
        ></Route>
        <Route path="/Profile/AddUser" element={<AddUser></AddUser>}></Route>
      </Routes>
    </div>
  );
}

export default App;
