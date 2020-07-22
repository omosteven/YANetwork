import React from "react";

function About() {
  return (
    <div>
      <section
        className="section-abouts"
        data-aos="flip-left"
        aos-duration="500"
      >
        <div className="section-head" style={{ backgroundColor: "white" }}>
          WHO WE ARE
        </div>
        <div className="section-exp">
          Our value proposition is to secure the future of young generations in
          every good aspect of life.
        </div>
        <div className="section-box">
          <div className="section-topic">Our Vision</div>

          {/* <img src="./logo.svg" className="about-img"/> */}
          {/* <hr className="section-rule" /> */}
          <div className="section-content">
            <div className="section-content-in">
              (1) To have a generation of children who are not affected and
              brainwashed by their background but carry positive, leadership &
              problem-solving, and impact-making mindsets
            </div>
            <div className="section-content-in">
              (2) To have a generation of youths and young adults who will be
              right minded about life and affect the right mind to every aspect
              of their lives.
            </div>
            <div className="section-content-in">
              (3) To have a generation that will put the subjection of their
              lives in God and not in their own capabilities.
            </div>
          </div>
        </div>

        <div className="section-box">
          <div className="section-topic">Our Mission</div>

          <hr className="section-rule" />

          <div className="section-content">
            <div className="section-content-in">
              (1) To provide orientate their mindset on greatness, value and
              non-self underestimation.
            </div>
            <div className="section-content-in">
              (2) To help young ones to discover their vision, purpose, great
              desires and right career path
            </div>
            <div className="section-content-in">
              (3) To empower people's minds on the law of Echo in leadership -
              Impact & touch lives, the good results will bounce back to you.
            </div>
            <div className="section-content-in">
              (4) To lay the foundation of all successes to be God.
            </div>
            <div className="section-content-in">
              (5) To provide mentorship, progress tracking & hold webinar
              programmes that will aid enlightenments
            </div>
          </div>
        </div>

        <div className="section-box">
          <div className="section-topic">Our Plan</div>

          <hr className="section-rule" />

          <div className="section-content">To be lorem supm lorem supm</div>
        </div>
      </section>
    </div>
  );
}

export default About;
