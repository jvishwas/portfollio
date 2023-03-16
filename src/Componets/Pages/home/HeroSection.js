import React from "react";
import "./hero_section.css";
import { Link } from "react-router-dom";

import Service from "../service/Service";
import Portfollio from "../protfollio/Portfollio";
import About from "../about/About";
import Contact from "../contact/Contact";
import Blogs from "../blogs/Blogs";

export default function Hero_section() {
  return (
    <>
      <section
        className="pt-5 pb-5 mt-0 align-items-center d-flex "
        id="hero_section"
      >
        {/* <!-- style="height:100vh; background-size: cover; background-image: url(./img/jv1.png); --> */}

        <div className="container-fluid">
          <div className="row  justify-content-center align-items-center d-flex text-left h-100 ">
            <div className="col col-sm-12 col-md-8  h-50 py-4">
              <h1
                className="display-2  text-light mb-2 mt-5"
                data-aos="fade-down"
              >
                Welcome To My Site
              </h1>
              <p className="lead  text-light mb-5" data-aos="fade-left">
                I'm a <strong>Web Developer and Freelancer.</strong>
                <br />I have build lot's of Design UI and web sites.
              </p>
              <p>
                <Link
                  to="/contact"
                  className="btn bg-danger shadow-lg btn-round text-light btn-lg btn-rised"
                  data-aos="zoom-in"
                >
                  Get More..
                </Link>
              </p>

              <div className="btn-container-wrapper p-relative d-block text-center zindex-1">
                <Link
                  to="/about"
                  className="btn btn-link btn-lg   mt-md-3 mb-4 scroll align-self-center text-light"
                >
                  <i className="fa fa-angle-down fa-4x text-light" />
                </Link>
              </div>
            </div>
          </div>
          {/* social icons */}
          <div id="heresection_social_icons" data-aos="zoom-in-up">
            <i class="fa-brands fa-twitter"></i>
            <a href={"https://www.linkedin.com/in/jvishwas123/"}>
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href={"https://www.facebook.com/jagannath.vishwas.92/"}>
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href={"https://www.instagram.com/jaggu240/"}>
              <i class="fa-brands fa-instagram"></i>
            </a>
            <i class="fa-solid fa-envelope"></i>
          </div>
        </div>
      </section>
      {/*All Componets use here.. */}
      <Service />
      <Portfollio />
      <About />
      <Contact />
      <br />
      <br />
      <Blogs />
    </>
  );
}
