import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComment } from "../../../Redux/actions/Commentaction";
import Comment from "./Comment";
function ListOfComment({ tacheid }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getComment(tacheid));
  }, []);

  const comments = useSelector((state) => state.CommentReducer.comments);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        {comments
          .filter((el) => el.tacheId._id == tacheid)
          .map((comment) => (
            <Comment comment={comment} key={comment._id} tacheid={tacheid} />
          ))}
      </div>
    </div>
  );
}

export default ListOfComment;
