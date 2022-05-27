import React from "react";
const Footer = () => {
  return (
    <>
       <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h2>Contact Us</h2>
                  <ul>
                    <li>
                    <a href="#"> <i class="fas fa-phone"></i> +91-9873753135 </a>
                    </li>
                    <li>
                    <a href="#"> <i class="fas fa-envelope"></i> rohit3171999@gmail.com </a>
                    </li>
                    <li>
                    <a href="#"> <i class="fas fa-envelope"></i>rohit_cs19@gla.ac.in</a>
                    </li>
                    <li>
                    <a href="#"> <i class="fas fa-map-marker-alt"></i> Mathura, India-281406 </a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Our Services</h2>
                  <ul>
                    <li>
                      <a href="#">Dental Care</a>
                    </li>
                    <li>
                      <a href="#">Diagonosis</a>
                    </li>
                    <li>
                      <a href="#">Cardiology</a>
                    </li>
                    <li>
                      <a href="#">amulance Service</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Quick Links</h2>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Servive</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Review</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Follow Us</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                      <i class="fab fa-facebook-f fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      {/* <a href="https://www.instagram.com/thapatechnical/" target="_thapa"> */}
                        <i class="fab fa-instagram fontawesome-style"></i>
                      {/* </a> */}
                    </div>
                    <div className="col-3 mx-auto">
                      <i class="fab fa-youtube fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <i class="fab fa-twitter fontawesome-style"></i>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  Copyright @ 2021 Medicare. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;