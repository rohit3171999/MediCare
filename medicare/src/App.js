import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Service from "./pages/Service";

const App = () => {
  return (
    <>
    <Routes>
    <Route exact path="/" element={<Home />}></Route>
    <Route path="/contact" element={<Contact />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/erro" element={<Error />}></Route>
    <Route path="/service" element={<Service />}></Route>

    
     
     </Routes>
    </>
  );
};
export default App;
