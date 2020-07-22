import React from "react";
import "./import.css";
import "./App.css";

function Footer() {
  return (
    <div>
      <div className="" style={{marginTop:"5em"}}>
        <footer>
          <div className="footer-top">
            <i className="fa fa-copyright"></i>
            <span> Copyright 2020, YANetwork</span>
          </div>

          <div className="all-footer-content-mobile">
            <div className="subscribe-mobile">
              <div className="joinList">
               SUBSCRIBE BELOW TO JOIN OUR MAILING LIST
              </div>
              <input
                type="email"
                placeholder=" Enter your email here..."
                className="sub-input"
              />
              <span>
                <button className="subscribe-btn">SUBSCRIBE</button>
              </span>
            </div>
            <div className="hd-col1-mobile">
              <div className="socialMedia-mobile">
                <span className="each-icon">Follow Us </span>
                <span className="each-icon follow"><i className="fa fa-facebook"></i></span>
                <span className="each-icon follow"><i className="fa fa-twitter"></i></span>
                <span className="each-icon follow"><i className="fa fa-instagram"></i></span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default Footer;
