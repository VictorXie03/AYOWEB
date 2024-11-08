import React, { Component } from 'react'
import './TopCarousel.css'
import topImage from '../../images/beef-vegetables-sesame-seeds-black-bowl-black-slate-background.jpg'
import menu from '../../images/ayofullmenu.pdf'




const TopCarousel = () => {
    return (
        <div className='article'>
            <div className='header'>"Yummy one</div>
            <div className='header-2'>bite after another"</div>
            <img
                className='Top-image' id='home' src={topImage}>
            </img>
            <a href={menu} target="_blank" className="top-button">Full Menu</a>
            <a className="top-call-button" href="tel://+17054245555">Call Now</a>
            <div className="bottomright">Designed by Freepik</div>
        </div>
    );
}

export default TopCarousel