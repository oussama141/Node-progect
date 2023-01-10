import React, { useState, useRef } from 'react'
import '../styles/recherche.css'
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert';
import { Alert } from '@mui/material';
function Recherche() {

    const locationRef = useRef();
    const dateRef = useRef();
    const priceRef = useRef();


    const [location, setLocation] = useState(null);
    const [price, setPrice] = useState(null);
    const [date, setDate] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault()
        const loc = location;
    }



    // function validate() {
    //     if (

    //         locationRef.current.value !== "" &&
    //     ) {


    const history = useHistory();
    const routeChange = () => {
        if (locationRef.current.value == "" && priceRef.current.value == "") {
            <Alert severity="error">This is an error alert — check it out!</Alert>
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Oops...',
            //     text: 'Something went wrong!',
            //     footer: '<a href="">Why do I have this issue?</a>'
            //   })
        }else{
            var loc = locationRef.current.value == "" ? " " : locationRef.current.value;
            var prix = priceRef.current.value == "" ? " " : priceRef.current.value;
            let path = `Lister/` + loc + "/" + prix;
            history.push(path);
        }

    }

    return (
        <section className='recherche' sx={{ bgcolor: 'info.main', color: 'black', p: 2 }}>
            <div className='input'>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        inputRef={locationRef}
                        id="outlined-basic"
                        label="Location"
                        variant="outlined"
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </Box>

                <TextField
                    className="textfield"
                    id="date"
                    label="Date"
                    type="date"
                    defaultValue="2022-01-01"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField

                    inputRef={priceRef}
                    id="outlined-number"
                    label="Price"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                <Stack direction="row" spacing={2}>
                    <Button style={{
                        background: "#5e52ff",
                        color: "white",
                        border: "1px solid #5e52ff",
                    }} variant="contained" onClick={routeChange}>Search</Button>
                </Stack>
            </div>
        </section>
    )
}
export default Recherche
//routeChange