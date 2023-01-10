import React from 'react'
import '../styles/navbar.css'
import image from '../assets/images/logo1.png'
import contact from '../assets/images/login.png'
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Navbar() {

    const history = useHistory();

    const routeChange = () => {
        let path = `AddAnnoncePage`;
        history.push(path);
    }

    function scrollToTestDiv1() {
        const divElement = document.getElementById('home');
        divElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function scrollToTestDiv2() {
        const divElement = document.getElementById('footer');
        divElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    function scrollToTestDiv3() {
        const divElement = document.getElementById('visited');
        divElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function scrollToTestDiv4() {
        const divElement = document.getElementById('categories');
        divElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    const homeChange = () => {
        let path = `/`;
        history.push(path);
    }

    return (

            <div className='navbar'>
            <div className='nvb'>
                <div className='logo'>
                    <img src={image} alt="" className="checkin" onClick={homeChange} />
                </div>
                <div className='menuIcon'>
                    <div className='menu'>
                        <ul>
                            <a className="nav-link" onClick={scrollToTestDiv1}> <li>Home</li>  </a>
                            <a className="nav-link" onClick={scrollToTestDiv4}> <li >Famous Places</li>  </a>
                            <a className="nav-link" onClick={scrollToTestDiv3}> <li >Properties</li>  </a>
                            <a className="nav-link" onClick={scrollToTestDiv2}> <li>Contact us</li>  </a>
                            <li onClick={routeChange}>Become a Host</li>
                        </ul>
                    </div>
                    {/* <div className="connecte">
                        <Link to="/Login"><img src={contact} alt="" /></Link>
                    </div> */}
                </div>
            </div>
        </div>       
    )
}
export default Navbar