import React from "react";
import { FaLock } from "react-icons/fa";
const Courses = ({ rank, title, description, cards, free }) => {
  // console.log(cards);
  return (
    <div>
      <div className="d-flex flex-sm-column">
        <div className="d-flex">
          <div className="me-4 d-flex align-items-center">
            <p
              style={{ backgroundColor: "#e1f5fe" }}
              className="text-primary btn rounded-circle text-center w-50"
            >
              {rank}
            </p>
          </div>
          <div className="d-flex flex-sm-column">
            <div>
              <h2>{title}</h2>
            </div>
            <div>
              <p className="text-secondary">{description}</p>
            </div>
          </div>
        </div>
        {/* <div className="d-flex box justify-content-between flex-wrap my-5 mx-5"> */}
        <div className="box">
          {cards.map((card) => {
            console.log(free);
            return (
              <div className="card my-5" style={{ width: "20rem" }}>
                <div>
                  <img
                    src={card.img}
                    style={{
                      width: "10rem;",
                      height: "10rem",
                      zindex: card.free ? "1" : "-1",
                    }}
                    class="card-img-top img-fluid"
                    alt="..."
                  />
                  <span
                    style={{
                      backgroundColor: free
                        ? "rgba(0,0,0,0,0)"
                        : "rgba(0,0,0,0.75)",
                      position: card.free ? "" : "absolute",
                      display: card.free ? "none" : "block",
                      top: card.free ? "" : "0",
                      left: card.free ? "" : "0",
                      width: "100%",
                      height: "10rem",
                    }}
                  >
                    <p
                      className="text-white text-center mt-4"
                      style={{ display: free ? "none" : "block" }}
                    >
                      <FaLock />
                    </p>
                    <p
                      className="text-white text-center"
                      style={{ display: free ? "none" : "block" }}
                    >
                      Included with Brilliant Premium
                    </p>
                  </span>
                  {/* <span
                    style={{
                      backgroundImage: `${card.img}`,
                      width: "10rem",
                      height: "10rem",
                      backgroundPosition: "center",
                      display: "block",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                    }}
                  ></span> */}
                </div>

                <div className="card-body">
                  <h5 className="card-title">{card.cardTitle}</h5>
                  <p className="text-wrap">{card.cardDescription}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Courses;
