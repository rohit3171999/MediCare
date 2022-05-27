import React from "react";
import { NavLink } from "react-router-dom";
const Error404 = () => {
  return (
    <>
      <div id="notfound">
          <div className="notfound">
              <div className="notfound-404">
                  <h1>404</h1>
              </div>
              <h2>We are Sorry, Page not found.</h2>
              <p>Error 404: Oops! The page you are looking for cannot be found</p>
              <NavLink to="/">back to homepage</NavLink>
          </div>
      </div>
    </>
  );
};
export default Error404;
