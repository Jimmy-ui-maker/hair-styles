import React from "react";

export default function Footer() {
  return (
    <footer id="footer">
      <div class="container">
        <div class="copyright">
          &copy; Copyright
          <strong>
            <span> Hair Styles</span>
          </strong>
          . All Rights Reserved
        </div>
        <div class="credits">
          Designed by <a href="/"> Bala Jimmy Yakubu</a>
        </div>
        <div className="d-flex justify-content-end fixed-bottom">
          <a href="" className="scroll-back ">
            <i className=" bi bi-arrow-up btn  rounded-5"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
