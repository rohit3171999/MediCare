import React from "react";
const Header = () => {
  return (
    <>
     <header>
     <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
              <h1 className="display-2">
                A Pharmacy for all your needs <br /> Healthcare For Life.
              </h1>
              <p className="main-hero-para">
              A Healthy Lifestyle Has Many Benefits Not Only For The Body But For The Mind Too. 
              Also, If You Follow A Healthy Lifestyle Then You Can Reduce The Risk Of Having Cancer, 
              Heart Disease, Diabetes, Obesity, And Osteoporosis. 
              To Sum It Up, We Can Say That There Are Various Benefits Of Living A Healthy Lifestyle.
              </p>
              <h3>Healthcare For Life</h3>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="rounded-pill w-50  w-lg-75 me-3 p-2 form-control-text"
                  placeholder="Enter Your Email"
                />
                <div className="input-group-button">Get it now</div>
              </div>
            </div>
            {/*  --------------- main header right side--------------  */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center 
            align-items-center main-herosection-images">
              <img
                src="./image/main22.jpg"
                alt="heroimg"
                className="img-fluid"
              />
              <img
                src="./image/child.jpg"
                alt="heroimg4"
                className="img-fluid main-hero-img2"
              />
            </div>
          </div>
        </section>
     </header>
    </>
  );
};
export default Header;