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
    
          <div className="col-md-12 p-3 text-start">
         
            <form className="row form" onSubmit={handleSubmit}>

            <div className="col-12 text-center">
            <h4 className="text-center">Training Landing  </h4>
          </div>

              <div className="col-md-6">
                <label htmlFor="training_title" className="form-label">
                Training title
                </label>
                  <input
                    type="text"
                    className="form-control"
                    id="training_title"
                    placeholder="Training title"
                    value={values.training_title}
                  />
                </div>

              <div className="col-md-6">
                <label htmlFor="stud_dob" className="form-label">
                Branch
                </label>
                  <input
                    type="text"
                    className="form-control"
                    value={values.branch}
                    id="branch"
                    placeholder="Branch"
                  />
              </div>

              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                Area of Intrest
                </label>
                <input
                type="text"
                className="form-control"
                value={values.area_of_intrest}
                id="area_of_intrest"
                placeholder="Area of Intrest"
              />
              </div>
              <div className="col-md-6">
                <label htmlFor="skills" className="form-label">
                  Skill
                </label>
                <input
                type="text"
                className="form-control"
                value={values.skills}
                id="skills"
              />
               
              </div>

              <div className="col-md-6">
                <label htmlFor="feature" className="form-label">
                Feature
                </label>
                  <input
                    type="text"
                    className="form-control"
                    value={values.feature}
                    id="feature"
                  />
                </div>

              <div className="col-md-6">
                <label htmlFor="pinCode" className="form-label">
                  Pin Code
                </label>
                  <input
                    type="text"
                    className="form-control"
                    value={values.pinCode}
                    id="pinCode"
                  />
                </div>

              <div className="col-md-6">
                <label htmlFor="expert_name" className="form-label">
                  Trainer
                </label>
                <input
                    type="text"
                    className="form-control"
                    value={values.expert_name}
                    id="expert_name"
                  />
               
              </div>
              <div className="col-md-6">
                <label htmlFor="currency" className="form-label">
                Currency
                </label>
                <input
                type="text"
                className="form-control"
                value={values.currency}
                id="currency"
              />
            
              </div>
              <div className="col-md-6">
                <label htmlFor="experience" className="form-label">
                  Price
                </label>
                <input
                type="number"
                className="form-control"
                value={values.price}
                id="price"
              />
               
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
