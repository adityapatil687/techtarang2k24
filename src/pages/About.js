import { useEffect } from "react";
import { Link } from "react-router-dom";
const About = () => {
  useEffect(() => {
    let pageTitle = document.getElementById("pageTitle");
    pageTitle.innerHTML = "About";
    let element = document.getElementById("root");
    element.classList.add("my-auto");
  }, []);

  const teamMembers = [
    // { name: "Member Name", imgSrc: require("../asset/user.png") },
    // { name: "Member Name", imgSrc: require("../asset/user.png") },
    // { name: "Member Name", imgSrc: require("../asset/user.png") },
    // { name: "Member Name", imgSrc: require("../asset/user.png") },
  ];

  return (
    <>
      {teamMembers.length > 0 ? (
        <>
          <div data-aos="fade-up" data-aos-duration="1000">
            <div>
              <div className="text-center">
                <h3 className="my-4">Team Members</h3>
                <div className="row text-center">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="col-6 col-sm-3 p-2">
                      <img
                        alt={`contributor-${index}`}
                        src={member.imgSrc}
                        className="img-fluid rounded-circle"
                      />
                      <p className="h5 p-2">{member.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <p className="text-center">
              Stay tuned{String.fromCharCode(9889)}
              <br/>
              <span className="text-body-secondary">
                <Link
                  to="https://www.instagram.com/techtarang.2k24/"
                  className="custom-link text-primary-emphasis"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow us on Instagram @techtarang.2k24
                </Link>
              </span>
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default About;
