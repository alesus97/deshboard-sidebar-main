import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Select} from '@mui/material';
import { styled } from '@mui/styles';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add'
import { Button, Container, Fab, MenuItem } from '@mui/material';
import Box from '@mui/material/Box';

const CustomTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
  }})

export default function InsertSaleFormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [film, setFilm] = useState([]);
  const [sale, setSale] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    props.setCloseDialog();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      titolo: data.get("")

    });
  };

  useEffect(() => {
    axios
      .get(
        `https://0ptix34dk9.execute-api.eu-central-1.amazonaws.com/film`
      )
      .then((res) => {
        setFilm(res.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://0ptix34dk9.execute-api.eu-central-1.amazonaws.com/1/sale`
      )
      .then((res) => {
        setSale(res.data);
      });
  }, []);

  return (
    <div>
 
      <Dialog open={open} fullWidth maxWidth="sm" onClose={handleClose}>

       <DialogTitle align="center">
       Inserisci Sala
       </DialogTitle>
        <DialogContent>
          
          <Container component="main" maxWidth="xs">
        <Box 
            component="form"
            onSubmit={handleSubmit}
            sx={{
              alignItems:"center",
              display: 'flex',
              flexDirection: 'column',
              '& .MuiTextField-root': { width: '50ch' },
            }}
    >

          <CustomTextField
            margin="normal"
            //required
            fullWidth
            id="email"
            label="Numero sala"
            name="email"
            //type="number"
          //  autoComplete="email"
            variant='standard'
            focused
          />

        <CustomTextField
            margin="normal"
            //required
            fullWidth
            id="email"
            label="Capienza"
            name="email"
           // type="number"
          //  autoComplete="email"
            variant='standard'
            focused
          />

          
         
          
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" >Ok</Button>

        </Box>
        </Container>
        </DialogContent>
      </Dialog>
    </div> 
    
  );
}













