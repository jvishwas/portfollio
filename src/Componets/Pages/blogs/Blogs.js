import React from "react";
import "./blogs.css";
import Cards from "./Cards";

const Blogs = () => {
  return (
    <>
      <div className="row .custom_fontstyle">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="./assets/img/blog_banner_1.jpg"
                className="d-block w-100 img-fluid custom_size"
                alt="..."
              />

              <div className="carousel-caption d-none d-md-block">
                <h5>Photography And Imagination</h5>
                <p>
                  This blog uses psychology along with photography. This
                  provokes the reader to explore their creativity through a
                  series of reviews, tutorials, and articles published on the
                  site. This site allows readers to explore other photographers’
                  work, read on the newest gear, and explore the world through
                  new perspectives.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="./assets/img/blog_banner_3.jpg"
                className="d-block w-100 img-fluid custom_size"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Night MoonLight And City Life.</h5>
                <p>
                  Night can be the best time to take some moody and breathtaking
                  shots, either under the moonlight and a sky full of stars or
                  of bright bustling nighttime city life
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="./assets/img/blog_banner_2.jpg"
                className="d-block w-100 img-fluid custom_size"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Spiti Valley Capture Moment's</h5>
                <p>
                  Located in Himachal Pradesh, Spiti Valley is a cold
                  mountainous desert place, with a weather-beaten face. The
                  quiet ambience of the village and chorten enriched by the
                  chanting influences the mindfulness inside of you. You ought
                  to capture these memories in your camera without fail.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* <div id="blog_title">
            <h1>Blogs</h1>
        </div> */}
      </div>

      {/* Tranding section */}
      <Cards/>
    </>
  );
};

export default Blogs;
