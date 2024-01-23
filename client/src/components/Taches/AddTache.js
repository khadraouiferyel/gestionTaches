import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import{useState} from 'react'
import { useDispatch } from 'react-redux';
import { addtache } from '../../Redux/actions/Tacheaction';
import { useNavigate } from 'react-router-dom';

function AddTache() {
  const dispatch =useDispatch();
  const Navigate=useNavigate();
  const [titre,setTitre]=useState("");
  const [description,setDesc]=useState("");
  const [date_fin,setdate]=useState("");
  const [prop,setProp]=useState("");
  const [priori,setPriori]=useState("");
  const [etat,setEtat]=useState("");
  const [piece_joint,setPiece]=useState("");
    return (
       
             <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      style={{display:"flex",flexDirection:"column",marginTop:"50px",padding:"30px",boxShadow: "12px 12px 12px 12px rgba(159, 73, 110, 0.08)",width:"300px",marginLeft:"480px"}}
    >
      <TextField id="standard-basic" label="titre" variant="standard" onChange={(e)=>setTitre(e.target.value)} value={titre} />
      <TextField id="standard-basic" label="description" variant="standard" onChange={(e)=>setDesc(e.target.value)} value={description} />
      <TextField id="standard-basic"
        label="date_fin"
        variant="standard"
        type="date"
        InputLabelProps={{ shrink: true }}
        onChange={(e) => setdate(e.target.value)}
        value={date_fin}
        placeholder=" " />
      <TextField id="standard-basic" label="propriété" variant="standard" onChange={(e)=>setProp(e.target.value)} value={prop} />
      <TextField id="standard-basic" label="priorité" variant="standard" onChange={(e)=>setPriori(e.target.value)} value={priori} />
      <TextField id="standard-basic" label="état" variant="standard" onChange={(e)=>setEtat(e.target.value)} value={etat} />
      <TextField id="standard-basic" label="piece_joint" variant="standard" onChange={(e)=>setPiece(e.target.value)} value={piece_joint} />
      <Button variant="contained"  style={{width:"200px",marginLeft:"10px",backgroundColor:"#647295",color:"white"}} onClick={()=>dispatch(addtache({titre,description,date_fin,prop,priori,etat,piece_joint},Navigate))}>Ajouter Tache</Button>
    </Box>
        
    )
}

export default AddTache
