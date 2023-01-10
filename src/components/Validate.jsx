import React, { useEffect, useState } from "react";
import Axios from "axios";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import '../styles/Validate.css'

function Validate() {

    const [reservations, setreservations] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/affichereservation").then((response) => {
            setreservations(response.data);
        });
    });

    const history = useHistory();
    const routeChange = () => {
        let path = `AfficheAnnonce`;
        history.push(path);
    }

    return (
        <section className="validate">
            <div className="cards">
                <div className="center">
                    <h2>Your reservation has been well registred.</h2>
                    {reservations.map((reservation) => (
                        <div className="card">
                            <div className="content">
                                <label>Firstname:&nbsp;</label>
                                 <div className="firstname">{reservation.firstname} </div>
                            </div>

                            <div className="content">
                                <label>Lastname:&nbsp;</label>
                                 <div className="lastname">{reservation.lastname} </div>
                            </div>

                            <div className="content">
                                <label>CIN:&nbsp;</label>
                                <div className="cin">{reservation.cin} </div>
                            </div>
                        </div>
                    ))}

                    <h4>The payment on site. Thank you for your visit, and see you next time!</h4>

                    <Button onClick={routeChange} className="green_btn"
                        variant="contained"
                        style={{
                            backgroundColor: "#1976d2",
                        }}
                    >
                        OK
                    </Button>
                </div>
            </div>
        </section>
    )

}
export default Validate;