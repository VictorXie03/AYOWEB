import React from 'react'
import menuLeft from '../../images/menu-left.svg'
import menu from '../../images/ayofullmenu.pdf'
import MenuCarousel from './MenuCarousel'
import './Menu.css'


const Menu = () => {
  return (
    <div>
      <div className="Menu" id="menu">
        <img className="Menu-left" src={menuLeft}></img>
        <div className="Menu-right">
          <div className="Menu-info">
            <h1 className="Menu-title">Menu</h1>
            <p className="Menu-paragraph">Whether you're seeking the familiar comfort of classic Chinese dishes or craving the excitement of bold new flavors, our menu has something to delight every palate.</p>
            <a href={menu} target="_blank" className="button">Full Menu</a>
          </div>
        </div>
      </div>
      <MenuCarousel>
      </MenuCarousel>
    </div>

  )
}

export default Menu