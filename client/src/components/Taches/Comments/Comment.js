import * as React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteComment,
  updateComment,
} from "../../../Redux/actions/Commentaction";
import { useState } from "react";
import { getCurrent } from "../../../Redux/actions/Authaction";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function Comment({ comment, tacheid }) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [coomment, setComment] = useState(comment.body);
  useEffect(() => {
    dispatch(getCurrent())
  }, [])
  const user = useSelector((state) => state.AuthReducer.user);
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div>
      <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "12px", marginBottom: "16px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
  <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
    <img src={comment.user.pic} alt="User" style={{ borderRadius: "50%", marginRight: "8px", width: "30px", height: "30px" }} />
    <h4 style={{ fontSize: "16px", margin: "0" }}>{comment.user.name}</h4>
  </div>
  <p style={{ fontSize: "16px", margin: "0 0 8px 0" }}>{comment.isModified ? `${comment.body} (Modified)` : comment.body}</p>
  <span style={{ fontSize: "12px", color: "#777" }}>{new Date(comment.date).toLocaleString()}</span>
</div>

      </div>
      {(comment.userId===user._id)&&user || user.role==="admin"?
      <div style={{display:"flex",justifyContent:"space-evenly"}}>
      <IconButton aria-label="delete"
      onClick={() => dispatch(deleteComment(comment._id, tacheid))}
    >
      <DeleteIcon />
    </IconButton>
    <div style={{ marginTop: "10px" }}>
      <Button onClick={handleOpen}>Edit</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="keep-mounted-modal-title"
            variant="h6"
            component="h2"
          >
            Edit Comment
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            <TextField
              id="standard-basic"
              label="comment"
              variant="standard"
              onChange={(e) => setComment(e.target.value)}
              value={coomment}
            />
            <Button
              variant="contained"
              style={{
                width: "200px",
                marginLeft: "90px",
                marginTop: "20px",
              }}
              onClick={() =>
                dispatch(
                  updateComment(comment._id, { body: coomment }, tacheid)
                )
              }
            >
              Edit comment
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
    </div>:null}
  </div>

  );
}

export default Comment;
