import React from "react";
import Navbar from "../Components/Navbar";
import { BsChevronLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
const Quiz = () => {
  return (
    <div>
      <Navbar />
      <div className="row mt-0">
        <div className="col-sm-3 ">
          <div class="row bg-dark d-block">
            <div className="col-sm-5 text-white  offset-sm-7 full">
              <br />
              <br />
              <BsChevronLeft />
              <Link className=" text-white" to="/">
                Back
              </Link>
              <br />
              <br />
              Logic
            </div>
          </div>
        </div>
        <div className="col-sm-9  full">
          <div className="container">
            <div className="row mt-5">
              <div className="col-sm-8">
                <h5 className="fw-normal">
                  Joseph, Kevin, and Nicholas are 3 brothers, and the following
                  statements about them are all true:
                </h5>
                <ul className="mt-4">
                  <li className="fw-normal">Joseph is not the youngest.</li>
                  <li className="fw-normal">Kevin is the oldest.</li>
                  <li className="fw-normal">Nicholas is not the oldest</li>
                </ul>
                <h4 className="fs-5">
                  Drag the characters into the dotted boxes.
                </h4>
                <div className="container">
                  <div>
                    <div className="quizdragbox text-secondary me-2"></div>
                    <div className="quizdragbox me-2"></div>
                    <div className="quizdragbox text-secondary"></div>
                  </div>
                  <div className="mt-4">
                    <div draggable="true" className="pictureBox1 me-2"></div>
                    <div draggable="true" className="pictureBox2 me-2"></div>
                    <div draggable="true" className="pictureBox3 me-2"></div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <button
                        class="btn btn-white border border-dark text-dark px-5"
                        type="button"
                      >
                        Hide Explanation
                      </button>
                    </div>
                    <div className="col-sm-6">
                      <button
                        class="btn btn-secondary text-white  px-10"
                        type="button"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <p className="text-center">Lesson 1</p>
                <h3 className="text-center">Warmup Puzzle</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Quiz;
