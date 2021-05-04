import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light text-primary bg-light  border border-outline-secondary">
      <div className="container align-items-center">
        <a className="navbar-brand align-middle me-5 h2 mt-1" href="#!">
          BRILLIANT
        </a>
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <a className="nav-link align-middle" href="#!">
              TODAY
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link align-middle text-dark" href="#!">
              COURSES
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link align-middle" href="#!">
              PRACTICE
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item me-4 ">
            <button
              className="nav-link align-middle btn px-5 py-1 btn-rounded btn-outline-primary"
              href="#!"
            >
              Log in
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link align-middle px-5 py-1 text-white btn btn-rounded btn-primary"
              href="#!"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
