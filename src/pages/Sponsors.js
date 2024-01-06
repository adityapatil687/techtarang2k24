import { useEffect, useState } from "react";
import SponsorsCard from "../components/SponorsCard";
import AliceCarousel from "react-alice-carousel";

const Sponsors = () => {
  useEffect(() => {
    let pageTitle = document.getElementById("pageTitle");
    pageTitle.innerHTML = "Sponsors";
    let element = document.getElementById("root");
    element.classList.remove("mt-4");
    element.classList.add("my-md-auto");
  }, []);

  const [data, setData] = useState([]);

  const items = data.map((currentIndex) => (
    <SponsorsCard key={currentIndex.id} Data={currentIndex} />
  ));

  return (
    <>
      {data.length > 0 ? (
        <AliceCarousel
          items={items}
          autoPlay
          disableButtonsControls
          disableDotsControls
          infinite
          autoPlayInterval={1000}
        />
      ) : (
        <div className="mx-auto my-auto" data-aos="fade-up" data-aos-duration="1000">
          <p className="text-center">Will be displayed soon{String.fromCharCode(9889)}</p>
        </div>
      )}
    </>
  );
};

export default Sponsors;
