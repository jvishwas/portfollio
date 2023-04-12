import React from "react";
import "./service.css";
import ServiceCard from "./ServiceCard";
import ServiceProd from "./ServiceProd";
import Media from "../media/Media";
export default function Service() {
  return (
    <>
      {/* Videos */}
      
      <div style={{ width: "" }} className="bg-dark" data-aos="fade-left">
        <Media />
      </div>
      <div className="container-fluid " id="services">
        <div className="row text-center py-3">
          <h1
            className="text-white text-center text-decoration-underline"
            data-aos="fade-down"
          >
            Services
          </h1>
        </div>

        <div className="row d-flex justify-content-center" id="service_div">
          <ServiceCard CardName="Web Design" />
          <ServiceCard CardName="UI Design" />
          <ServiceCard CardName="App Design" />
        </div>
        
        <ServiceProd />
      </div>
      
      
    </>
  );
}
