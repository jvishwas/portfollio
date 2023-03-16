import React from 'react';
import { Link } from 'react-router-dom';
const ServiceCard = (serices,icons) => {
    return (
        <>
            <div className="col service_style" data-aos="fade-up">
            <i className="fa-solid fa-crop text-center"></i>
            <h3>{serices.CardName}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
              nam fuga officia laborum labore debitis harum, minus ipsa nisi,
              
            </p>
            <br />
            <Link to="">
              <p>Learn More</p>
            </Link>
          </div>
        </>
    );
}

export default ServiceCard;
