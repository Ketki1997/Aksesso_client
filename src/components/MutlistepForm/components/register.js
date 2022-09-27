import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";
import SocialFollow from "./Socialfollow";
import { Container, Row, Col, Button } from "react-bootstrap";
import SignIn from "../images/signin.png";
import "./style.css"

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.username, this.state.password).then(
        () => {
          this.props.history.push("/profile");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return (
    
      <Container className="Main d-flex justify-content-center p-5 shadow-lg text-centered align-item-center">
      <Row>
      <Col lg={6} md={6} sm={12} className="text-center pt-4">
        <h1 className=" heading text-center fw-bolder">LOGIN</h1>
        <form className="mx-1 mx-md-4" onSubmit={submitFormData}>
                      
                      <div className="d-flex flex-row align-items-center mb-2">
                      <i className="fas fa-key fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <select
                          className="form-control"
                          type="select"
                          name="qualification"
                          defaultValue={values.qualification}
                          style={{
                            borderBottom: error ? "1px solid red" : "",
                          }}
                          onChange={handleFormData("qualification")}
                        >
                        <option>Qualification</option>
                        <option value="12th">12th</option>
                        <option value="Graduate">Graduate</option>
                        <option value="Post Graduate">Post Graduate</option>
                        </select>
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
                              defaultValue={values.Area_of_intrest}
                              onChange={handleFormData("Area_of_intrest")}
                              type="text"
                              placeholder="Area of intrest"
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
                        <i className="fas fa-key fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <select
                            className="form-control"
                            type="select"
                            name="experience"
                            defaultValue={values.experience}
                            style={{
                              borderBottom: error ? "1px solid red" : "",
                            }}
                            onChange={handleFormData("experience")}
                          >
                          <option>Experience</option>
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="2+">2+</option>
                          </select>
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
      <Col lg={6} md={6} sm={12} className="Imgclass" style={{backgroundColor:"#4481eb"}}>
       
      <img className="w-100 p-3" src={SignIn} alt="icon"/>
      <h6 className="text-center mt-2">Welcome to Aksesso<br/>
      Bright Future is waiting for you.  
      </h6>
      </Col>
      </Row>
    </Container>
    );
  }
}

<div class="container">
<!-- Horizonatal Form -->
<div class="row">
  <div class="col-xs-6">
    <form class="form-horizontal">
      <div class="form-group">
        <label for="nameField" class="col-xs-2">Name</label>
        <div class="col-xs-10">
          <input type="text" class="form-control" id="nameField" placeholder="Your Name" />
        </div>
      </div>
    
      <div class="form-group">
        <label for="emailField" class="col-xs-2">Email</label>
        <div class="col-xs-10">
          <input type="email" class="form-control" id="emailField" placeholder="Your Email" />
        </div>
      </div>
    
      <div class="form-group">
        <label for="phoneField" class="col-xs-2">Phone</label>
        <div class="col-xs-10">
          <input type="text" class="form-control" id="phoneField" placeholder="Your Phone Number" />
        </div>
      </div>
    
      <div class="form-group">
        <label for="descField" class="col-xs-2">Description</label>
        <div class="col-xs-10">
          <textarea type="text" class="form-control" id="descField" placeholder="Your Comments"></textarea>
        </div>
      </div>
      
      <div class="col-xs-10 col-xs-offset-2">
        <button type="submit" class="btn btn-primary">Submit</button> <button type="reset" class="btn btn-default">Reset</button>
      </div>
      
    </form>
  </div>
</div>
</div>




