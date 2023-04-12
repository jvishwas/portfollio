import React from "react";

const Media = () => {
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner ">
          <div className="carousel-item active h-100 ">
            <video
              loop
              controls=""
              muted
              autoPlay
              style={{ width: "100vw", marginLeft: "5px" }}
            >
              <source
                src={"./assets/videos/techo_world3.mp4"}
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Media;
