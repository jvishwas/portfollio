import React from "react";

import { DataStore } from "../../../DataStore";
const Cards = () => {
  return (
    <>
      <section className="row ">
        <h1 className="text-white text-center text-decoration-underline ">
          Trending Blogs
        </h1>
        <div className="col border bg-light">
          {DataStore.map((data) => (
            <div
              className="card border d-inline-block ms-3 my-2 col-12 "
              data-aos="fade-up"
              style={{ width: "18rem" }}
              key={data.id}
            >
              <img
                src={data.imgUrl}
                className="card-img-top"
                style={{ height: "15rem" }}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <ul className="d-flex justify-content-between" style={{cursor:"pointer"}}>
                  <i className="fa-brands fs-4 fa-twitter"></i>
                  <i className="fa-brands fs-4 fa-facebook"></i>
                  <i className="fa-brands fs-4 fa-instagram"></i>
                  <i className="fa-solid fs-4 fa-thumbs-up"></i>
                </ul>
              </div>
            </div>
          ))}
        </div>
        {/* Advertisment section*/}
    
         <div className="col col-md-6 col-lg-3 col-12 bg-light pt-5  w-80">
          <p
            className="text-center text-decoration-underline text-info"
            style={{ fontSize: "2em" }}
          >
            Advertisement
          </p>
          <h4 className="py-2 text-warning px-3">Get Offeres</h4>
          <div
            className="border"
            data-aos="fade-left"
            style={{  height: "10rem" }}
          >
            <img
              src="./assets/img/blogs/comp_2.gif"
              alt="not found"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <hr className="bg-light h-2" />
          <div className="border">
            <img
              src="./assets/img/blogs/ad2.gif"
              alt="not found"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div>
            <hr />
            <h4 className="text-danger px-3">Post and Edit</h4>
            <hr />
            <img
              src="./assets/img/blogs/ad1.gif"
              alt="not found"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="py-2">
            <img
              src="./assets/img/blogs/ad3.gif"
              alt="not found"
              style={{ width: "100%", height: "15rem" }}
            />
          </div>
        </div> 
      </section>
    </>
  );
};

export default Cards;
