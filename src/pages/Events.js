import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import EventCard from "../components/EventsCard";
const Events = () => {
  useEffect(() => {
    let pageTitle = document.getElementById("pageTitle");
    pageTitle.innerHTML = "Events";
    let element = document.getElementById("root");
    element.classList.add("my-auto");
  }, []);

  const [data, setData] = useState([
    {
      id: "1",
      name: "Hackthon",
      date: "22 Jan 2023",
      subtxt:
        "Ignite your coding prowess in our Hackathon! A 8-hour sprint of innovation, collaboration, and problem-solving. Dive into challenges, unleash creativity, and be part of a coding marathon where ideas come to life. Join the revolution – hack the future !",
      prizefirst: "₹ 10,000",
      prizesecond: "₹ 7,000",
      prizethird: "₹ 4,000",
      reglink:
        "",
      img: require("../asset/Hackthon.png"),
    },
    {
      id: "2",
      name: "Project Competition",
      date: "22 Jan 2023",
      subtxt:
        "Elevate your projects in our Project Competition! Showcase your innovation, problem-solving skills, and creativity. Join a competition that celebrates excellence in project development. Be prepared to present, impress, and compete for recognition",
      prizefirst: "₹ 10,000",
      prizesecond: "₹ 7,000",
      prizethird: "₹ 4,000",
      reglink:
        "",
      img: require("../asset/projects.png"),
    },
    {
      id: "3",
      name: "Startup Pitch",
      date: "22 Jan 2023",
      subtxt:
        "Fuel your entrepreneurial spirit in our Startup Pitch! A stage where ideas take flight, innovations find a voice, and dreams turn into business ventures. Craft your compelling pitch, captivate investors, and set the scene for your startup success story",
      prizefirst: "₹ 5,000",
      prizesecond: "₹ 3,000",
      prizethird: "₹ 2,000",
      reglink:
        "",
      img: require("../asset/startup2.png"),
    },
    {
      id: "4",
      name: "Tech Hunt",
      date: "22 Jan 2023",
      subtxt:
        "Embark on a tech adventure with our Tech Hunt! Navigate through digital landscapes, solve clues, and unlock hidden treasures of innovation. Sharpen your tech-savvy skills, decode challenges, and be the first to discover the future. It's not just a hunt; it's a journey into the tech unknown. Ready, set, decode !",
      prizefirst: "₹ 7,000",
      prizesecond: "₹ 5,000",
      prizethird: "₹ 3,000",
      reglink:
        "",
      img: require("../asset/TechHunt.png"),
    },
    {
      id: "5",
      name: "Game Zone",
      date: "22 Jan 2023",
      subtxt:
        "Immerse yourself in the ultimate gaming experience at our Game Zone! Level up your excitement, challenge your skills, and conquer virtual realms. From heart-pounding adventures to friendly competitions, this is your playground for digital glory. Get ready to press play, compete, and redefine your gaming journey !",
        prizefirst: "",
        prizesecond: "",
        prizethird: "",
      reglink:
        "",
      img: require("../asset/gaming.png"),
    },
    {
      id: "6",
      name: "Cultural Night",
      date: "22 Jan 2023",
      subtxt:
        "Unleash the magic of diversity at our Cultural Night! A kaleidoscope of performances, traditions, and artistic expressions. Join us under the stars as cultures collide, music fills the air, and the stage comes alive. Experience a night of unity, celebration, and the vibrant tapestry of human expression",
        prizefirst: "",
        prizesecond: "",
        prizethird: "",
      reglink:
        "",
      img: require("../asset/cultural.png"),
    },
  ]);

  return (
    <>
      {data != null &&
        data.map((currentIndex) => (
          <EventCard Key={currentIndex.id} Data={currentIndex} />
        ))}
    </>
  );
};

export default Events;
