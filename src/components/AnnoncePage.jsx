import React, { useEffect, useState } from "react";
import Axios from "axios";
import Button from "@mui/material/Button";
import "../styles/AnnoncePage.css";

function AnnoncePage() {

    const [annonces, setannonces] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/afficheannonce").then((response) => {
            setannonces(response.data);
        });
    });

    return (
        <section className="sec">
            <div className="cart">
                <div className="title">Announcement</div>
                <div className="cards">
                    {annonces.map((annonce) => (
                        <div className="card">

                            <div className="content">
                                <div className="location">{annonce.property} </div>
                            </div>

                            <div className="content">
                                <div className="location">{annonce.location} </div>
                            </div>

                            <div className="content">
                                <div className="price">{annonce.price} </div>
                            </div>

                            <div className="content">
                                <div className="date">{annonce.date} </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="button">
                <Button
                    variant="contained"
                    style={{
                        backgroundColor: "#3ECFA3",
                    }}
                >
                    Book
                </Button>
            </div>
        </section>
    );
}
export default AnnoncePage;


