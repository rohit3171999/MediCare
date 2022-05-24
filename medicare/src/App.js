import React from "react";
import Navbar from "./navbar";
import Header from "./Header";
import HowItWorks from "./HowItWorks";
const App = () => {
  return (
    <>
     <Navbar />
{/* How to call navbar in App.Js */}
     <Header />
     <HowItWorks />
    </>
  );
};
export default App;
