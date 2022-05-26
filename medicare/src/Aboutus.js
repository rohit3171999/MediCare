import React from "react";
const Aboutus = () => {
  return (
    <>
      <section className="common-section our-services">
      <div className="container mb-5">
      <div className="row">
      <div className="col-12 col-lg-5 text-center our-service-leftside-img">
          <img src="./image/mainimg.jpg" alt="aboutusIMg"></img>
      </div>
          {/* 1 section right side image */}
          <div className="col-12 col-lg-7 our-services-list">
              <h3 className="mini-title">-- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY</h3>
              <h1 className="main-heading">How to use the App?</h1>
              <div className="row our-services-info">
                  <div className="col-1 our-services-number">1</div>
                  <div className="col-10 our services-data">
                      <h2>Sign in</h2>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                      Etquia quis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?</p>
                  </div>
              </div>
              <br />
              <button className="btn-style btn-style-border">learn more</button>
          </div>
      </div>

      </div>

      </section>
    </>
  );
};
export default Aboutus;