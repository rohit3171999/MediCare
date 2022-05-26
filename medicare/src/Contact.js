import React from "react";
const Contact = () => {
  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">Contact our<br/> Medicare Team.</h1>
                  <p className="main-hero-para">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, quia quis? 
                  Ipsa officia ad deserunt voluptate quam, nisi odio officiis tempora recusandae voluptate
                  </p>
                  <figure>
                    <img src="./image/medical-team.jpg" 
                    alt="contactUsImg" 
                    className="img-fluid"/>
                  </figure>
                </div>
                {/* right side contact form */}
                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input type="text" name="" id="" className="form-control" placeholder="First Name"/>
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input type="text" name="" id="" className="form-control" placeholder="Last Name"/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input type="text" name="" id="" className="form-control" placeholder="Phone Number"/>
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input type="text" name="" id="" className="form-control" placeholder="Email Id"/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-field">
                        <input type="text" name="" id="" className="form-control" placeholder="Add Address"/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-field">
                        <input type="text" name="" id="" className="form-control" placeholder="Enter your message"/>
                      </div>
                    </div>
                    <div class="form-check form-checkbox-style">
                        <input class="form-check-input" type="checkbox" value="" 
                        id="flexCheckChecked"  />
                         <label class="form-check-label" className="main-hero-para">
                              I agree that the Medicare may contact me at the email address or phone number above.
                           </label>
                    </div>
                    <button type="submit" className="btn btn-style w-100">Submit</button>
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