import { useState } from "react";
import { Container, Button, Stack, Box, } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import  './App.css'
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
    let [count, setcount] = useState(0);

    const handleIncrement = () => {
        setcount(++count);
    };
  
    const handleDecrement = () => {
        setcount(--count);
    };

    const handledisable = () => {
     if (count===0){

        toast.error('Cant go below zero!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
     }
    }
  
    return (
        
      <>

        <Container  align='center'> 
        <h1>Counter App</h1>
        <Box className="box" sx={{p: 1, border: 1, boxShadow: 1, width:'45%'}}>

       
        <Box sx={{m:2}}>
        <span>{count}</span>
        </Box>
        <br />
        <Stack direction="row" spacing={2} justifyContent={"center"}>
            
        <div onClick={handledisable}>

        <Button variant="contained" size="large" onClick={handleDecrement} 
        disabled={count === 0}> 
        <RemoveIcon></RemoveIcon></Button>
        </div>
        
        <Button variant="contained" size="large" onClick={handleIncrement}> <AddIcon></AddIcon>  
        </Button>
        <ToastContainer />
        </Stack>
        </Box>
        </Container>

      </>
    );
  }
