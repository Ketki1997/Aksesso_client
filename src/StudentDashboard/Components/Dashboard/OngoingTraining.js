import React from "react";
import "./OngoingTraining.css";
import { AiFillLock } from "react-icons/ai";
import { AiFillUnlock } from "react-icons/ai";
import { Link } from "react-router-dom";
import StudCard from "./StudCard";

const Ongoing = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div
              className="row shadow p-4 my-2"
              style={{ border: "1px solid #757575" }}
            >
              {" "}
              <h4 className="text-starts">Virtual Training</h4>
              <div className="container m-5">
                <Link to="">
                  <button
                    type="button"
                    class="btn btn-primary btn-circle btn-xl"
                  >
                    <AiFillUnlock />
                    <p style={{ fontSize: "8px" }}>Virtual Training</p>
                  </button>
                </Link>
                <Link to="/ongoingTraining">
                  <button
                    type="button"
                    class="btn btn-primary btn-circle btn-xl"
                  >
                    <AiFillLock />
                    <p style={{ fontSize: "8px" }}>Site Training</p>
                  </button>
                </Link>
                <Link to="/mockInterview">
                  <button
                    type="button"
                    class="btn btn-primary btn-circle btn-xl"
                  >
                    <AiFillLock />
                    <p style={{ fontSize: "8px" }}>Mock Interview</p>
                  </button>
                </Link>
                <Link to="/">
                  <button
                    type="button"
                    class="btn btn-primary btn-circle btn-xl"
                  >
                    <AiFillLock />
                    <p style={{ fontSize: "8px" }}>Certificates</p>
                  </button>
                </Link>
                <Link to="/">
                  <button
                    type="button"
                    class="btn btn-primary btn-circle btn-xl"
                  >
                    <AiFillLock />
                    <p style={{ fontSize: "8px" }}>Job Assistance</p>
                  </button>
                </Link>
              </div>
            </div>
            <div
              className="row shadow p-4 my-2"
              style={{ border: "1px solid #757575" }}
            >
              {" "}
              <h4 className="text-starts">Project Quality Assurance</h4>
              <div className="container m-5">
                <button type="button" class="btn btn-primary btn-circle btn-xl">
                  <AiFillUnlock />
                  <p style={{ fontSize: "8px" }}>Virtual Training</p>
                </button>
                <button type="button" class="btn btn-primary btn-circle btn-xl">
                  <AiFillLock />
                  <p style={{ fontSize: "8px" }}>Site Training</p>
                </button>
                <button type="button" class="btn btn-primary btn-circle btn-xl">
                  <AiFillLock />
                  <p style={{ fontSize: "8px" }}>Mock Interview</p>
                </button>
                <button type="button" class="btn btn-primary btn-circle btn-xl">
                  <AiFillLock />
                  <p style={{ fontSize: "8px" }}>Certificates</p>
                </button>
                <button type="button" class="btn btn-primary btn-circle btn-xl">
                  <AiFillLock />
                  <p style={{ fontSize: "8px" }}>Job Assistance</p>
                </button>
              </div>
            </div>
            <div
              className="row shadow p-4 my-2"
              style={{ border: "1px solid #757575" }}
            >
              {" "}
              <h4 className="text-starts">Project Management</h4>
              <div className="container m-5">
                <button type="button" class="btn btn-primary btn-circle btn-xl">
                  <AiFillUnlock />
                  <p style={{ fontSize: "8px" }}>Virtual Training</p>
                </button>
                <button type="button" class="btn btn-primary btn-circle btn-xl">
                  <AiFillLock />
                  <p style={{ fontSize: "8px" }}>Site Training</p>
                </button>
                <button type="button" class="btn btn-primary btn-circle btn-xl">
                  <AiFillLock />
                  <p style={{ fontSize: "8px" }}>Mock Interview</p>
                </button>
                <button type="button" class="btn btn-primary btn-circle btn-xl">
                  <AiFillLock />
                  <p style={{ fontSize: "8px" }}>Certificates</p>
                </button>
                <button type="button" class="btn btn-primary btn-circle btn-xl">
                  <AiFillLock />
                  <p style={{ fontSize: "8px" }}>Job Assistance</p>
                </button>
              </div>
            </div>
            <div
              className="row shadow p-4 my-2"
              style={{ border: "1px solid #757575" }}
            >
              <h4 className="text-starts">Virtual Training</h4>

              <div className="container m-5">
                <button type="button" class="btn btn-primary btn-circle btn-xl">
                  <AiFillUnlock />
                  <p style={{ fontSize: "8px" }}>Virtual Training</p>
                </button>
                <button type="button" class="btn btn-primary btn-circle btn-xl">
                  <AiFillLock />
                  <p style={{ fontSize: "8px" }}>Site Training</p>
                </button>
                <button type="button" class="btn btn-primary btn-circle btn-xl">
                  <AiFillLock />
                  <p style={{ fontSize: "8px" }}>Mock Interview</p>
                </button>
                <button type="button" class="btn btn-primary btn-circle btn-xl">
                  <AiFillLock />
                  <p style={{ fontSize: "8px" }}>Certificates</p>
                </button>
                <button type="button" class="btn btn-primary btn-circle btn-xl">
                  <AiFillLock />
                  <p style={{ fontSize: "8px" }}>Job Assistance</p>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <StudCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ongoing;
