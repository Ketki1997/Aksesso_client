import React, { useState } from "react";
import { Form, Card, Button, Row, Container, Col } from "react-bootstrap";
import validator from "validator";
import UploadPhoto from "./ProfilePhoto";

import "./style2.css";
const FirstStep = ({ nextStep, prevStep, handleFormData, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();
    console.log(e);

    // checking if value of first name and last name is empty show error else take to step 2
    if (
      validator.isEmpty(values.training_title) ||
      validator.isEmpty(values.branch) ||
      validator.isEmpty(values.duration) ||
      validator.isEmpty(values.price) ||
      validator.isEmpty(values.currency)
    ) {
      setError(true);
    } else {
      nextStep();
    }
    console.log(e);
  };
  return (
    <div>
      <Container className="Main  justify-content-center p-5 shadow-lg  align-item-center">
        <Row>
          <Col lg={12} md={12} sm={12} className="text-center ">
            <h4
              className=" heading  fw-bold mb-1"
              style={{ fontColor: "#4481eb" }}
            >
              Add Training
            </h4>
            <form className="mx-1 mx-md-4" onSubmit={submitFormData}>
              <div className="align-items-center mb-2">
                <UploadPhoto />
              </div>{" "}
              <div className="d-flex flex-row align-items-center mb-2">
                <i className="fas fa-user fa-lg me-3 fa-fw" />
                <div className="form-outline flex-fill mb-0">
                  <input
                    className="form-control"
                    style={{ borderBottom: error ? "1px solid red" : "" }}
                    name="training_title"
                    defaultValue={values.training_title}
                    type="text"
                    placeholder="Training Title"
                    onChange={handleFormData("training_title")}
                  />
                  {error ? (
                    <div className="form-text" style={{ color: "red" }}>
                      This is a required field
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="d-flex flex-row align-items-center mb-2">
                <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                <div className="form-outline flex-fill mb-0">
                  <input
                    className="form-control"
                    style={{ borderBottom: error ? "1px solid red" : "" }}
                    name="branch"
                    defaultValue={values.branch}
                    type="text"
                    placeholder="Branch"
                    onChange={handleFormData("branch")}
                  />
                  {error ? (
                    <div className="form-text" style={{ color: "red" }}>
                      This is a required field
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="d-flex flex-row align-items-center mb-2 ">
                <i className="fas fa-lock fa-lg me-3 fa-fw" />
                <div className="form-outline flex-fill mb-0">
                <select
                className="form-control"
                type="select"
                aria-label="Default select example"
                name="duration"
                placeholder="duration"
                defaultValue={values.duration}
                style={{ borderBottom: error ? "1px solid red" : "" }}
                onChange={handleFormData("duration")}
              >
                <option>Duration</option>
                <option value="1 month">1 month</option>
                <option value="2 month">2 month</option>
                <option value="3 month">3 month</option>
                <option value="6 month">6 month</option>
                <option value="8 month">8 month</option>
              </select>
                  {error ? (
                    <div className="form-text" style={{ color: "red" }}>
                      This is a required field
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="d-flex flex-row align-items-center mb-2">
              <i className="fas fa-key fa-lg me-3 fa-fw" />

              <div className="form-outline flex-fill mb-0  g-3">
                  <select
                    className="form-control"
                    type="select"
                    aria-label="Default select example"
                    name="currency"
                    placeholder="currency"
                    defaultValue={values.currency}
                    style={{ borderBottom: error ? "1px solid red" : "" }}
                    onChange={handleFormData("currency")}
                  >
                    <option>Currency</option>
                    <option value="Rupees">Rupees</option>
                    <option value="USD">USD</option>
                    <option value="Pound">Pound</option>
                  </select>
                  {error ? (
                    <div className="form-text" style={{ color: "red" }}>
                      This is a required field
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <i className="fas fa-key fa-lg me-3 fa-fw" />

                <div className="form-outline flex-fill mb-0">
                <input
                  className="form-control"
                  style={{ borderBottom: error ? "1px solid red" : "" }}
                  name="phone_num"
                  defaultValue={values.price}
                  type="text"
                  placeholder="Price"
                  onChange={handleFormData("price")}
                />
                {error ? (
                  <div className="form-text" style={{ color: "red" }}>
                    This is a required field
                  </div>
                ) : (
                  ""
                )}{" "}
              </div>
              </div>
             
              <div className="d-flex justify-content-center mx-4 mb-5 mb-lg-4">
                <button
                  variant="primary"
                  className="btn btn-primary btn-lg"
                  type="submit"
                >
                  Continue
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FirstStep;
