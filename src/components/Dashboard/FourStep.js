import React, { useState } from "react";
import validator from "validator";
import {Row, Container, Col,Button } from "react-bootstrap";
import "./style2.css";
import Virtual from "./Virtual"


const FourStep = ({ nextStep,prevStep, handleFormData, values }) => {
  const [error, setError] = useState(false);

  const submitFormData = (e) => {
    e.preventDefault();
     
      nextStep();
  
    console.log(e);
  };

  return (
    <div>
    <Container className=" justify-content-center p-5 shadow-lg text-centered align-item-center">
      <Row>
      <Col lg={12} md={12} sm={12} className="text-center pt-4">
      <h1>Upload Your Virtual Training Programee</h1>
    
      <form className="mx-1 mx-md-4" onSubmit={submitFormData}>
                      
                     {/*  <div className="d-flex flex-row align-items-center mb-2">



                      <i className="fas fa-key fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <input
                          className="form-control"
                          type="text"
                          name="name_of_organization"
                          placeholder="name_of_organization"
                          defaultValue={values.name_of_organization}
                          style={{
                            borderBottom: error ? "1px solid red" : "",
                          }}
                          onChange={handleFormData("name_of_organization")}
                        />
                        {error ? (
                          <div
                            className="form-text"
                            style={{ color: "red" }}
                          >
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

                              style={{
                                borderBottom: error ? "1px solid red" : "",
                              }}
                              name="Area_of_intrest"
                              defaultValue={values.designation}
                              onChange={handleFormData("designation")}
                              type="text"
                              placeholder="designation"
                            />
                            {error ? (
                              <div
                                className="form-text"
                                style={{ color: "red" }}
                              >
                                This is a required field
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                        <
                               */}
<Virtual/>
                       
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <Button variant="primary" onClick={prevStep}>
                          Previous
                        </Button>
                  
                        <Button variant="primary" type="submit">
                          Next
                        </Button>
                        </div>   
                      </form>
      </Col>
      </Row>
    </Container>
    </div>
  );
};

export default FourStep;
