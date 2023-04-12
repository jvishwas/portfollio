import React from "react";
import { CollagePic } from "../../../DataStore";
import "./gallary.css"

export default function Memories() {
  return (
    <>
      <div className="row">
        <h1 className="text-center text-white text-decoration-underline mt-4 mb-5">Memories</h1>
        
            {
                CollagePic.map((data)=>
                 {
                    return(
                      <div className="col my-3 " key={data.id} id="gallary_img">
                        <img className="border border-5 m-auto d-block" data-aos="fade-up"  src={data.imgUrl} alt="img not found" style={{width:"21rem",height:"25rem" }} />
                      </div>
                    )
                 }
                )
            }
        </div>
      
    </>
  );
}
