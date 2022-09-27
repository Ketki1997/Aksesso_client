import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import FirstStep from "../Dashboard/FirstStep";
import SecondStep from "../Dashboard/SecondStep";
import ThirdStep from "../Dashboard/ThirdStep";
import Final from "../Dashboard/Final";
import FourStep from "../Dashboard/FourStep";
import FiveStep from "../Dashboard/FiveStep";



function App() {
  //state for steps
  const [step, setstep] = useState(1);

  //state for form data
  const [formData, setFormData] = useState({
    TrainingId: '',
    training_title: "",
    branch: "",
    Area_of_intrest: "",
    skill:"",
    expert_name:"",
    designation:"",
    duration:"",
    price:"",
     currency:"",
    feature:"",
    training_outcome:""

  })

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = input => e => {
    // input value from the form
    const {value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData(prevState => ({
      ...prevState,
      [input]: value
  }));
  }


// javascript switch case to show different form in each step
  switch (step) {
    // case 1 to show FirstStep form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 1:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col  md={12} className="">
                <FirstStep nextStep={nextStep} handleFormData={handleInputData} values={formData} />
              </Col>
            </Row>
          </Container>
        </div>
      );
    // case 2 to show SecondStep form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 2:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col  md={12} className="custom-margin">
                <SecondStep nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
              </Col>
            </Row>
          </Container>
        </div>
      );

      case 3:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col  md={12} className="custom-margin">
                <ThirdStep nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
              </Col>
            </Row>
          </Container>
        </div>
      );
      case 4:
        return (
          <div className="App">
            <Container>
              <Row>
                <Col  md={12} className="custom-margin">
                  <FourStep nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                </Col>
              </Row>
            </Container>
          </div>
        );
      // Only formData is passed as prop to show the final value at form submit
    case 5:
      return (
        <div className="App">  
          <Container>
            <Row>
              <Col  md={12} className="custom-margin">
                <FiveStep nextStep={nextStep}  prevStep={prevStep} values={formData}  />
              </Col>
            </Row>
          </Container>
        </div>
      );
      case 6:
      return (
        <div className="App">  
          <Container>
            <Row>
              <Col  md={12} className="custom-margin">
                <Final nextStep={nextStep}  prevStep={prevStep} values={formData}  />
              </Col>
            </Row>
          </Container>
        </div>
      );
    // default case to show nothing
    default:
      return (
        <div className="App">
        </div>
      );
  }
}

export default App;