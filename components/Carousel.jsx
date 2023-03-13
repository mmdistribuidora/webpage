import React from 'react';
import Link from "next/link";
import { urlFor } from '../lib/client';
import useScript from '../hooks/useScript';


const Carousel = ({gallery}) => {

  return (
    <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">

        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>

        <div className="carousel-inner">

            <div className="carousel-item active" data-bs-interval="6000">
                <div className="overlay-image">
                        <img src={urlFor(gallery.images[0])} className="d-block" alt="..."/>
                </div>
            </div>
            <div className="carousel-item" data-bs-interval="6000">
                <div className="overlay-image">
                        <img src={urlFor(gallery.images[1])} className="d-block" alt="..."/>
                </div>
            </div>

            <div className="carousel-item" data-bs-interval="6000">
                <div className="overlay-image">
                        <img src={urlFor(gallery.images[2])} className="d-block" alt="..."/>
                </div>
            </div>
        
            <div className="carousel-item" data-bs-interval="6000">
                <div className="overlay-image">
                        <img src={urlFor(gallery.images[3])} className="d-block" alt="..."/>
                </div>
            </div>

        </div>

        <h6 className="position-absolute top-30 start-10 text-white">{gallery.midText}</h6>
        <h1 className="position-absolute top-40 start-10 text-white">{gallery.largeText1}</h1>
        <div className="gallery button">
            <button type="button" className="position-absolute top-70 start-10">{gallery.buttonText}</button> 
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>

    </div> 
  )
}

export default Carousel

