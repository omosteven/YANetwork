import React from "react";
import Head from "./header";
import "./body.css";
import Footer from "./footer";
import ContactUs from "./contactus";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./about";

function Home() {
  AOS.init();
  return (
    <div>
      <Head />
      <div>
        <div className="banner" data-aos="zoom-out" aos-duration="100" style={{ zIndex: "-1" }} >
          <div>
            <hr style={{ marginTop: "0em" }} />
            <div className="welcome">Welcome to Young Accelerate Network</div>
            <div className="welcome1">
              The future of our young ones is our concern
            </div>
          </div>
        </div>

        <About/>

        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
