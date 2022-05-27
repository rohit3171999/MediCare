import React, {useState} from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    const [show, setShow]= useState(false);
    // using react hooks to show the button will show functionality and adding a new className show in inspect when its value is true..
  return (
    <>
    <section classNameName="navbar-bg">
      <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container">
  {/* <div className="container-fluid"> Contain Some space from both ends.... */}
    <a className="navbar-brand" href="#">MediCare</a>
    <button className="navbar-toggler" type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" 
    aria-expanded="false" 
    aria-label="Toggle navigation"
    onClick={() => setShow(!show)}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${show ? "show" : ""}`}
    // ${show ? "show" : ""} this is a ternary operator to add className in inspect when its value is true 
    // id="navbarSupportedContent" beacuse when its value will false it will come immediately effect
    >
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul> me(margin end)--ms(margin start) */}
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="service">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#">Review</NavLink>
        </li>
        
        
      </ul>
      <form className="d-flex">
        
        <button className="btn btn-style" type="submit">Sign Up</button>
        <button className="btn btn-style btn-style-border" type="submit">Log In</button>
      </form>
    </div>
  </div>
</nav>
</section>
    </>
  );
};
export default Navbar;