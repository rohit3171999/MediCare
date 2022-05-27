import React, {useState} from "react";
const Contact = () => {
  const [userData, setUserData]=useState({
    firstName:"",
    lastnName:"",
    phone:"",
    email:"",
    address:"",
    message:"",
  });
  let name, value;
  const postUserData=(event) => {
    name=event.target.name;
    value=event.target.value;
    setUserData({...userData, [name]:value});

  };

  // connect with firebase
  const submitData=async (event) =>{
    event.preventDefault();
    const{
      firstName,
      lastnName,
      phone,
      email,
      address,
      message}=userData;
      
    const res= fetch('https://medicare-7697e-default-rtdb.firebaseio.com/userDataRecord.json', {
    method : "POST",
    Headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      firstName,
      lastnName,
      phone,
      email,
      address,
      message,

    })
  }
    );
    if(res){
      setUserData({
        firstName:"",
        lastnName:"",
        phone:"",
        email:"",
        address:"",
        message:"",
      });
      alert("Data Stored");
    }else{
      alert("Please Fill The Data");
    }
  };

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
                  Depending on the care that is needed, a person staying in the hospital may interact with many different staff members every day. If health care practitioners do not introduce themselves and explain their role, 
                  the person or family members should ask them to do so.
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
                        <input type="text" 
                        name="firstName" 
                        id="" 
                        className="form-control" 
                        placeholder="First Name"
                        value={userData.firstName}
                        onChange={postUserData}  
                        />
                        
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input type="text" 
                        name="lastName" 
                        id="" 
                        className="form-control" 
                        placeholder="Last Name"
                        value={userData.lastName}
                        onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input type="text" 
                        name="phone" 
                        id="" 
                        className="form-control" 
                        placeholder="Phone Number"
                        value={userData.phone}
                        onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input type="text" 
                        name="email" 
                        id="" 
                        className="form-control" 
                        placeholder="Email Id"
                        value={userData.email}
                        onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-field">
                        <input type="text" 
                        name="address" 
                        id="" 
                        className="form-control" 
                        placeholder="Add Address"
                        value={userData.address}
                        onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-field">
                        <input type="text" 
                        name="message" 
                        id="" 
                        className="form-control" 
                        placeholder="Enter your message"
                        value={userData.message}
                        onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div class="form-check form-checkbox-style">
                        <input class="form-check-input" type="checkbox" value="" 
                        id="flexCheckChecked"  />
                         <label class="form-check-label" className="main-hero-para">
                              I agree that the Medicare may contact me at the email address or phone number above.
                           </label>
                    </div>
                    <button type="submit" className="btn btn-style w-100" onClick={submitData}>Submit</button>
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