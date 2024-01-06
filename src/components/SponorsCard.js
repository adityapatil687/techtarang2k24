import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const SponsorsCard = ({ Key, Data }) => {
  useEffect(() => {
    let pageTitle = document.getElementById("pageTitle");
    pageTitle.innerHTML = "Sponsors";
  }, []);

  useEffect(() => {
    console.log("Key => " + Key);
  }, [Key]);

  return (
    <>
      {/* {Key == 1 ? (
        <>
          <div className="carousel-item active">
            <div className="row align-items-center g-5 py-5 text-xl-start text-center">
              <div className="col-xl-6">
                
                <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
                  {Data.name}
                </h1>

                <p className="lead">{Data.subtxt}</p>
              </div>
              <div className="col-10 col-sm-8 col-lg-6 mx-auto">
                <img
                  src={Data.img}
                  className="d-block mx-lg-auto img-fluid"
                  alt="Bootstrap Themes"
                  width="700"
                  height="500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="carousel-item">
            <div className="row align-items-center g-5 py-5 text-xl-start text-center">
              <div className="col-xl-6">
                
                <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
                  {Data.name}
                </h1>

                <p className="lead">{Data.subtxt}</p>
              </div>
              <div className="col-10 col-sm-8 col-lg-6 mx-auto">
                <img
                  src={Data.img}
                  className="d-block mx-lg-auto img-fluid"
                  alt="Bootstrap Themes"
                  width="700"
                  height="500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </>
      )} */}

      <div className="row align-items-center g-5 py-5 text-xl-start text-center">
        <div className="col-xl-6">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
            {Data.name}
          </h1>

          <p className="lead">{Data.subtxt}</p>
        </div>
        <div className="col-10 col-sm-8 col-lg-6 mx-auto">
          <img
            src={Data.img}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default SponsorsCard;
