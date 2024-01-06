import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ImageCard from "../components/ImageCard";

import placeholder_600x400 from "../asset/placeholder_600x400.svg";

const Gallery = () => {
  useEffect(() => {
    let pageTitle = document.getElementById("pageTitle");
    pageTitle.innerHTML = "Gallery";
    let element = document.getElementById("root");
    element.classList.add("my-auto");
  }, []);

  const [data, setData] = useState([
    // {
    //   id: "1",
    //   img: require('../asset/3000x2000 Canvas.png'),
    // },
    // {
    //   id: "2",
    //   img: placeholder_600x400,
    // },
    // {
    //   id: "3",
    //   img: placeholder_600x400,
    // },
    // {
    //   id: "4",
    //   img: placeholder_600x400,
    // },
  ]);
useEffect(()=>{console.log(data)},[])
  return (
    <div className="row row-cols-2 row-cols-md-3 g-4">
    {data.length > 0 ? (
      data.map((currentIndex) => (
        <ImageCard key={currentIndex.id} Data={currentIndex} />
      ))
    ) : (
      <div className="mx-auto my-auto"  data-aos="fade-up" data-aos-duration="1000">
        <p className="text-center">Stay tuned{String.fromCharCode(9889)}</p>
      </div>
    )}
  </div>
  );
};

export default Gallery;
