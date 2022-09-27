import React, { useState } from "react";
import validator from "validator";
import { Row, Container, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style2.css";

import Autocomplete from "./autocomplete";
// creating functional component ans getting props from app.js and destucturing them
const ThirdStep = ({ nextStep, prevStep, handleFormData, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);
  const [inputFields, setInputFields] = useState([
    {
      name: "",
    },
  ]);
  const handleChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };

  const addInputField = () => {
    let newfield = { name: "" };

    setInputFields([...inputFields, newfield]);
  };

  const removeInputFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();
    values.training_outcomes=inputFields;
    // checking if value of first name and last name is empty show error else take to step 2
    console.log(inputFields);

    nextStep();
  };
  let newObject = window.sessionStorage.getItem("myObject");
  console.log(JSON.parse(newObject));

  return (
    <div>
      <Container className="Main  justify-content-center p-5 shadow-lg text-centered align-item-center">
        <Row>
          <Col lg={12} md={12} sm={12} className="text-center pt-4">
            <form className="mx-1 mx-md-4" onSubmit={submitFormData}>
              <h4>1. What are the Training Outcomes ?</h4>
              <div className="col-sm-12">
                {inputFields.map((input, index) => {
                  return (
                    <div className="row my-3" key={index}>
                      <div className="col">
                        <div className="form-group">
                          <input
                            type="text"
                            onChange={(event) => handleChange(index, event)}
                            value={input.name}
                            name="name"
                            className="form-control"
                            placeholder="Ex. Planing and Mobilizing the Construction Sites"
                          />
                        </div>
                      </div>

                      <div className="col">
                        <button
                          className="btn  btn-outline-danger"
                          onClick={removeInputFields}
                        >
                          Remove
                        </button>
                      </div>
                      <div className="col-sm-12">
                   
                    </div>
                    </div>
                  );
                })}

                <div className="row">
                <Link 
                className="btn btn-outline-primary mr-2 "
                onClick={addInputField}
              >
                Add Answers
              </Link>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Button variant="primary" onClick={prevStep}>
                    Previous
                  </Button>

                  <Button variant="primary" type="submit">
                    Next
                  </Button>
                </div>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ThirdStep;
