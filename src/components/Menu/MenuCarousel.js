import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Carousel.css';

import image1 from '../Menu/foodImage/ayo3.jpg'
import image2 from '../Menu/foodImage/ayo8.jpg'
import image3 from '../Menu/foodImage/ayo9.jpg'
import image4 from '../Menu/foodImage/ayo5.jpg'
import image5 from '../Menu/foodImage/ayo6.jpg'
import image6 from '../Menu/foodImage/ayo4.jpg'


export default class MenuCarousel extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            arrows: true,
            centerPadding: "60px",
            slidesToShow: 5,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 3500,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        centerMode: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        centerMode: true,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        centerMode: true,
                    }
                }
            ]
        };

        return (
            <div className="menuCarouselContainer" id="slider-2">
                <Slider {...settings}>
                    <div className="card-wrapper">
                        <div>
                            <img className="menuImage" src={image1} ></img>
                        </div>
                        <div className="descriptionBox">
                            <h2 className="descriptionText"> GENERAL TAO CHICKEN </h2>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <img className="menuImage" src={image2} />
                        <div className="descriptionBox">
                            <h2 className="descriptionText"> CHICKEN EGG NOODLE </h2>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <img className="menuImage" src={image3} />
                        <div className="descriptionBox">
                            <h2 className="descriptionText"> SESAME CHICKEN </h2>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <img className="menuImage" src={image4} />
                        <div className="descriptionBox">
                            <h2 className="descriptionText"> CHICKEN EGG NOODLE </h2>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <img className="menuImage" src={image5} />
                        <div className="descriptionBox">
                            <h2 className="descriptionText"> SHRIMP W/ MIXED VEGETABLES </h2>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <img className="menuImage" src={image6} />
                        <div className="descriptionBox">
                            <h2 className="descriptionText"> HOT SPICY CHICKEN WINGS </h2>
                        </div>
                    </div>

                </Slider >
            </div >
        );
    }
}