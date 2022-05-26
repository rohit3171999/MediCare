import React from "react";
const Contact = () => {
  return (
    <>
      <section className="contactus-section">
          <div className="container">
          <div className="row">
              <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
              <div className="contactus-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                  Contact With Our<br/> Medicare Team.
                  </h1>
                  <p className="main-hero-para">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                  Etquia quis?Lorem ipsum, dolor sit amet consectetur 
                  </p>
                  <figure>
                      <img src="./image/medical-team.jpg" alt="contactUsImg" children className="img-fluid"/>
                  </figure>
              </div>
              {/* right side contactus */}
              <div className="contact-right col-12 col-lg-7">
                  <form method="POST">
                      <div className="row">
                      <div className="col-12 col-lg-6 contact">
                          <input type="text" name="" id="" className="form-control" placeholder="First Name"></input>
                      </div>
                      <div className="col-12 col-lg-6 contact">
                          <input type="text" name="" id="" className="form-control" placeholder="Last Name"></input>
                      </div>
                          
                      </div>
                  </form>
              </div>
              <div className="contact-right col-12 col-lg-7">
                  <form method="POST">
                      <div className="row">
                      <div className="col-12 col-lg-6 contact">
                          <input type="text" name="" id="" className="form-control" placeholder="First Name"></input>
                      </div>
                      <div className="col-12 col-lg-6 contact">
                          <input type="text" name="" id="" className="form-control" placeholder="Last Name"></input>
                      </div>
                          
                      </div>
                  </form>
              </div>


              </div>

              </div>
          </div>

          </div>
      </section>
    </>
  );
};
export default Contact;