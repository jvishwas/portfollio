import React, { useState, useEffect } from "react";
import "./weather.css";
// import VideoCon from "../component/Navbar/video/VideoCon"
// import rain from "../../public/mp4/rain.mp4";
// import rain from "./weather1.mp4"



export default function Weather() {
  const [state, setState] = useState(null);
  const [search, setSearch] = useState("Delhi");
  const [wind, setWind] = useState("");
  const [weather, setWeather] = useState([{ data: "" }]);
  const [searchdata, setSearchData] = useState("");

  // date and time
  let myDate = new Date().toString();

  const weatherData = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchdata}&units=metric&appid=f8f77c9aaeffa90a1693aa745d9d4958`;
    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setState(data.main);
        setWind(data.wind);
        setWeather(data.weather);
      })
      .catch((err) => console.log("API is not fetch", err));
  };
  useEffect(() => {
    weatherData();
  }, [searchdata]);

  const SearchData = () => {
    setSearchData(search);
    console.log(searchdata);
  };

  return (
    <>
    
      {/* <VideoCon id="myVideo" /> */}
      <video autoPlay style={{width:"100vw", minHeight:"100vh" ,objectFit:"cover", zIndex:"-1"}}  muted loop id="myVideo" >
          {/* <source src={rain} type="video/mp4" /> */}
          <source src={"../assets/videos/weather1.mp4"} type="video/mp4" />

          
        </video>
       
      <section className="container-fluid mt-5"  id="content" data-aos="zoom-in">
        <h3 className="text-center fs-1 text-light fw-bolder">Weather's</h3>
        <div className="myclass">
        <input
          className="form-control border-light text-light  border-1 w-50 mt-1"
          id="search_box"
          type="search"
          placeholder="Search City Weather"
          name="weather"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <span>
        <button id="search_btn" className="form-control border-light border-1 mx-2 mt-1" onClick={SearchData}>
        Search
        </button>
          </span>
        </div>

        <div className="row w-8 mx-auto my-2 py-2">
          <div className="col col-12 col-lg-11 my-3">
            <div className="w-50 mx-auto">
              <i
                className="fa-solid fa-cloud-sun fa-beat-fade mt-2 my-2 text-warning"
                style={{
                  fontSize: "7rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              ></i>
            </div>
          </div>
          {/* make here condition if data available then show data */}
          <div id="box_container">
          {!state ? (
            <>
              <p className="text-center fs-2 fw-bold text-danger">
                Data not Found !!
              </p>
              <p className="text-center  fw-bold text-danger ">
                Please Check City Name
              </p>
            </>
          ) : (
            <>
              <div className="col col-12  col-lg-12 text-center text-light">
                <p
                  style={{
                    textTransform: "capitalize",
                    fontSize: "2rem",
                    fontWeight: "700",
                  }}
                  className="px-2 text-warning"
                >
                  {searchdata}
                </p>
                {/* Weather */}
                {weather.map((item) => (
                  <p
                    className="text-center fs-4 text-light text-capitalize fw-bolder "
                    key={item.id}
                  >
                    {item.main} || {item.description}
                  </p>
                ))}
                <h3 className="fw-bolder text-light">
                 {state.temp}
                  <sup>o</sup>C
                </h3>
              </div>
              <div
                className="col text-center text-light fw-bolder"
                style={{ fontSize: "1.2rem", fontWeight: "500" }}
              >
                <p>
                  Min {state.temp_min} || Max {state.temp_max}
                </p>
                <p>
                  Wind {wind.speed} || Deg {wind.deg}
                </p>
                <p>
                  Pressure:{state.pressure} || {myDate}
                </p>
              </div>
            </>
          )}
          </div>
        </div>
      </section>
    
    </>
  );
}
