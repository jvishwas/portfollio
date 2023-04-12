import React from "react";
import "./about.css";
import jv7 from "./jv7.png";
export default function About() {
  return (
    <>
      <div className="container-fluid w-80 h-auto mt-4 " id="about">
        <div className="row text-center ">
          <h1 className="text-white text-center text-decoration-underline pt-3">
            ABOUT ME
          </h1>
        </div>
        <div className="row mt-3">
          <div
            className="col-12 col-md-6 my-auto mx-auto"
            id="img_box"
            data-aos="fade-down-right"
            
          >
            <img
              src={jv7}
              className="w-75 mx-auto d-inline-block img-thumbnail"
              alt=""
              id="about_img"
            />
          </div>
          {/* <!-- right side --> */}
          <div className="col col-12 col-md-6 px-4">
            <div className="row " id="my_content" data-aos="fade-up-left">
              <h2 className="heading_text">Hello!</h2>
              <h3>I'm Vishwas</h3>
              <p>
                I'm a Web Developer and Freelancer.I have build lot of Design UI
                and web sites.
                <br />
                Recently, I have designed a Netflix UI clone.
                <br />
              </p>
              <p>
                I have good knowledge of front-end development and UI designer
                and new technology use with framework.
              </p>
              <p>
                <a
                  href="./assets/pdf/Jagannath Vishwas Fr_v3.7.pdf"
                  download
                  style={{ textDecoraction: "none" }}
                >
                  <button
                    style={{
                      width: "10rem",
                      height: "3rem",
                      background: "rgb(22,163,74)",
                      marginTop: "2rem",
                      color: "white",
                      fontSize: "1.4rem",
                      border: "none",
                      borderRadius: "10px",
                    }}
                  >
                    Resume
                  </button>
                </a>
              </p>

              <span id="social_icons">
                <i className="fa-brands fa-twitter"></i>
                <a href={"https://www.linkedin.com/in/jvishwas123/"}>
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                {/* <i class="fa-brands fa-linkedin"></i> */}
                <a href={"https://www.facebook.com/jagannath.vishwas.92/"}>
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href={"https://www.instagram.com/jaggu240/"}>
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <i className="fa-solid fa-envelope"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
