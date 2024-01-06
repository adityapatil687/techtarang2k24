import { NavLink } from "react-router-dom";
const EventCard = ({ Key, Data }) => {
  return (
    <>
      {/* <div class="row mt-2"  data-aos="fade-up" data-aos-duration="1000">
        <div class="col-md-12 ">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <h3 class="mb-0">{Data.name}</h3>
              <div class="mb-1 text-body-secondary">{Data.date}</div>
              <p class="card-text mt-2">
                {Data.subtxt}
              </p>
              <div class="">
                <div class="h6">{Data.prizefirst}</div>
                <div class="h6">{Data.prizesecond}</div>
                <div class="h6">{Data.prizethird}</div>
              </div>
              <NavLink
                to={Data.reglink}
                class="icon-link gap-1 icon-link-hover stretched-link"
              >
                Register
              </NavLink>
            </div>
            <div class="col-auto d-none d-lg-block my-auto">
              <img
                class="bd-placeholder-img my-2 mx-2 rounded"
                width="260"
                height="290"
                src={Data.img}
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              ></img>
            </div>
          </div>
        </div>
      </div> */}
      <div className="row ">
        <div
          className="col-12 col-sm-10 mx-sm-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="card mt-2 mb-2 bg-light-subtle">
            <div className="row g-0">
              <div className="col-md-10 order-md-1 order-2">
                <div className="card-body">
                  <h5 className="card-title">{Data.name}</h5>
                  <p className="card-text">{Data.date}</p>
                  {/* <p className="card-text">{Data.subtxt}</p> */}
                  <p className="card-text text-muted">
                    {Data.subtxt}
                    <br />
                    <div className="d-sm-flex">
                      {Key == 5 || Key == 6 ? (
                        <></>
                      ) : (
                        <>
                          <span>1st Prize </span> : {Data.prizefirst}/-,&nbsp;
                          <br />
                          <span>2nd Prize </span> : {Data.prizesecond}/-,&nbsp;
                          <br />
                          <span>3rd Prize </span> : {Data.prizethird}/-
                        </>
                      )}
                    </div>
                  </p>

                  <NavLink
                    to={Data.link}
                    className="btn btn-primary text-center"
                    style={{ backgroundColor: "#6610f2", border: "none" }}
                  >
                    Register
                  </NavLink>
                </div>
              </div>
              <div className="col-md-2 col-8 mx-auto my-sm-auto order-md-2 order-1 ">
                <img src={Data.img} alt={Data.name} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;
