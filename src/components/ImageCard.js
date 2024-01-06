import { useEffect } from "react";
import { NavLink } from "react-router-dom";
const ImageCard = ({ Key, Data }) => {
  useEffect(() => {
   
  }, []);
  return (
    <>
      <div class="col"  data-aos="fade-up" data-aos-duration="1000">
        <img
          src={Data.img}
          class="img-fluid rounded"
          alt="Photo 1"
        />
      </div>
    </>
  );
};

export default ImageCard;
