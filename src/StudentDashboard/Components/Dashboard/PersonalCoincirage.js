import React from "react";
import MailFilled from "@ant-design/icons/MailFilled";
import ContactsFilled from "@ant-design/icons/ContactsFilled";
import PhoneFilled from "@ant-design/icons/PhoneFilled";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Copy from "./Copy";

const PersonalConcirage = () => {
  return (
    <div className="container">
      <div
        className="container p-5 shadow"
        style={{ border: "1px solid #757575" }}
      >
        <h1 className="text-center">Your Personal Concirage</h1>
        <div className="row p-5 text-center align-item-center">
          <div className="col-md-4 fw-bolder">
            Connect With dedicated experts
          </div>
          <div className="col-md-4 fw-bolder">Get immediate assistance</div>
          <div className="col-md-4 fw-bolder">raise your all issue</div>
        </div>
        <div className="row p-2"></div>
        <div className="row mt-5">
          <div className="offset-2 col-md-4 fw-bolder text -center">
            <ContactsFilled
              style={{ fontSize: "25px" }}
              className="pr-1 mr-4"
            />
            Call Us :+9075252808
            <br />
            wait time less than 24 hr
          </div>
          <div className="offset-2 col-md-4 fw-bolder text -center">
            <MailFilled style={{ fontSize: "25px" }} className="pr-1 mb-1" />{" "}
            Write us on
            <br />
            wait time less than 24 hr
          </div>
        </div>
      </div>

      {/* <section className="mx-5">
        <Copy />
      </section> */}
    </div>
  );
};

export default PersonalConcirage;
