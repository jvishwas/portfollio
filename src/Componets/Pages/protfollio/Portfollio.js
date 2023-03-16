import React from "react";
import IMG from "../../../Data.json";
import "./portfollio.css";
import CardProt from "./CardProt";
export default function Portfollio() {
  return (
    <>
      <div className="container-fluid " id="portfillio">
        <div className="row" id="work">
          <h1
            className="text-white text-center text-decoration-underline pt-4"
            data-aos="fade-down"
          >
            My Work
          </h1>

          {IMG &&
            IMG.map((myimg, i) => (
              <div
                key={i.id}
                className="col col-12 col-sm-12 col-md-4 my-3 "
                id="card_body"
                data-aos="zoom-in"
              >
                <img src={myimg.img} alt="" />
              </div>
            ))}
        </div>
      </div>
      <div>
        <h1 className="text-white text-center text-decoration-underline mt-5">
          Our Client Says
        </h1>
      </div>
      {/* <Slider/>
      <Slider />
      <Slider /> */}

      {IMG && IMG.map((data) => <CardProt items={data} />)}
    </>
  );
}
