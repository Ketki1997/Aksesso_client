import React, { useState, useRef, useEffect } from "react";
import {useNavigate,useHistory} from "react-router-dom"

import Axios from "axios";

import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"
import "./style2.css";
import { isValidInputTimeValue } from "@testing-library/user-event";
import { v4 as uuid } from 'uuid';

  

const Final = ({values}) => {


  const unique_id = uuid();
  const small_id = unique_id.slice(0,8)
  const history = useHistory();


  const [data, setData] = useState({
    values
  });
const user = {
  TrainingId: small_id,
    training_title:values.training_title,
    branch:values.branch,
    area_of_intrest: values.area_of_intrest,
    skill:values.skills,
    expert_name:values.expert_name,
    designation:values.designation,
    duration:values.duration,
    price:values.price,
     currency:values.currency,
    feature:values.feature
};

console.log("User data",user);

 
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

   
    console.log(values);
    console.log(user);
  
  }
    

    

  const showLoading = () =>
    loading ? <div className="alert alert-info">Loading...</div> : "";

  return (  
    <>
      <div className="container-fluid">
      <form className="form row g-3 shadow mx-2 my-2 py-3 px-3" onSubmit={handleSubmit}>
          <div className="col-12 text-center">
                  <h4 className="text-center">Training Landing Page</h4>
             </div>
              <div className="col-md-6">
                <label htmlFor="stud_name" className="col-xs-3">
                Training title
                </label>
                <div className="col-xs-9">
                  <input
                    type="text"
                    className="form-control"
                    id="training_title"
                    placeholder="Training title"
                    value={values.training_title}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <label htmlFor="stud_dob" className="col-xs-3">
                Branch
                </label>
                <div className="col-xs-9">
                  <input
                    type="text"
                    className="form-control"
                    value={values.branch}
                    id="branch"
                    placeholder="branch"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <label htmlFor="email" className="col-xs-3">
                  Email
                </label>
                <div className="col-xs-9">
                  <input
                    type="text"
                    className="form-control"
                    value={values.area_of_intrest}
                    id="email"
                    placeholder="Your area_of_intrest"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="gender" className="col-xs-3">
                  Gender
                </label>
                <div className="col-xs-9">
                  <input
                    type="text"
                    className="form-control"
                    value={values.gender}
                    id="gender"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <label htmlFor="posttal_address" className="col-xs-3">
                  posttal_address
                </label>
                <div className="col-xs-9">
                  <input
                    type="text"
                    className="form-control"
                    value={values.posttal_address}
                    id="posttal_address"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <label htmlFor="pinCode" className="col-xs-3">
                  Pin Code
                </label>
                <div className="col-xs-9">
                  <input
                    type="text"
                    className="form-control"
                    value={values.pinCode}
                    id="pinCode"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <label htmlFor="qualification" className="col-xs-3">
                  Qualification
                </label>
                <div className="col-xs-9">
                  <input
                    type="text"
                    className="form-control"
                    value={values.qualification}
                    id="qualification"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="intrest" className="col-xs-3">
                  Area_of_intrest
                </label>
                <div className="col-xs-9">
                  <input
                    type="text"
                    className="form-control"
                    value={values.area_of_intrest}
                    id="intrest"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="experience" className="col-xs-3">
                  experience
                </label>
                <div className="col-xs-9">
                  <input
                    type="text"
                    className="form-control"
                    value={values.experience}
                    id="experience"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="experience" className="col-xs-3">
                name_of_organization
                </label>
                <div className="col-xs-9">
                  <input
                    type="text"
                    className="form-control"
                    value={values.name_of_organization}
                    id="experience"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="experience" className="col-xs-3">
                designation
                </label>
                <div className="col-xs-9">
                  <input
                    type="text"
                    className="form-control"
                    value={values.designation}
                    id="experience"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="experience" className="col-xs-3">
                Resume
                </label>
                <div className="col-xs-9">
                  <input
                    type="text"
                    className="form-control"
                    value={values.resume}
                    id="resume"
                  />
                </div>
              </div>

              <div className="d-flex justify-content-center mx-4 mb-5 mb-lg-4">
              <button variant="primary"  className="btn btn-primary btn-lg" type="submit">Submit
            </button>                 
               </div>
        </form>
      </div>
    </>
  );
};

export default Final;
