import React from 'react'
import { Link } from 'react-scroll'
import logo from '../../images/ayologo3.jpg'
import './NavBar.css'

const NavBar = () => {
    return (
        <div className="Nav-heading">
            <Link style={{ opacity: "100%" }} to="home" spy={true} offset={-100} duration={500}><img className="logoLink" src={logo} /></Link>
            <p className="Nav-title">Asian Yummy One</p>
            <li className="Nav-heading-elements">
                <Link to="about" spy={true} offset={-100} duration={500}>About</Link>
            </li>
            <li className="Nav-heading-elements">
                <Link to="hours" spy={true} offset={-100} duration={500}>Hours</Link>
            </li>
            <li className="Nav-heading-elements">
                <Link to="directions" spy={true} offset={-100} duration={500}>Directions</Link>
            </li>
            <li className="Nav-heading-elements">
                <Link to="menu" spy={true} offset={-100} duration={500}>Menu</Link>
            </li>
            <li className="Nav-heading-elements">
                <Link to="reviews" spy={true} offset={-100} duration={500}>Reviews</Link>
            </li>
            <li className="Nav-heading-elements">
                <Link to="contact" spy={true} offset={-100} duration={500}>Contact</Link>
            </li>
            <li className="Nav-heading-elements">
                <a className="nav-call-button" href="tel://+7054245555">Order now</a>
            </li>
        </div>
    )
}

export default NavBar
