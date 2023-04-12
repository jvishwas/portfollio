import React from "react";
import "./service.css";
import { Image } from "../../../DataStore";
const ServiceProd = () => {
  return (
    <>
      {/* <div className='row p-3 mt-5 ' id='service_prod'  >
                <h1 className='text-white text-center text-decoration-underline py-3' >IT Support Services</h1>
                <div className='col col-md-6 col-lg-6 col-12' data-aos='' >
                    <img src='./assets/img/software-deve.gif' alt='not found' className='img-fluid'/>
                </div>
                <div className='col col-md-6 col-lg-6 col-12 ' >
                    <ul className='' data-aos='fade-left'>
                        <h2 className='t_color'>Monitoring</h2>
                        <p>Services that handle client information or require confidential credentials to access are the most vulnerable to attack. Monitoring services can watch over your network and quickly provide support when disaster strikes.Monitoring support can be implemented on any active service or software used by employees or customers. </p>
                        <h2 className='t_color'>Design</h2>
                        <p>Sometimes the most challenging part of supporting your IT infrastructure is knowing how to get started or when to scale your IT solutions with your business's growth. Another form of support service is IT design assistance.This is when an expert or team of experts comes in and evaluates your infrastructure. </p>
                        <h2 className='t_color'>Active Support</h2>
                        <p>The most common type of IT support is active support. Almost everyone has used some type of active IT support at some point. Anytime an employee or customer needs live help with a product or piece of software, active support comes to the rescue. IT experts can provide real-time support over the phone or live chat through what’s known as a helpdesk.</p>
                    </ul>
                    
                </div>

            </div>   */}
      <div className="row mx-2">
        {Image.map((img) => {
          return (
            <div className="row w-100 my-3 mx-auto bg-light" data-aos="fade-up" key={img.id} >
              <h1 className="text-center my-2">{img.name}</h1>
              <div className="col col-12 my-auto ">
                <img src={img.imgUrl} className="mx-auto d-block" alt="not found" style={{width:"10rem",MaxHeight:"10rem"}} />
              </div>
              <div className="col col-12 ">
                <p className="fs-5 text-info text-center py-2">{img.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ServiceProd;
