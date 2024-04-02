import React from 'react';
import chowmein from '../../images/ayo3.jpg';
import ChefsPicksCard from './ChefsPicksCard';
import generaltao from '../../images/ayo general tao.jpg';
import chickennoodle from '../Menu/foodImage/ayo5.jpg'
import './ChefsPicks.css';

import logo from '../../images/ayologo.png'
const ChefsPicks = () => {
    return (
        <div className="ChefsPicks-container">
            <h1 className="ChefsPicks-title">Chef's Favourites <img src={logo} /></h1>
            <div className="ChefsPicks-cards">
                <ChefsPicksCard img={chowmein} title="Seafood Cantonese Chowmein Party Tray" description="Sliced chicken, shrimp, pork, cooked w/ mixed vegetables on Cantonese egg noodles" />
                <ChefsPicksCard img={generaltao} title="General Tso's Chicken" description="Crispy chicken bites tossed in tangy General Tso's sauce, served with steamed rice" />
                <ChefsPicksCard img={chickennoodle} title="Chicken Lo Mein" description="Sliced chicken mixed with lo mein, topped with mixed vegetables" />
            </div>
        </div>
    );
}

export default ChefsPicks;
