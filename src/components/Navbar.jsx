import React from "react";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-md shadow-sm py-1"
      data-aos="fade-down"
      data-aos-delay="5000"
    >
      <div className="container">
        <img src="/img/fff2.jpg" className=" rounded-2" width={30} height={30} alt="" />
        <a href="/" className="navbar-brand fw-bolder text-uppercase">
          Hair Styles
        </a>
        <button
          className="navbar-toggler shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end align-center"
          id="main-nav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#about" className="nav-link fw-bold">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="/nStyles" className="nav-link fw-bold">
                Nigerian Styles
              </a>
            </li>
            <li className="nav-item">
              <a href="/xStyles" className="nav-link fw-bold">
                X-Mas Styles
              </a>
            </li>
            <li className="nav-item">
              <a href="/cStyles" className="nav-link fw-bold">
                Children&apos;s Styles
              </a>
            </li>
            <li className="nav-item">
              <a href="/mStyles" className="nav-link fw-bold">
                More Styles
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
