import React, { useState, useRef, useEffect } from "react";
import {useNavigate,useHistory} from "react-router-dom"
import studentMain from "../../../StudentDashboard/studentMain";
import Axios from "axios";
import SignUp from "../images/Regi2.png";
import Student from "../images/Student.svg";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"
import "./style2.css";
import { isValidInputTimeValue } from "@testing-library/user-event";
import { v4 as uuid } from 'uuid';

  

const Final = ({values}) => {
  const history = useHistory();


  const [data, setData] = useState({
    values
  });





  


    // POST request using axios inside useEffect React hook

// empty dependency array means this effect will only run once (like componentDidMount in classes)
const  area_of_intrests = window.localStorage.getItem("area_of_intrests");
console.log("area_of_intrests",area_of_intrests);
const  resume_path = window.localStorage.getItem("resume_path");


let newArray = area_of_intrests.toString();

console.log("newArray",newArray);

let name=values.stud_name;
var id1=name.split(' ').join('').split('');
var text= id1.slice(0,6).join('')

var v= values.stud_dob;
var arr=v.split("-");
var id2=arr[0]

let small_id = text.concat(id2);

console.log("small_id data",small_id);


const user = {
  stud_id:small_id,
  stud_name: values.stud_name,
  stud_dob: values.stud_dob,
  email: values.email,
  gender: values.gender,
  phone_num: values.phone_num,
  posttal_address: values.posttal_address,
  pinCode: values.pinCode,
  qualification: values.qualification,
  Area_of_intrest: newArray,
  experience: values.experience,
  name_of_organization:values.name_of_organization,
  designation:values.designation,
  resume:resume_path
};

console.log("User data",user);

 
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    window.sessionStorage.setItem("Student", JSON.stringify(user));
    console.log(small_id);
    fetch('https://localhost:44387/api/Student',{
      method:'POST',
      headers:{ "Content-Type": "application/json",charset:"utf-8"},
      body:JSON.stringify(user)
    }).then((res) => {
      console.log("Record Inserted");
      alert("Record Inserted")
      console.log(res);   
      history.push("/studentMain");
      console.log("Result",res);

    });
 

    
  
    console.log(user);
  
  }
    

    

  const showLoading = () =>
    loading ? <div className="alert alert-info">Loading...</div> : "";

  return (
    <>
      <div class="container-fluid  card shadow">
        <div class="row">
          <div class="col-md-12">
            <img src={Student} className="img-fluid" alt="Sample image" />
            <h4
              className=" heading text-center fw-bolder mb-3"
              style={{ fontColor: "#4481eb" }}
            >
              Student Registeration
            </h4>

            <form class="form-horizontal" onSubmit={handleSubmit}>
              <div class="form-group">
                <label for="stud_name" class="col-xs-3">
                  Name
                </label>
                <div class="col-xs-9">
                  <input
                    type="text"
                    class="form-control"
                    id="stud_name"
                    placeholder="Your Name"
                    value={values.stud_name}
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="stud_dob" class="col-xs-3">
                  Date of birth
                </label>
                <div class="col-xs-9">
                  <input
                    type="date"
                    class="form-control"
                    value={values.stud_dob}
                    id="stud_dob"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="email" class="col-xs-3">
                  Email
                </label>
                <div class="col-xs-9">
                  <input
                    type="email"
                    class="form-control"
                    value={values.email}
                    id="email"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="gender" class="col-xs-3">
                  Gender
                </label>
                <div class="col-xs-9">
                  <input
                    type="text"
                    class="form-control"
                    value={values.gender}
                    id="gender"
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="posttal_address" class="col-xs-3">
                  Posttal Address
                </label>
                <div class="col-xs-9">
                  <input
                    type="text"
                    class="form-control"
                    value={values.posttal_address}
                    id="posttal_address"
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="pinCode" class="col-xs-3">
                  Pin Code
                </label>
                <div class="col-xs-9">
                  <input
                    type="text"
                    class="form-control"
                    value={values.pinCode}
                    id="pinCode"
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="qualification" class="col-xs-3">
                  Qualification
                </label>
                <div class="col-xs-9">
                  <input
                    type="text"
                    class="form-control"
                    value={values.qualification}
                    id="qualification"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="intrest" class="col-xs-3">
                  Area of Intrest
                </label>
                <div class="col-xs-9">
                  <input
                    type="text"
                    class="form-control"
                    value={newArray}
                    id="intrest"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="experience" class="col-xs-3">
                  Experience
                </label>
                <div class="col-xs-9">
                  <input
                    type="text"
                    class="form-control"
                    value={values.experience}
                    id="experience"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="experience" class="col-xs-3">
                Name of Organization
                </label>
                <div class="col-xs-9">
                  <input
                    type="text"
                    class="form-control"
                    value={values.name_of_organization}
                    id="experience"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="experience" class="col-xs-3">
                Designation
                </label>
                <div class="col-xs-9">
                  <input
                    type="text"
                    class="form-control"
                    value={values.designation}
                    id="experience"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="experience" class="col-xs-3">
                Resume
                </label>
                <div class="col-xs-9">
                  <input
                    type="text"
                    class="form-control"
                    value={resume_path}
                    id="resume"
                  />
                   <a href={resume_path}  target="_blank"> Preview </a>
                </div>
              </div>

              <div className="d-flex justify-content-center mx-4 mb-5 mb-lg-4">
              <button variant="primary"  className="btn btn-primary btn-lg" type="submit">Submit
            </button>                 
               </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Final;
