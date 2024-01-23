import axios from "axios";
import { GET_COMMENTS } from "../types/Commenttype";

export const getComment = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/comment/${id}/comments`);
    // console.log(res);
    dispatch({ type: GET_COMMENTS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
export const addComment = (newComment, id) => async (dispatch) => {
  var token = localStorage.getItem("token");

  const config = {
    headers: {
      authorization: token,
    },
  };
  try {
    await axios.post(`/comment/${id}/addComment`, newComment, config);
    dispatch(getComment(id));
  } catch (error) {
    console.log(error);
  }
};
export const deleteComment = (id, tacheid) => async (dispatch) => {
  var token = localStorage.getItem("token");

  const config = {
    headers: {
      authorization: token,
    },
  };
  try {
    await axios.delete(`/comment/${id}`, config);
    dispatch(getComment(tacheid));
  } catch (error) {
    console.log(error);
  }
};
export const updateComment =
  (id, updateComment, tacheid) => async (dispatch) => {
    var token = localStorage.getItem("token");

    const config = {
      headers: {
        authorization: token,
      },
    };
    try {
      await axios.put(`/comment/${id}`, updateComment, config);
      dispatch(getComment(tacheid));
    } catch (error) {
      console.log(error);
    }
  };
