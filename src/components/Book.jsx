import React, { useState, useRef } from 'react'
import Axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import DialogActions from '@mui/material/DialogActions';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import swal from 'sweetalert';
import Navbar from "./Navbar";
import '../styles/Book.css';


function Book() {

    const [Firstname, setFirstname] = useState('');
    const [Lastname, setLastname] = useState('');
    const [Cin, setCin] = useState('');
    const [Email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [Open, setOpen] = React.useState(false);
    const [error, setError] = useState('');
    const [verfCin, setverfCin] = useState(false);
    const [verfEmail, setverfEmail] = useState(false);
    const [verfPhone, setverfPhone] = useState(false);
    const [verfFirstname, setverfFirstname] = useState(false);
    const [verfLastname, setverfLastname] = useState(false);

    const verifFirstname = () => {
        const reg = new RegExp(/^[a-zA-Z]*$/);
        if (reg.test(FirstnameRef.current.value) === false) {
            setverfFirstname(true)
        } else {
            setverfFirstname(false)
        }
    }

    const verifLastname = () => {
        const reg = new RegExp(/^[a-zA-Z]*$/);
        if (reg.test(LastnameRef.current.value) === false) {
            setverfLastname(true)
        } else {
            setverfLastname(false)
        }
    }

    const verifEmail = () => {
        const reg = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (reg.test(EmailRef.current.value) === false) {
            setverfEmail(true)
        } else {
            setverfEmail(false)
        }
    }

    const verifPhone = () => {
        const reg = new RegExp(/^[0-9]*$/);
        if (reg.test(PhoneRef.current.value) === false) {
            setverfPhone(true)
        } else {
            setverfPhone(false)
        }
    }

    const verifCin = () => {
        const reg = new RegExp(/^[a-zA-Z0-9]*$/);
        if (reg.test(CinRef.current.value) === false) {
            setverfCin(true)
        } else {
            setverfCin(false)
        }
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleChangeCin = (event) => {
        setverfCin(false);
        setCin(event.target.value);
    };


    const Input = styled('input')({
        display: 'none',
    });

    const handleReset = () => {
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
        this.setState({
            itemvalues: [{}]
        });
    };


    const FirstnameRef = useRef();
    const CinRef = useRef();
    const EmailRef = useRef();
    const PhoneRef = useRef();
    const LastnameRef = useRef();
    const history = useHistory();


    function valid() {
        if (
            FirstnameRef.current.value !== "" &&
            LastnameRef.current.value !== "" &&
            CinRef.current.value !== "" &&
            EmailRef.current.value !== "" &&
            PhoneRef.current.value !== ""
        ) {

            Axios.post("http://localhost:3001/reservation", {
                FirstnameRef: FirstnameRef.current.value,
                LastnameRef: LastnameRef.current.value,
                CinRef: CinRef.current.value,
                EmailRef: EmailRef.current.value,
                PhoneRef: PhoneRef.current.value,

            }).then((response) => {

                if (response.data.message === "Operation completed") {
                    swal("Good job!", "Your reservation has been successfully added!", "success");
                    history.push({
                        pathname: '/Validate',
                    });
                }
            });
        }
        else {
            if (FirstnameRef.current.value === '') {
                setverfFirstname(true)
            }
            if (LastnameRef.current.value === '') {
                setverfLastname(true)
            }
            if (CinRef.current.value === '') {
                setverfCin(true)
            }
            if (EmailRef.current.value === '') {
                setverfEmail(true)
            }
            if (PhoneRef.current.value === '') {
                setverfPhone(true)
            }
        }


    }

    return (
        <div className="global2">
            <Navbar />
            <div className="res">
                <div className="title-res">
                    Reservation
                </div>
                <div className="container-res">
                    <div className="container-body-res">
                        <div className="inputs-res">
                            <TextField
                                inputRef={FirstnameRef}
                                required
                                error={verfFirstname}
                                onChange={verifFirstname}
                                label="First Name"
                                size="small"
                                sx={{ width: '100%' }}
                            />
                            <TextField
                                inputRef={LastnameRef}
                                required
                                error={verfLastname}
                                onChange={verifLastname}
                                label="Last Name"
                                size="small"
                                sx={{ width: '100%' }}
                            />
                            <TextField
                                inputRef={EmailRef}
                                required
                                error={verfEmail}
                                onBlur={verifEmail}
                                label="Email"
                                size="small"
                                sx={{ width: '100%' }}
                            />
                            <TextField
                                inputRef={PhoneRef}
                                required
                                error={verfPhone}
                                onChange={verifPhone}
                                label="Phone number"
                                size="small"
                                sx={{ width: '100%' }}
                            />
                            <TextField
                                inputRef={CinRef}
                                required
                                error={verfCin}
                                onChange={() => setverfCin(false)}
                                label="CIN"
                                size="small"
                                sx={{ width: '100%' }}
                            />

                        </div>
                        <div className="btns-res">
                            <Button onClick={() => { valid() }} disableElevation variant="contained" 
                            style={{
                                backgroundColor: "#5632f5",
                                color: "white",
                                padding: "8px",
                                borderWidth: "1px",
                                borderColor: "#5632f5",
                                borderStyle: "solid",
                                borderRadius: "4px"
                            }}>Validate</Button>
                            <Button disableElevation variant="outlined" onClick={handleReset}
                            style={{
                                color: "#5632f5",
                                padding: "8px",
                                borderWidth: "1px",
                                borderColor: "#5632f5",
                                borderStyle: "solid",
                                borderRadius: "4px"
                            }}
                            >Reset</Button>
                            <Dialog
                                open={Open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">
                                    {"Please confirm !"}
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Are you sure you want to continue ?
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>
                                    <Link to="/Home">
                                        <Button onClick={handleClose} autoFocus>
                                            Confirm
                                        </Button>
                                    </Link>
                                </DialogActions>
                            </Dialog>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );

} export default Book