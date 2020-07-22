import React from "react";
import "./contactus.css";
import axios from "axios";

function ContactUs() {
  axios.create({
    usrl: "localhost:1234/test",
    responseType: "json"
  });

  function send() {
    document.getElementById("sendBtn").innerHTML = "SENDING";
    var formData = {
      
      fullName : "ade",
      
      email : "omos",
      
      msg : "hello"
    
    };
    
    const urlLink = "http://localhost:5000/contactus/send";
    
    axios({

      method: 'POST',

      body: formData,

      data: formData,

      url: urlLink
      
      })
      .then( function (resp){
        console.log("done!",resp);
      })
      .catch(function (err){
        console.log("error",err);
      })
  }
  return (
    <div>
      <section
        className="section-contactus"
        data-aos="zoom-in"
        aos-duration="500"
      >
        <div className="contact" style={{backgroundColor:"white"}}>CONTACT US</div>
        <div className="page">
          <div className="cardBody-contact contactus">
            <div className="hi">
              <p className="hi2">Please kindly fill in the form below</p>
            </div>
            <div className="inputBox-contact">
              {/* <div>Firstname</div> */}
              <input
                type="text"
                className="input-contact"
                placeholder="Your full name"
              />
            </div>

            <div className="inputBox-contact">
              <input
                type="text"
                className="input-contact"
                placeholder="Your contact email"
              />
            </div>

            <div className="inputBox-contact">
              <input
                type="text"
                className="input-contact"
                placeholder="Your Message"
                style={{ height: "8em" }}
              />
            </div>

            <div className="below">
              <div className="submitBox">
                <button
                  className="submitBtn-contact"
                  onClick={send}
                  id="sendBtn"
                >
                  SEND
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
