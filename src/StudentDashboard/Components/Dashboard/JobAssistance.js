import React from "react";
import Review from "./Review";

const JobAssistance = () => {
  return (
    <div>
      <div className="container p-5">
        <div className="row">
          <div className="col-md-7">
            <div
              className="card text-center"
              style={{
                backgroundImage:
                  "background-image: linear-gradient(to left top, #411cf2, #6e00c6, #7a009f, #78057d, #6d1961)",
              }}
            >
              <div className="card-body">
                <h5 className="card-title p-3">Congratulations Anirudha</h5>
                <p className="card-text p-3">
                  You are Successfully Crack the Interview and Mrs.RVPV
                  Construction Pvt. Ltd. are happy to have you with them
                </p>
                <a href="#" className="btn btn-primary p-3 rounded-pill">
                  Download Your CallLetter
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <h6>Create Your Post</h6>
            <p className="text-primary">
              Share this Moment With Aksesso and Your Collagues
            </p>
            <Review />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobAssistance;
