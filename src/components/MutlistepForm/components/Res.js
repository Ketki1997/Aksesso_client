import React, { useState } from "react";
import { Form, Card, Button,Row,Container,Col} from "react-bootstrap";
import validator from "validator";
import Register from "../images/Register.jpg"
import "./style.css";

    const Res = ({ nextStep, handleFormData, values }) => {
        //creating error state for validation
        const [error, setError] = useState(false);
      
        // after form submit validating the form data using validator
        const submitFormData = (e) => {
          e.preventDefault();
          console.log(e);
      
          // checking if value of first name and last name is empty show error else take to step 2
          if (
            validator.isEmpty(values.stud_name) ||
            validator.isEmpty(values.stud_dob) ||
            validator.isEmpty(values.email) ||
            validator.isEmpty(values.gender) ||
            validator.isEmpty(values.phone_num) 
      
          ) {
            setError(true);
          } else {
            nextStep();
          }
          console.log(e)

        };
  return (
    <div>
    <section className="vh-75">
  <div className="container h-auto m-2">
    <div className="row d-flex justify-content-center align-items-center h-auto">
      <div className="col-lg-12 col-sm-10  offset-2">
        <div className="card text-black" style={{borderRadius: 25}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />
          </div>
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p className="text-center h1 fw-bold mb-2 mx-1 mx-md-4 mt-2">Sign up</p>
                <form className="mx-1 mx-md-4" >
                  <div className="d-flex flex-row align-items-center mb-2">
                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input className="form-control"
                      style={{ border: error ? "2px solid red" : "" }}
                      name="stud_name"
                      defaultValue={values.stud_name}
                      type="text"
                      placeholder="stud_name"
                      onChange={handleFormData("stud_name")}
                    />
                    {error ? (
                      <div className="form-text" style={{ color: "red" }}>
                        This is a required field
                      </div>
                    ) : (
                      ""
                    )}
                      <label className="form-label" htmlFor="form3Example1c">Student Name</label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-2">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                    <input className="form-control"
                    style={{ border: error ? "2px solid red" : "" }}
                    name="stud_dob"
                    defaultValue={values.stud_dob}
                    type="date"
                    placeholder="stud_dob"
                    onChange={handleFormData("stud_dob")}
                  />
                  {error ? (
                    <div className="form-text" style={{ color: "red" }}>
                      This is a required field
                    </div>
                  ) : (
                    ""
                  )}
                  <label className="form-label" htmlFor="form3Example3c">stud_dob</label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-2">
                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                    <input className="form-control"
                    style={{ border: error ? "2px solid red" : "" }}
                    name="email"
                    defaultValue={values.email}
                    type="text"
                    placeholder="Email"
                    onChange={handleFormData("email")}
                  />
                  {error ? (
                    <div className="form-text" style={{ color: "red" }}>
                      This is a required field
                    </div>
                  ) : (
                    ""
                  )}
                      <label className="form-label" htmlFor="form3Example4c">Gender</label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-2">
                    <i className="fas fa-key fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                    <select type="select" aria-label="Default select example"
        name="gender"
        defaultValue={values.gender}
        onChange={handleFormData("gender")}>
          <option>Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          </select>
        {error ? (
          <div className="form-text" style={{ color: "red" }}>
            This is a required field
          </div>
        ) : (
          ""
        )}
                      <label className="form-label" htmlFor="form3Example4cd">Gender</label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-2">
                    <i className="fas fa-key fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                    <input className="form-control"
          style={{ border: error ? "2px solid red" : "" }}
          name="phone_num"
          defaultValue={values.phone_num}
          type="text"
          placeholder="phone_num"
          onChange={handleFormData("phone_num")}
        />
        {error ? (
          <div className="form-text" style={{ color: "red" }}>
            This is a required field
          </div>
        ) : (
          ""
        )}    <label className="form-label" htmlFor="form3Example4cd">phone_num</label>
                    </div>
                  </div>

                 
                  <div className="d-flex justify-content-center mx-4 mb-5 mb-lg-4">
                    <button type="button" className="btn btn-primary btn-lg">Register</button>
                  </div>
                </form>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
  };

export default Res;