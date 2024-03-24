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
            <h1 className="ChefsPicks-title">Chef's Picks <img src={logo} /></h1>
            <div className="ChefsPicks-cards">
                <ChefsPicksCard img={chowmein} title="Seafood Cantonese Chowmein(Party Tray)" description="Sliced chicken, shrimp, pork, cooked w/ mixed vegetables on Cantonese egg noodles" />
                <ChefsPicksCard img={generaltao} title="General Tso's Chicken" description="Crispy chicken bites tossed in tangy General Tso's sauce, served with steamed rice" />
                <ChefsPicksCard img={chickennoodle} title="General Tso's Chicken" description="Crispy chicken bites tossed in tangy General Tso's sauce, served with steamed rice" />
            </div>
        </div>
    );
}

export default ChefsPicks;
