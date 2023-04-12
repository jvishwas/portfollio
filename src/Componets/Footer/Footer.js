import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <section id="footer">
        <div className="container ">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
              <ul
                className="list-unstyled list-inline social text-center"
                id="aa"
              >
                <li className="list-inline-item">
                  <a href="">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="" target="_blank">
                    <i className="fa fa-envelope"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
              <p>
                <u>
                  <a href="/">Jagannath vishwas!</a>
                </u>{" "}
                This Site Build For Portfollio Own Purpose Only And It's
                Developed By
              </p>
              <p className="h6">©2022 All right Reversed.Vishwas</p>
            </div>
            <hr />
          </div>
        </div>
      </section>
    </>
  );
}
