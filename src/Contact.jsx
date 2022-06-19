import React, { useState } from "react";

const Contact = () => {
  const [myData, Dataset] = useState(
    {
      fname: "",
      phone: "",
      email: "",
      message: "",

    }
  );
  const getData = (event) => {
    const { name, value } = event.target;
    Dataset((preval) => { //inline function
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`${myData.phone}`);
    console.log(myData)
  }

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">
          Contact Us
        </h1>
      </div>
      <div className="container">
        <div className="row">
          <form onSubmit={formSubmit}>
            <div className="col-md-6 col-10 mx-auto">
              <div className="mb-3">
                <label for="exampleFormControlInput1"  className="form-label">Full Name</label>
                <input type="text" className="form-control" name="fname" value={myData.name} onChange={getData} placeholder="Enter Your name" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1"  className="form-label">Phone</label>
                <input type="number" className="form-control" name="phone" value={myData.phone} onChange={getData} placeholder="Enter Your Contact" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1"  className="form-label">Email address</label>
                <input type="email" className="form-control" name="email" value={myData.email} onChange={getData} placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1"  className="form-label">Message</label>
                <textarea className="form-control" name="message" value={myData.message} onChange={getData} id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-primary" type="submit">Submit form</button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;