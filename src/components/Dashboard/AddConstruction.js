import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { letterSpacing } from "@mui/system";
import axios from "axios";
import UploadPhoto from "./ProfilePhoto";
import MultiplePhoto from "./MultiplePhoto";
import swal from 'sweetalert';  
import "./AddConstruction.css"


const SignUpSchema = Yup.object().shape({
  training_title: Yup.string().required("This field is required"),
  name_of_org: Yup.string().required("This field is required"),
  addrss_of_org: Yup.string().required("This field is required"),
  addrss_of_org: Yup.string().required("This field is required"),
  avail_training_period: Yup.string().required("This field is required"),
  timing_each_day: Yup.string().required("This field is required"),
  training_duration: Yup.string().required("This field is required"),
  no_of_stud_allow: Yup.string().required("This field is required"),
  food_logstic_expense: Yup.string().required("This field is required"),
  current_const_stage: Yup.string().required("This field is required"),
  subscription: Yup.string().required(),
});


const AddSite = (props) => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("mphoto"));
    if (items) {
      setItems(items);
    }
  }, []);

  const [photo, setPhoto] = useState([null]);
  return (
<>
      <Formik
        initialValues={{
          training_id: "",
          training_title: "",
          name_of_org: "",
          addrss_of_org: "",
          avail_training_period: "",
          timing_each_day: "",
          training_duration: "",
          no_of_stud_allow: "",
          food_logstic_expense: "",
          current_const_stage: "",
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => {
          window.localStorage.setItem("myData", JSON.stringify(values));

          let valu2 = values;

          var keys = Object.keys(items);

          var output = {};

          Object.keys(items).forEach(function (key) {
            output["site_photo_" + key] = items[key];
            console.log("output", output);
          });


          const result = { ...values, ...output };
          console.table("Data",result );
          axios.post(`https://localhost:44387/api/ConstructionSite`, result).then((res) => {
            console.log("Record Inserted");
            console.log(res.result);
          });
          alert("Record Inserted");
        }}
    >    
  



    {(formik) => (

    <div className="container ">
      <form className="row g-3 shadow mx-2 my-2 py-3 px-3" onSubmit={formik.handleSubmit}>
        <div className="col-12 text-center">
          <h4 className="text-center">Add Construction Site</h4>
        </div>
        <div className="col-12">
          <UploadPhoto />
        </div>
        <div className="col-md-6">
          <label
            htmlFor="inputEmail1"
            className="form-label"
            style={{ fontSize: "14px", fontWeight: "bold" }}
          >
             Training Id
          </label>
          <select
            className="form-control"
            aria-label="Default select example"
            defaultValue={""}
            name="training_id"

            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.training_id}
          >
            <option selected>select </option>
            <option value="1">1 </option>
            <option value="2">2 </option>
            <option value="3">3 </option>
            <option value="4">4</option>
            <option value="5">5 </option>
          </select>{" "}
          {formik.touched.training_id && formik.errors.training_id && (
            <span className="field_error">{formik.errors.training_id}</span>
          )}
        </div>
        <div className="col-md-6">
          <label
            htmlFor="inputPassword2"
            style={{ fontSize: "14px", fontWeight: "bold" }}
            className="form-label"
          >
             Training Title
          </label>
          <input
          type="text"
          className="form-control"
          name="training_title"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.training_title}
        />
        {formik.touched.training_title &&
          formik.errors.training_title && (
            <span className="field_error">
              {formik.errors.training_title}
            </span>
          )}
        </div>
       
        <div className="col-md-6">
          <label
            htmlFor="inputPassword3"
            style={{ fontSize: "14px", fontWeight: "bold" }}
            className="form-label"
          >
            Name Of Organization{" "}
          </label>
          <input
          type="text"
          className="form-control"
          name="name_of_org"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name_of_org}
        />
        {formik.touched.name_of_org && formik.errors.name_of_org && (
          <span className="field_error">{formik.errors.name_of_org}</span>
        )}        </div>
        <div className="col-md-6">
          <label
            htmlFor="inputPassword4"
            style={{ fontSize: "14px", fontWeight: "bold" }}
            className="form-label"
          >
            Address Of Organization{" "}
          </label>
          <input
          type="text"
          className="form-control"
          name="addrss_of_org"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.addrss_of_org}
        />
        {formik.touched.addrss_of_org && formik.errors.addrss_of_org && (
          <span className="field_error">
            {formik.errors.addrss_of_org}
          </span>
        )}        </div>
        <div className="col-md-6">
          <label
            htmlFor="inputPassword5"
            style={{ fontSize: "14px", fontWeight: "bold" }}
            className="form-label"
          >
            Available Training Period{" "}
          </label>
          <input
          type="text"
          className="form-control"
          name="avail_training_period"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.avail_training_period}
        />
        {formik.touched.avail_training_period &&
          formik.errors.avail_training_period && (
            <span className="field_error">
              {formik.errors.avail_training_period}
            </span>
          )}        </div>
        <div className="col-md-6">
          <label
            htmlFor="inputPassword6"
            style={{ fontSize: "14px", fontWeight: "bold" }}
            className="form-label"
          >
            Timing Of Each Day{" "}
          </label>
          <input
          type="text"
          className="form-control"
          name="timing_each_day"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.timing_each_day}
        />
        {formik.touched.timing_each_day &&
          formik.errors.timing_each_day && (
            <span className="field_error">
              {formik.errors.timing_each_day}
            </span>
          )}        </div>

        <div className="col-md-6">
          <label
            htmlFor="inputPassword7 "
            style={{ fontSize: "14px", fontWeight: "bold" }}
            className="form-label"
          >
            Duration Of Site Training{" "}
          </label>
          <input
          type="text"
          className="form-control"
          name="training_duration"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.training_duration}
        />
        {formik.touched.training_duration &&
          formik.errors.training_duration && (
            <span className="field_error">
              {formik.errors.training_duration}
            </span>
          )}        </div>
        <div className="col-md-6">
          <label
            htmlFor="inputPassword8"
            style={{ fontSize: "14px", fontWeight: "bold" }}
            className="form-label"
          >
            Number Of Student Allowed{" "}
          </label>
          <input
          type="text"
          className="form-control"
          name="no_of_stud_allow"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.no_of_stud_allow}
        />
        {formik.touched.no_of_stud_allow &&
          formik.errors.no_of_stud_allow && (
            <span className="field_error">
              {formik.errors.no_of_stud_allow}
            </span>
          )}        </div>
        <div className="col-md-6">
          <label
            htmlFor="inputPassword9"
            style={{ fontSize: "14px", fontWeight: "bold" }}
            className="form-label"
          >
            Food and Logistic Expenses{" "}
          </label>
          <input
          type="text"
          className="form-control"
          name="food_logstic_expense"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.food_logstic_expense}
        />
        {formik.touched.food_logstic_expense &&
          formik.errors.food_logstic_expense && (
            <span className="field_error">
              {formik.errors.food_logstic_expense}
            </span>
          )}        </div>

        <div className="col-md-6">
          <label
            htmlFor="inputPassword10"
            style={{ fontSize: "14px", fontWeight: "bold" }}
            className="form-label"
          >
            Current Construction Stage{" "}
          </label>
          <input
          type="text"
          className="form-control"
          name="current_const_stage"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.current_const_stage}
        />
        {formik.touched.current_const_stage &&
          formik.errors.current_const_stage && (
            <span className="field_error">
              {formik.errors.current_const_stage}
            </span>
          )}        </div>
        <div className="col-md-12 align-items-center py-3">
        <MultiplePhoto  />
        </div>
        <div className="flex">
        <button class="btn btn-primary  btn-lg float-right" type="submit">Add Construction Site</button>

        </div>
        

      </form>
    </div>
    )}
    </Formik>
    </>
  );
};

export default AddSite;
