import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { letterSpacing } from "@mui/system";
import axios from "axios";

const SignUpSchema = Yup.object().shape({
  stud_name: Yup.string().required("This field is required"),
  stud_dob: Yup.string().required("This field is required"),
  email: Yup.string().required("This field is required"),
  gender: Yup.string().required("This field is required"),
  phone_num: Yup.string().required("This field is required"),
  posttal_address: Yup.string().required("This field is required"),
  pinCode: Yup.string().required("This field is required"),
  Area_of_intrest: Yup.string().required("This field is required"),
});

const ProfileUpdate = (props) => {
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
          stud_name: "",
          stud_dob: "",
          gender: "",
          email: "",
          phone_num: "",
          posttal_address: "",
          pinCode: "",
          Area_of_intrest: "",
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => {
          window.localStorage.setItem("values", JSON.stringify(values));

          console.table("Data", values);
          axios
            .post(`https://localhost:44387/api/ConstructionSite`, values)
            .then((res) => {
              console.log("Record Inserted");
              console.log(res.result);
            });
          alert("Record Inserted");
        }}
      >
        {(formik) => (
          <div className="container ">
            <form
              className="row g-3 shadow mx-2 my-2 py-3 px-3"
              onSubmit={formik.handleSubmit}
            >
              <div className="col-12 text-center">
                <h4 className="text-center">Profile Update</h4>
              </div>
              <div className="col-12"></div>

              <div className="col-md-6">
                <label
                  htmlFor="inputPassword2"
                  style={{ fontSize: "14px", fontWeight: "bold" }}
                  className="form-label"
                >
                  Student name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="stud_name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.stud_name}
                />
                {formik.touched.stud_name && formik.errors.stud_name && (
                  <span className="field_error">{formik.errors.stud_name}</span>
                )}
              </div>

              <div className="col-md-6">
                <label
                  htmlFor="stud_dob"
                  style={{ fontSize: "14px", fontWeight: "bold" }}
                  className="form-label"
                >
                  Student DOB{" "}
                </label>
                <input
                  type="date"
                  style={{
                    backgroundColor: "white",
                    border: " 1px solid #b7b7b7",
                  }}
                  className="form-control"
                  name="stud_dob"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.stud_dob}
                />
                {formik.touched.stud_dob && formik.errors.stud_dob && (
                  <span className="field_error">{formik.errors.stud_dob}</span>
                )}
              </div>

              <div className="col-md-6">
                <label
                  htmlFor="inputEmail1"
                  className="form-label"
                  style={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  Gender
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  defaultValue={""}
                  name="gender"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.gender}
                >
                  <option selected>select gender </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>{" "}
                {formik.touched.gender && formik.errors.gender && (
                  <span className="field_error">{formik.errors.gender}</span>
                )}
              </div>
              <div className="col-md-6">
                <label
                  htmlFor="inputPassword4"
                  style={{ fontSize: "14px", fontWeight: "bold" }}
                  className="form-label"
                >
                  Email{" "}
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                  <span className="field_error">{formik.errors.email}</span>
                )}
              </div>
              <div className="col-md-6">
                <label
                  htmlFor="inputPassword5"
                  style={{ fontSize: "14px", fontWeight: "bold" }}
                  className="form-label"
                >
                  Phone Number{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="phone_num"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone_num}
                />
                {formik.touched.phone_num && formik.errors.phone_num && (
                  <span className="field_error">{formik.errors.phone_num}</span>
                )}
              </div>
              <div className="col-md-6">
                <label
                  htmlFor="inputPassword6"
                  style={{ fontSize: "14px", fontWeight: "bold" }}
                  className="form-label"
                >
                  Postal Address{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="posttal_address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.posttal_address}
                />
                {formik.touched.posttal_address &&
                  formik.errors.posttal_address && (
                    <span className="field_error">
                      {formik.errors.posttal_address}
                    </span>
                  )}
              </div>

              <div className="col-md-6">
                <label
                  htmlFor="inputPassword7 "
                  style={{ fontSize: "14px", fontWeight: "bold" }}
                  className="form-label"
                >
                  PinCode{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="pinCode"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.pinCode}
                />
                {formik.touched.pinCode && formik.errors.pinCode && (
                  <span className="field_error">{formik.errors.pinCode}</span>
                )}
              </div>
              <div className="col-md-6">
                <label
                  htmlFor="inputPassword8"
                  style={{ fontSize: "14px", fontWeight: "bold" }}
                  className="form-label"
                >
                  Area of Intrest{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Area_of_intrest"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Area_of_intrest}
                />
                {formik.touched.Area_of_intrest &&
                  formik.errors.Area_of_intrest && (
                    <span className="field_error">
                      {formik.errors.Area_of_intrest}
                    </span>
                  )}{" "}
              </div>

              <div className="col-md-12 align-items-center py-3"></div>
              <div className="">
                <button
                  class="btn btn-primary  btn-lg float-right"
                  type="submit"
                >
                  Updated
                </button>
              </div>
            </form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default ProfileUpdate;
