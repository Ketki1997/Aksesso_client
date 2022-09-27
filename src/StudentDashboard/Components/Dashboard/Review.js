import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

function Feedback() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    uploadedFiles: [],
    buttonText: "Post",
    uploadPhotosButtonText: "Upload files",
  });
  const {
    name,
    email,
    message,
    phone,
    uploadedFiles,
    buttonText,
    uploadPhotosButtonText,
  } = info;
  const { REACT_APP_CLOUD_NAME, REACT_APP_UPLOAD_SECRET } = process.env;

  const handleSubmit = (e) => {
    e.preventDefault();

    setInfo({ ...info, buttonText: "...sending" });

    axios({
      method: "POST",
      url: "http://localhost:8080/api/feedback",
      data: { name, email, message, phone },
    })
      .then((res) => {
        if (res.data.success) alert("🦄 Thanks for your feedback!");
        setInfo({
          ...info,
          name: "",
          phone: "",
          email: "",
          message: "",
          buttonText: "Submited",
          uploadPhotosButtonText: "Uploaded",
        });
      })
      .catch((err) => {
        if (err.response.data.error) alert("Failed, try again!");
      });
  };

  const handleChange = (name) => (e) => {
    setInfo({ ...info, [name]: e.target.value });
  };

  const uploadWidget = () => {
    window.cloudinary.openUploadWidget(
      {
        cloud_name: REACT_APP_CLOUD_NAME,
        upload_preset: REACT_APP_UPLOAD_SECRET,
        tags: ["images"],
      },
      function (error, result) {
        if (error) console.log(error);
        setInfo({ ...info, uploadPhotosButtonText: "Uploaded" });
      }
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 ">
          <div className="form card shadow p-5">
            <Form onSubmit={handleSubmit}>
              {/* Name */}
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={name}
                  onChange={handleChange("name")}
                  type="name"
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>

              {/* text area */}
              <Form.Group>
                <Form.Label>Write Review</Form.Label>
                <Form.Control
                  onChange={handleChange("message")}
                  as="textarea"
                  value={message}
                  rows={3}
                  required
                />
              </Form.Group>
              <div>
                <Button
                  className="btn btn-primary mt-3 text-center"
                  type="submit"
                >
                  {buttonText}
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
