import React, { Component } from 'react'
import './TopCarousel.css'
import topImage from '../../images/main1.svg'
import menu from '../../images/menu.pdf'




const TopCarousel = () => {
    return (
        <div className='article'>
            <div className='header'>Asian Yummy One</div>
            <img
                className='Top-image' id='home' src={topImage}>
            </img>
            <a href={menu} target="_blank" className="top-button">Full Menu</a>
            <a className="top-call-button" href="tel://+7054245555">CALL NOW</a>
            <div className="bottomright">The images shown are for illustration purposes only and may not be an exact representation of the product.</div>
        </div>
    );
}

export default TopCarousel