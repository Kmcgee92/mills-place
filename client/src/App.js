import { useEffect, useState } from "react";
import first from "./millsPlace.jpeg";
import second from "./second.jpeg";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Grid } from "@mui/material";

function App() {
  return (
    <div className="App">
      <header
        style={{
          fontWeight: "900",
          fontFamily: "cursive",
          fontSize: "80px",
        }}
      >
        Millies Place
      </header>
      <h1>Thank You Millie you are the best!</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "80vw", paddingTop: "100px" }}>
          <Carousel autplay infiniteLoop transitionTime={500}>
            <div>
              <img src={second} alt="asdasd" />
            </div>
            <div>
              <img src={first} alt="asdasd" />
            </div>
          </Carousel>
        </div>
      </div>
      <div className="App-header"></div>
    </div>
  );
}

export default App;
