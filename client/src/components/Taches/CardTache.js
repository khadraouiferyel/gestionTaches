import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTache, editTache } from "../../Redux/actions/Tacheaction";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SendIcon from "@mui/icons-material/Send";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import Box from "@mui/material/Box";
import ListOfComment from "./Comments/ListOfComment";
import { addComment, getComment } from "../../Redux/actions/Commentaction";
import { getCurrent } from "../../Redux/actions/Authaction";
import { Stack } from "@mui/material";
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

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function CardTache({ Tache }) {
  console.log(Tache._id);
  
  
  const [expanded, setExpanded] = React.useState(false);
  const [like, setLike] = useState(false);
  const toggle = () => {
    setLike(!like);
  };
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [titre, setTitre] = useState(Tache.titre);
  const [description, setDesc] = useState(Tache.description);
  const [date_fin, setdate] = useState(Tache.date_fin);
  const [prop, setProp] = useState(Tache.prop);
  const [priori, setPriori] = useState(Tache.priori);
  const [etat, setEtat] = useState(Tache.etat);
  const [piece_joint, setPiece] = useState(Tache.piece_joint);
  const [body, setBody] = useState("");
  useEffect(() => {
    dispatch(getCurrent());
  }, [dispatch]);
  const user = useSelector((state) => state.AuthReducer.user);
  console.log(user.name);

  const [affiche, setAffiche] = useState(false);
  return (
    <Card
      sx={{ maxWidth: 345 }}
      style={{
        marginTop: "20px",
        marginLeft: "10px",
        boxShadow: "12px 12px 12px 12px rgba(56, 56, 56, 0.08)",
      }}
    >
      
        <CardHeader
          avatar={
            <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src={Tache.user.pic} />
            </Stack>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={
            <div>
              <div>{Tache.user.name}</div>
              <div style={{ fontSize: '1.5em' }}>{Tache.titre}</div>
            </div>
          }
          subheader={Tache.date_fin ? new Date(Tache.date_fin).toLocaleDateString() : null}
        />
      
      <CardMedia
        component="img"
        height="194"
        image={Tache.piece_joint}
        alt="image of task"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {Tache.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {like ? (
          <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton
            aria-label="add to favorites"
            onClick={() => toggle()}
            style={{ color: "red" }}
          >
            <FavoriteIcon />
          </IconButton>
          <div>{user.name}</div>
          </div>
        ) : (
          <IconButton aria-label="add to favorites" onClick={() => toggle()}>
            <FavoriteIcon />
          </IconButton>
        )}

        {((Tache.userId ===  user._id)&& user) ||
        (user && user.role === "admin") ? (
          <div style={{ display: "flex" }}>
            <IconButton
              aria-label="delete"
              onClick={() => dispatch(deleteTache(Tache._id, Navigate))}
            >
              <DeleteIcon />
            </IconButton>
            <div>
              <Button onClick={handleOpen} >Edit</Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    style={{ textAlign: "center" }}
                  >
                    Edit Task
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    sx={{ mt: 2 }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      margin: "10px",
                    }}
                  >
                    <TextField
                      id="standard-basic"
                      label="titre"
                      variant="standard"
                      onChange={(e) => setTitre(e.target.value)}
                      value={titre}
                    />
                    <TextField
                      id="standard-basic"
                      label="description"
                      variant="standard"
                      onChange={(e) => setDesc(e.target.value)}
                      value={description}
                    />
                    <TextField
                      id="standard-basic"
                      label="date_fin"
                      variant="standard"
                      onChange={(e) => setdate(e.target.value)}
                      value={new Date(date_fin).toLocaleString()}
                    />
                    <TextField
                      id="standard-basic"
                      label="propriété"
                      variant="standard"
                      onChange={(e) => setProp(e.target.value)}
                      value={prop}
                    />
                    <TextField
                      id="standard-basic"
                      label="priorité"
                      variant="standard"
                      onChange={(e) => setPriori(e.target.value)}
                      value={priori}
                    />
                    <TextField
                      id="standard-basic"
                      label="état"
                      variant="standard"
                      onChange={(e) => setEtat(e.target.value)}
                      value={etat}
                    />
                    <TextField
                      id="standard-basic"
                      label="piece_joint"
                      variant="standard"
                      onChange={(e) => setPiece(e.target.value)}
                      value={piece_joint}
                    />
                    <Button
                      variant="contained"
                      style={{
                        width: "200px",
                        marginLeft: "90px",
                        marginTop: "20px",
                        backgroundColor:"#001f3f",
                        color:"white"
                      }}
                      onClick={() =>
                        dispatch(
                          editTache(
                            Tache._id,
                            {
                              titre,
                              description,
                              date_fin: new Date(date_fin).toLocaleString(),
                              prop,
                              priori,
                              etat,
                              piece_joint,
                            },
                            Navigate
                          )
                        )
                      }
                    >
                      Edit Task
                    </Button>
                  </Typography>
                </Box>
              </Modal>
            </div>
          </div>
        ) : null}

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Details:</Typography>
          <Typography paragraph>
            <h4>propriété:</h4>
            {Tache.prop}
          </Typography>
          <Typography paragraph>
            <h4>priorité:</h4>
            {Tache.priori}
          </Typography>
          <Typography paragraph>
            <h4>Etat:</h4> {Tache.etat}
          </Typography>
          <Typography paragraph>
            <ListOfComment></ListOfComment>
          </Typography>
        </CardContent>
      </Collapse>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          marginBottom: "10px",
          justifyContent: "space-evenly",
        }}
      >
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          id="input-with-sx"
          label="comment"
          variant="standard"
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
        <Button
          style={{backgroundColor:"#001f3f"}}
          variant="contained"
          endIcon={<SendIcon />}
          onClick={() => {
            dispatch(addComment({ body }, Tache._id));

            setBody("");
          }}
        >
          Send
        </Button>
      </Box>
      <Button
      
        onClick={() => {
          dispatch(getComment(Tache._id));
          setAffiche(!affiche);
        }}
      >
        {!affiche ? "show comments" : "hide comments"}
      </Button>
      {affiche && <ListOfComment tacheid={Tache._id}></ListOfComment>}
    </Card>
  );
}
export default CardTache;
