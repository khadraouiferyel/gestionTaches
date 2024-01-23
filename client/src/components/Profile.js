import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrent } from "../Redux/actions/Authaction";

import image from "./654e6ba239a1eea7b32a5f8f770e95fc.png";

function Profile() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrent());
  }, []);
  return (
    <div>
      <img
        src={image}
        alt="logo"
        style={{ width: "1220px", height: "700px" }}
      />
    </div>
  );
}

export default Profile;
