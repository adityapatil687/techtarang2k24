import { useEffect, useState } from "react";

import ReactDOM from "react-dom";

import SponsorsCursoral from "../components/SponsorsCursoral";

const Home = () => {
  useEffect(() => {
    let element = document.getElementById("root");
    element.classList.add("my-md-auto");

    let pageTitle = document.getElementById("pageTitle");
    pageTitle.innerHTML = "Home";

    // let cursoral = document.getElementById("sponsors");
    // cursoral.classList.add("container");
    // cursoral.classList.add("pb-2");
  }, []);
  return (
    <>
      <div
        className="row align-items-center g-5 py-5 text-xl-start text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="col-xl-6">
          <h1 className="">Welcome to</h1>
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
            Tech तरंग 2024
          </h1>

          <p className="lead">
            Unlock the door to a realm where bytes and beats collide. VPKBIET's
            Department of Electronics and Telecommunication Engineering invites
            you to a technical extravaganza, where the symphony of innovation
            harmonizes with the rhythms of tradition, promising an unforgettable
            fusion of technology and cultural richness.
          </p>
        </div>
        <div className="col-10 col-sm-8 col-lg-6 mx-auto">
          <img
            src={require("../asset/trophy.png")}
            className="d-block mx-auto img-fluid"
            alt="Bootstrap Themes"
            width="400"
            height="200"
            loading="lazy"
          />
        </div>
        {/* <div className="col-10 col-sm-8 col-lg-6 mx-auto">
          <img
            src={require("../asset/HappyDance.jpg")}
            className="d-block mx-auto img-fluid"
            alt="Bootstrap Themes"
            width="auto"
            height="500"
            loading="lazy"
          />
        </div> */}
      </div>
      
        <SponsorsCursoral />
        
    </>
  );
};

export default Home;
