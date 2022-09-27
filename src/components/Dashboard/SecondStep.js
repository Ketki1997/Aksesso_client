import React, { useState } from "react";
import { Form, Card, Button, Row, Container, Col} from "react-bootstrap";
import validator from "validator";

import Autocomplete from "./autocomplete";

import "./style2.css";

// creating functional component ans getting props from app.js and destucturing them
const SecondStep= ({ nextStep, handleFormData, prevStep, values }) => {
   //creating error state for validation
  const [error, setError] = useState(false);
 // after form submit validating the form data using validator
 const submitFormData = (e) => {
  e.preventDefault();
  console.log(e);

  
  const  area_of_intrests = window.localStorage.getItem("area_of_intrests");
  const  skills = window.localStorage.getItem("Skills");
  const  feature = window.localStorage.getItem("feature");
  const  expert = window.localStorage.getItem("Expert");
  console.log("area_of_intrests",area_of_intrests);
  console.log("skills",skills);
  console.log("features",feature);
  console.log("Expert",expert);

  values.area_of_intrest=area_of_intrests;
  values.skills=skills;
  values.feature=feature;
  values.expert_name=expert;
  
  console.log("Sarea_of_intrests", values.Area_of_intrest);
  console.log("Sskills", values.skills);
  console.log("Sfeature", values.feature);
  console.log("Sexpert_name", values.expert_name);
 


  // checking if value of first name and last name is empty show error else take to step 2
  
    nextStep();
 
  console.log(e)
};
 
  return (
    <>
    <Container className="Main  justify-content-center p-5 shadow-lg text-centered align-item-center">
    <Row>
    <Col lg={12} md={12} sm={12} className="text-center pt-4">
    
    
      <form className="mx-1 mx-md-4" onSubmit={submitFormData} >
      <div className="d-flex flex-row align-items-center mb-2">
        <i className="fas fa-user fa-lg me-3 fa-fw" />
        <div className="form-outline flex-fill mb-0">
        <Autocomplete/>
        </div>
      </div>

     
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
    </>
  );
};

export default SecondStep;