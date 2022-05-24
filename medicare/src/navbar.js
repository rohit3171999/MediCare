import React, {useState} from "react";
const Navbar = () => {
    const [show, setShow]= useState(false);
    // using react hooks to show the button will show functionality and adding a new class show in inspect when its value is true..
  return (
    <>
    <section className="navbar-bg">
      <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container">
  {/* <div class="container-fluid"> Contain Some space from both ends.... */}
    <a class="navbar-brand" href="#">MediCare</a>
    <button class="navbar-toggler" type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" 
    aria-expanded="false" 
    aria-label="Toggle navigation"
    onClick={() => setShow(!show)}>
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class={`collapse navbar-collapse ${show ? "show" : ""}`}
    // ${show ? "show" : ""} this is a ternary operator to add class in inspect when its value is true 
    // id="navbarSupportedContent" beacuse when its value will false it will come immediately effect
    >
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
      {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul> me(margin end)--ms(margin start) */}
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Book</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Review</a>
        </li>
        
        
      </ul>
      <form class="d-flex">
        
        <button class="btn btn-style" type="submit">Sign Up</button>
        <button class="btn btn-style btn-style-border" type="submit">Log In</button>
      </form>
    </div>
  </div>
</nav>
</section>
    </>
  );
};
export default Navbar;