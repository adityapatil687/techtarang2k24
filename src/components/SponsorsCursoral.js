import { NavLink } from "react-router-dom";
import bootstraplogo from "../asset/bootstraplogo.svg";
import AliceCarousel from "react-alice-carousel";
import SponsorCursoralCard from "./SponsorCursoralCard";
import 'react-alice-carousel/lib/alice-carousel.css'
const SponsorsCursoral = () => {

  const items = [
    <SponsorCursoralCard bootstraplogo={bootstraplogo}/>,
    <SponsorCursoralCard bootstraplogo={bootstraplogo}/>,
    <SponsorCursoralCard bootstraplogo={bootstraplogo}/>,
    <SponsorCursoralCard bootstraplogo={bootstraplogo}/>,
  ]
  return (
    <div  data-aos="fade-up" data-aos-duration="1000">
      <p className="text-center fw-bold">Sponsors</p>
      {/* <div
        id="sponsorsCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="1000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={bootstraplogo}
              className="d-block mx-auto"
              height="80"
              width="auto"
              alt="Sponsor 1"
            />
          </div>

          <div className="carousel-item">
            <img
              src={bootstraplogo}
              className="d-block mx-auto"
              height="80"
              width="auto"
              alt="Sponsor 2"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev my-auto"
          type="button"
          data-bs-target="#sponsorsCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next my-auto"
          type="button"
          data-bs-target="#sponsorsCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
      <AliceCarousel activeIndex={0} autoPlay disableButtonsControls autoPlayInterval={1000} disableDotsControls infinite mouseTracking items={items}/>
    </div>
  );
};

export default SponsorsCursoral;
