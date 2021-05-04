import React, { useState } from "react";
import "../App.css";
import Navbar from "../Components/Navbar";
import { BsChevronLeft } from "react-icons/bs";
import Courses from "../Components/Courses";
import { Link } from "react-router-dom";
import {
  section_One,
  section_Two,
  section_Three,
  section_Four,
  section_Five,
  section_Six,
  section_Seven,
} from "../Helper/section";
import { useHistory } from "react-router";
const Home = () => {
  const [sectionOne, setSectionOne] = useState({ section_One });
  const [sectionTwo, setSectionTwo] = useState({ section_Two });
  const [sectionThree, setSectionThree] = useState({ section_Three });
  const [sectionFour, setSectionFour] = useState({ section_Four });
  const [sectionFive, setSectionFive] = useState({ section_Five });
  const [sectionSix, setSectionSix] = useState({ section_Six });
  const [sectionSeven, setSectionSeven] = useState({ section_Seven });
  console.log(sectionSeven.section_Seven);
  return (
    <div>
      <Navbar />
      <div className="container">
        <blockquote className="text-secondary allign-middle mt-3">
          <BsChevronLeft /> Back to all courses
        </blockquote>
        <div className="row my-5">
          <div className="col-7">
            <h1 className="fw-bolder fs-1 pb-2 h1">Logic</h1>
            <h4>
              Stretch your analytic muscles with knights,knaves,logic gates, and
              more!
            </h4>
            <p className="text-secondary py-2">
              The beginning of our introductory math journey is Logic. Through
              these challenging problem solving exercises, you'll construct the
              critical thinking skills that are the basis for mathematical
              reasoning.
            </p>
            <p className="text-secondary py-2">
              You'll use limited information to make predictions – eliminating
              the impossible to uncover the truth. This course builds up to some
              truly mind-bending challenges!
              <a href="#!" class="card-link text-secondary">
                Read more
              </a>
            </p>
            <div className="">
              <a href="#!" class="card-link text-secondary pt-4">
                View prerequisities and next steps
              </a>
            </div>
          </div>
          <div className="col-5">
            <div className="card">
              <div
                style={{
                  width: "10rem",
                  height: "10rem",
                  display: "block",
                  margin: "auto",
                }}
                className="text-center"
              >
                <img
                  src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/logic-HzWHci.png?width=254"
                  alt=""
                  className="img-fluid my-4"
                />
              </div>
              <div className="container mt-5">
                <div className="row">
                  <div className="col-6">
                    <div className="row">
                      <h2>37</h2>
                    </div>
                    <div className="row">
                      <p className="text-secondary">Interactive quizzes</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="col-6">
                      <div className="row">
                        <h2>265+</h2>
                      </div>
                      <div className="row">
                        <p className="text-secondary text-nowrap">
                          Concepts and exercise
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="d-grid gap-2 my-4">
                  <button class="btn btn-dark" href="" type="button">
                    <Link className="nav-link text-white" to="/practice">
                      Start Course
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-auto">
        <Courses
          rank={sectionOne.section_One.rank}
          title={sectionOne.section_One.title}
          description={sectionOne.section_One.description}
          cards={sectionOne.section_One.cards}
          free={sectionOne.section_One.free}
        />
        <Courses
          rank={sectionTwo.section_Two.rank}
          title={sectionTwo.section_Two.title}
          description={sectionTwo.section_Two.description}
          cards={sectionTwo.section_Two.cards}
          free={sectionTwo.section_Two.free}
        />
        <Courses
          rank={sectionThree.section_Three.rank}
          title={sectionThree.section_Three.title}
          description={sectionThree.section_Three.description}
          cards={sectionThree.section_Three.cards}
          free={sectionThree.section_Three.free}
        />
        <Courses
          rank={sectionFour.section_Four.rank}
          title={sectionFour.section_Four.title}
          description={sectionFour.section_Four.description}
          cards={sectionFour.section_Four.cards}
        />
        <Courses
          rank={sectionFive.section_Five.rank}
          title={sectionFive.section_Five.title}
          description={sectionFive.section_Five.description}
          cards={sectionFive.section_Five.cards}
        />
        <Courses
          rank={sectionSix.section_Six.rank}
          title={sectionSix.section_Six.title}
          description={sectionSix.section_Six.description}
          cards={sectionSix.section_Six.cards}
        />
        <Courses
          rank={sectionSeven.section_Seven.rank}
          title={sectionSeven.section_Seven.title}
          description={sectionSeven.section_Seven.description}
          cards={sectionSeven.section_Seven.cards}
        />
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="row">
            <div className="col-sm-8 offset-sm-2 ">
              <p className="text-secondary border-bottom pb-2">NEXT STEPS</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 offset-sm-2">
              <div className="d-flex">
                <div className="me-4 d-flex align-items-center">
                  <img
                    src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/math_fundamentals-KD5NF3.png?width=92"
                    alt="..."
                  />
                </div>
                <div className="d-flex flex-sm-column">
                  <div>
                    <h2>Mathematical Fundamentals</h2>
                  </div>
                  <div>
                    <p className="text-secondary">
                      The essential tools for mastering algebra, logic, and
                      number theory!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 ">
              <div className="d-flex flex-sm-column">
                <div className="d-flex">
                  <div className="me-4 d-flex align-items-center">
                    <img
                      src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/cs_fundamentals-B2P79W.png?width=92"
                      alt="..."
                    />
                  </div>
                  <div className="d-flex flex-sm-column">
                    <div>
                      <h2>Computer Science Fundamentals</h2>
                    </div>
                    <div>
                      <p className="text-secondary">
                        Wrap your mind around computational thinking, from
                        everyday tasks to algorithms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
// background-image: url("https://ds055uzetaobb.cloudfront.net/brioche/chapter/logic-HzWHci.png?width=254");
