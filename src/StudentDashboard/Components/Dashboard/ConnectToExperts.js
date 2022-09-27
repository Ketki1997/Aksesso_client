import React from "react";
import "./ConnectToExpert.css";
import Image from "../../assets/3d-safety.svg";

function ConnectWithExpert() {
  return (
    <div>
      <div className="container">
        <h3>Connect With Expert</h3>
        <div className="row m-5 p-5">
          <div className="col-md-3">
            <div class="avatar">
              <div class="edit">Consult Now</div>
              <div class="avatar-img">
                {" "}
                <img src={Image} width="100%" height="100%" alt="" />
              </div>
            </div>
            <p className="mr-2 fw-bold text-center text-primary">
              Geotechnical Engineer
            </p>
          </div>
          <div className="col-md-3">
            <div class="avatar">
              <div class="edit">Consult Now</div>
              <div class="avatar-img">
                {" "}
                <img src={Image} width="100%" height="100%" alt="" />
              </div>
            </div>
            <p className="mr-2 fw-bold text-center text-primary">
              Rcc Designer
            </p>
          </div>
          <div className="col-md-3">
            <div class="avatar">
              <div class="edit">Consult Now</div>
              <div class="avatar-img">
                {" "}
                <img src={Image} width="100%" height="100%" alt="" />
              </div>
            </div>
            <p className="mr-2 fw-bold  text-center text-primary">
              Structure Designer
            </p>
          </div>
          <div className="col-md-3">
            <div class="avatar">
              <div class="edit">Consult Now</div>
              <div class="avatar-img">
                {" "}
                <img src={Image} width="100%" height="100%" alt="" />
              </div>
            </div>
            <p className="mr-2 fw-bold text-center text-primary">
              Structure Detailer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnectWithExpert;
