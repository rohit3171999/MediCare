import React from "react";
import Navbar from "./navbar";
import Header from "./Header";
import HowItWorks from "./HowItWorks";
import Aboutus from "./Aboutus.js";
const App = () => {
  return (
    <>
     <Navbar />
{/* How to call navbar in App.Js */}
     <Header />
     <HowItWorks />
     <Aboutus />
    </>
  );
};
export default App;
