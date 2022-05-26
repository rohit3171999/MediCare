import React, { useState } from "react";
import workApi from "./API/workApi.js"
const HowItWorks = () => {


    const [workData, setWorkData]= useState(workApi);
    console.log(workData);




  return (
    <>
    <section>
        <div className="work-container container">
        {/* cotainer class decides the width of container is 80%  */}
        <h1 className="main-heading text-center">How does it works</h1>
        <div className="row">
        {
            workData.map((curEle) => {
                const{id, logo, title, info}=curEle;
                return (
                    <>
                    <div className="col-12 col-lg-4 text-center work-container-subdiv">
        <i class={`fontawesome-style ${logo}`}></i>
        {/* <i class={`sontawesome-style ${logo}`}></i> this is template string in new version in JS16 */}
        <h2 className="sub-heading">{ title}</h2>
        <p className="main-hero-para w-100">{ info}</p>
        </div>
                    </>
                )

            } )
        }
        {/* workData.map((curEle) => {} it is type of of a loop in react js repeat div when when curElement getting a new elemnet */}
        {/* The map() function is used to iterate over an array and manipulate or change data items. 
        In React, the map() function is most commonly used for rendering a list of data to the DOM. */}

        

        

        </div>

        </div>
    </section>
    </>
  );
};
export default HowItWorks;