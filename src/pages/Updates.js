import { useEffect, useState } from "react";

const Updates = () => {
    const [Data, setData] = useState([
      // {
      //   id: "1",
      //   header: "Notification 1",
      //   text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      // },
      // {
      //   id: "2",
      //   header: "Notification 2",
      //   text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      // },
      // {
      //   id: "3",
      //   header: "Notification 3",
      //   text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      // },
    ]);
  useEffect(() => {
    let element = document.getElementById("root");
    element.classList.add("my-auto");

    let pageTitle = document.getElementById("pageTitle");
    pageTitle.innerHTML = "Updates";
  }, []);

  useEffect(() => {
    const rootElement = document.getElementById("root");

    if (Data.length > 0) {
      rootElement.classList.remove("my-auto");
    } else {
      rootElement.classList.add("my-auto");
    }
  }, [Data]);

  return (
    <>
      {Data.length > 0 ? (
        Data.map((currentIndex) => {
          return(
            <div className=" mt-4">
              <UpdatesCard Data={currentIndex} />
            </div>
          );
        })
      ) : (
        <>
          <div
            className=""
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <p className="text-center">
              No updates yet{String.fromCharCode(9889)}
            </p>
          </div>
        </>
      )}
    </>
    
  );
};
export default Updates;

const UpdatesCard = ({ Data }) => {
  return (
    <>
      <div
        className="card mb-3 bg-light-subtle"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="card-header">{Data.header}</div>
        <div className="card-body">
          {/* <h5 className="card-title">Light card title</h5> */}
          <p className="card-text">{Data.text}</p>
        </div>
      </div>
    </>
  );
};
