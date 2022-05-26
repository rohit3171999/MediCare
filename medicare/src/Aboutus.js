import React, { useState } from "react";
import howToUseApp from "./API/HowToUse";
import howToUseApp2 from "./API/HowToUse2";

const Aboutus = () => {
    const [aboutData, setAboutData]=useState(howToUseApp);
    const [aboutData2, setAboutData2]=useState(howToUseApp2);
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
              {/* using map funtion for loop */}
              {aboutData.map((curElem)  => {
                  const {id, title, info}=curElem;
                  return (<>
                  <div className="row our-services-info" key={id}>
                  <div className="col-1 our-services-number">{id}</div>
                  <div className="col-10 our services-data">
                      <h2>{title}</h2>
                      <p>{info}</p>
                  </div>
              </div>
                  </>)

              })}
              
              <br />
              <button className="btn-style btn-style-border">learn more</button>
          </div>
      </div>

      </div>

      </section>

      {/* -------------------------------------------------------------- */}
      {/* 2nd part of about us */}
      <section className="common-section our-services our-services-rightside ">
      <div className="container mb-5">
      <div className="row">
      
          {/* 1 section right side image */}
          <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center
          align-item-start flex-column">
              <h3 className="mini-title">-- Support In any Languages</h3>
              <h1 className="main-heading">World class supporting <br/>available 24/7</h1>
              {/* using map funtion for loop */}
              {aboutData2.map((curElem1)  => {
                  const {id, title, info}=curElem1;
                  return (<>
                  <div className="row our-services-info" key={id}>
                  <div className="col-1 our-services-number">{id}</div>
                  <div className="col-10 our services-data">
                      <h2>{title}</h2>
                      <p>{info}</p>
                  </div>
              </div>
                  </>)

              })}
              
              <br />
              <button className="btn-style btn-style-border">learn more</button>
          </div>
          <div className="col-12 col-lg-5 our-service-rightside-img">
          <img src="./image/main21.jpg" alt="aboutusIMg"></img>
      </div>
      {/* image section */}
      </div>

      </div>

      </section>

    </>
  );
};
export default Aboutus;