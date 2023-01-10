import React, { useState, useRef } from 'react'
import Axios from 'axios';
import '../styles/AddAnnoncePage.css';
import { Link, useHistory } from 'react-router-dom';
import DialogActions from '@mui/material/DialogActions';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import swal from 'sweetalert';
import Navbar from "./Navbar";

function AddAnnoncePage() {


    const [file, setFile] = useState();
    const [fileName, setFileName] = useState();
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [cin, setCin] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [property, setProperty] = useState('');
    const [price, setPrice] = useState('');
    const [desc, setDesc] = useState('');
    const [open, setOpen] = React.useState(false);

    const [verfFirstname, setverfFirstname] = useState(false)
    const [verfLastname, setverfLastname] = useState(false)
    const [verfCin, setverfCin] = useState(false)
    const [verfEmail, setverfEmail] = useState(false)
    const [verfPhone, setverfPhone] = useState(false)
    const [verfLocation, setverfLocation] = useState(false)
    const [verfDate, setverfDate] = useState(false)
    const [verfProperty, setverfProperty] = useState(false)
    const [verfPrice, setverfPrice] = useState(false)
    const [verfDesc, setverfDesc] = useState(false);

    const verifFirstname = () => {
        const reg = new RegExp(/^[a-zA-Z]*$/);
        if (reg.test(firstnameRef.current.value) === false) {
            setverfFirstname(true)
        } else {
            setverfFirstname(false)
        }
    }

    const verifLastname = () => {
        const reg = new RegExp(/^[a-zA-Z]*$/);
        if (reg.test(lastnameRef.current.value) === false) {
            setverfLastname(true)
        } else {
            setverfLastname(false)
        }
    }

    const verifEmail = () => {
        const reg = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (reg.test(emailRef.current.value) === false) {
            setverfEmail(true)
        } else {
            setverfEmail(false)
        }
    }

    const verifLocation = () => {
        const reg = new RegExp(/^[a-zA-Z]*$/);
        if (reg.test(locationRef.current.value) === false) {
            setverfLocation(true)
        } else {
            setverfLocation(false)
        }
    }

    const verifPhone = () => {
        const reg = new RegExp(/^[0-9]*$/);
        if (reg.test(phoneRef.current.value) === false) {
            setverfPhone(true)
        } else {
            setverfPhone(false)
        }
    }

    const verifPrice = () => {
        const reg = new RegExp(/^[0-9]*$/);
        if (reg.test(priceRef.current.value) === false) {
            setverfPrice(true)
        } else {
            setverfPrice(false)
        }
    }

    const verifCin = () => {
        const reg = new RegExp(/^[a-zA-Z0-9]*$/);
        if (reg.test(cinRef.current.value) === false) {
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

    const handleChangeLocation = (event) => {
        setverfLocation(false);
        setLocation(event.target.value);
    };

    const handleChangeDate = (event) => {
        setverfDate(false);
        setDate(event.target.value);
    };

    const handleChangeProperty = (event) => {
        setverfProperty(false);
        setProperty(event.target.value);
    };

    const handleChangePrice = (event) => {
        setverfPrice(false);
        setPrice(event.target.value);
    };

    const handleChangeDesc = (event) => {
        setverfDesc(false);
        setDesc(event.target.value);
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

   



    const firstnameRef = useRef();
    const lastnameRef = useRef();
    const cinRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const locationRef = useRef();
    const dateRef = useRef();
    const priceRef = useRef();
    const descRef = useRef();
    let history = useHistory();


    function saveFile(event) {
        setFile(event.target.files[0]);
        setFileName(event.target.files[0].name);
    }


    function ajouter() {
        if (
            firstnameRef.current.value !== "" &&
            lastnameRef.current.value !== "" &&
            cinRef.current.value !== "" &&
            emailRef.current.value !== "" &&
            phoneRef.current.value !== "" &&
            locationRef.current.value !== "" &&
            dateRef.current.value !== "" &&
            property !== '' &&
            priceRef.current.value !== "" &&
            descRef.current.value !== ''
        ) {

            Axios.post("http://localhost:3001/addannonce", {
                firstnameRef: firstnameRef.current.value,
                lastnameRef: lastnameRef.current.value,
                cinRef: cinRef.current.value,
                emailRef: emailRef.current.value,
                phoneRef: phoneRef.current.value,
                locationRef: locationRef.current.value,
                dateRef: dateRef.current.value,
                property: property,
                priceRef: priceRef.current.value,
                descRef: descRef.current.value

            }).then((response) => {

                if (response.data.message === "Operation completed") {
                    swal("Good job!", "Your announcement has been successfully added!", "success");
                    history.push({
                        pathname: '/AfficheAnnonce',
                    });
                }
            });
        }
        else {
            if (firstnameRef.current.value === '') {
                setverfFirstname(true)
            }
            if (lastnameRef.current.value === '') {
                setverfLastname(true)
            }
            if (cinRef.current.value === '') {
                setverfCin(true)
            }
            if (emailRef.current.value === '') {
                setverfEmail(true)
            }
            if (phoneRef.current.value === '') {
                setverfPhone(true)
            }
            if (locationRef.current.value === '') {
                setverfLocation(true)
            }
            if (dateRef.current.value === '') {
                setverfDate(true)
            }
            if (property === '') {
                setverfProperty(true)
            }
            if (price === '') {
                setverfPrice(true)
            }
            if (descRef.current.value === '') {
                setverfDesc(true)
            }
        }
   }

    return (
        <div className="global">
            <section className="add-annonce">
            <Navbar/>

                <div className="title">Anouncement</div>
                <div className="content">Put your anouncement here.</div>
                <div className="container">
                    <div className="container-body">
                        <div className="right-side">
                            <div className="inputs-container"  >
                                <TextField
                                    inputRef={firstnameRef}
                                    required
                                    error={verfFirstname}
                                    onChange={verifFirstname}
                                    label="First Name"
                                    size="small"
                                    sx={{ width: '100%' }}
                                />
                                <TextField
                                    inputRef={lastnameRef}
                                    required
                                    error={verfLastname}
                                    onChange={verifLastname}
                                    label="Last Name"
                                    size="small"
                                    sx={{ width: '100%' }}
                                />
                                <TextField
                                    inputRef={emailRef}
                                    required
                                    error={verfEmail}
                                    onBlur={verifEmail}
                                    label="Email"
                                    size="small"
                                    sx={{ width: '100%' }}
                                />
                                <TextField
                                    inputRef={phoneRef}
                                    required
                                    error={verfPhone}
                                    onChange={verifPhone}
                                    label="Phone"
                                    size="small"
                                    sx={{ width: '100%' }}
                                />
                                <TextField
                                    inputRef={cinRef}
                                    required
                                    error={verfCin}
                                    onChange={() => setverfCin(false)}
                                    label="Cin"
                                    size="small"
                                    sx={{ width: '100%' }}
                                />
                                <FormControl fullWidth>
                                    <InputLabel size="small" id="demo-simple-select-label">Property</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={property}
                                        label="Property"
                                        size="small"
                                        error={verfProperty}
                                        onChange={handleChangeProperty}
                                    >
                                        <MenuItem value={"Room"}>Room</MenuItem>
                                        <MenuItem value={"Appartment"}>Appartment</MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField
                                    inputRef={dateRef}
                                    id="date"
                                    error={verfDate}
                                    onChange={() => setverfDate(false)}
                                    label="Date"
                                    type="date"
                                    size="small"
                                    sx={{ width: "100%" }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <TextField
                                    inputRef={locationRef}
                                    required
                                    error={verfLocation}
                                    onChange={verifLocation}
                                    label="Location"
                                    size="small"
                                    sx={{ width: '100%' }}
                                />
                                <div className="price" >
                                    <TextField
                                        inputRef={priceRef}
                                        required
                                        error={verfPrice}
                                        onChange={verifPrice}
                                        label="Price"
                                        size="small"
                                        sx={{ width: '100%' }}
                                    />
                                </div>
                                <div className="desc">
                                    <TextField
                                        inputRef={descRef}
                                        required
                                        error={verfDesc}    
                                        onChange={ e => this.handleChange(e) }                             
                                        label="Description"
                                        placeholder="Description"
                                        multiline
                                        rows={2}
                                        maxRows={9}
                                    />
                                </div>
                            </div>
                            <div className="btns-container">
                                <Button style={{
                                background: "#5e52ff",
                                color: "white",
                                border: "1px solid #5e52ff",
                            }} onClick={() => { ajouter() }} disableElevation variant="contained" className="green_btn">Validate</Button>
                                <Button disableElevation variant="outlined" onClick={handleReset}>Reset</Button>
                                <Dialog
                                    open={open}
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
                                        <Link to="/home">
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
            </section>
        </div>
    );

} export default AddAnnoncePage