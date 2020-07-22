import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import logo from "./logo.svg";

import "./App.css";

function Head(props) {

  var [navBar, setPos] = useState(false);

  function menuNavBar() {
  
    var setValue = 1;
  
    if (navBar === false) {
  
      document.getElementById("menu").style.display = "initial";

      setPos(true);
  
    } else {
  
      document.getElementById("menu").style.display = "none";

      // document.getElementById("menu").style.height = "2";
      setPos(false);

    }

  }

  const preload = () => (
    <div class="preloader-area" id="preload">
    <div class="sk-cube-grid">
      <div class="sk-cube sk-cube1"></div>
      <div class="sk-cube sk-cube2"></div>
      <div class="sk-cube sk-cube3"></div>
      <div class="sk-cube sk-cube4"></div>
      <div class="sk-cube sk-cube5"></div>
      <div class="sk-cube sk-cube6"></div>
      <div class="sk-cube sk-cube7"></div>
      <div class="sk-cube sk-cube8"></div>
      <div class="sk-cube sk-cube9"></div>
    </div>
  </div>
  );
  // function CountDisplay(params) {
  //   const {count} = React.useContext(CountStateContext);
  //   return <div>{count}</div>
  // }
  {document.title = "Welcome to YANetwork"}
  return (
    <div>

      <div className="header-bar">

        <header>
          <div className="logo"><span className="logo1">YA</span><span className="logo2">Network</span></div>
          {/* <div className="logo"><img src={logo} style={{width:"5em",marginTop:"-1em"}}/></div> */}
          <div className="hd-col">
            <div  className="hd" onClick={() => window.scrollTo({top : 0, behavior : "smooth"})}>
              HOME
            </div>

            <div  className="hd" onClick={()=> window.scrollTo({ top: 500, behavior: 'smooth' })}>
              ABOUT
            </div>

            <div  className="hd" onClick={() =>  window.scrollTo({top : 1100 , behavior : "smooth"})}>
              CONTACT US
            </div>

            <Link to="/applications/" className="hd">
              APPLICATIONS
            </Link>
          </div>
          <div className="hamburg" onClick={menuNavBar}>
          <i className="fa fa-bars" style={{fontSize:"2em", marginTop:"-0.2em"}}></i>
          </div>
        </header>

        <div className="menu" id="menu">
          <div className="navbar" id="navbar">
            <hr />
            <div className="hdm home" onClick={() => window.scrollTo({top : 0, behavior : "smooth"})}>
              HOME
            </div>
            <hr />

            <div className="hdm" onClick={()=> window.scrollTo({top : 500, behavior : "smooth"})}>
              ABOUT
            </div>
            <hr />

            <div className="hdm" onClick={() =>  window.scrollTo({top : 1750, behavior : "smooth"})}>
              CONTACT US
            </div>
            <hr />

            <Link to="/applications/" className="hdm">
              APPLICATIONS
            </Link>
            <hr />
            {/* <Link to="/signin" className="hdm">SIGNIN</Link>
            <hr /> */}
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Head;
