import React from "react";
import "./cardport.css";
const CardProt = (data) => {
  return (
    <>
      <div className="row " id="main_box">
        <div
          className="row w-100 mt-4 mx-4 bg-light border border-5 rounded"
          id="client"
          data-aos="slide-right"
        >
          <div className="col col-md-4 col-12  " id="client_box">
            <img src={data.items.clientImg} alt="not" id="client_img" />
          </div>
          <div className="col col-md-6 col-12 ">
            <p className="fs-3">{data.items.name}</p>
            <p className="my-auto">
              <i className="fa-solid fa-quote-left" /> Good business decisions are
              based on solid market research. The process is possible through
              video conferences, reviewing public comments on social media.
              <i className="fa-solid fa-quote-right" />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProt;
