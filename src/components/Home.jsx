import React from 'react'
import '../styles/home.css'
import dar from "../assets/images/back-img.png";

function Home() {
    return (
        <div className='home' id="home">

                <div className='titles'>
                    <div className='title1'>Let's find a modern <br></br>place for you!</div>
                    <div className='title2'>We provide a complete service for the rent of a Room<br></br>
                        or an Appartment.</div>
                </div>
                <div className="img-area">
                    <img src={dar} alt="" />
                </div>           
        </div>
    )
}
export default Home;