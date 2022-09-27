import React from "react";
import Profile from "../Header/Navtabs/profile";

const StudCard = () => {
  return (
    <div className="card" style={{ borderRadius: 15 }}>
      <div className="card-body text-center">
        <div className="mt-3 mb-4">
          <Profile name="Ketki Lonare" size="150" />
        </div>
        <h4 className="mb-2">Julie L. Arsenault</h4>
        <p className="text-muted mb-4">Aksesso Id: STD11513</p>

        {/*    <h4 className="text-center">You are intreste In</h4>
              <div className="d-flex justify-content-between text-center mt-5 mb-2">
                <div>
                  <p
                    className="mb-2 h5"
                    style={{ border: "2px solid black", padding: "7px" }}
                  >
                    Billing
                  </p>
                </div>
                <div className="px-3">
                  <p
                    className="mb-2 h5"
                    style={{ border: "2px solid black", padding: "7px" }}
                  >
                    Construction
                  </p>
                </div>

                <div>
                  <p
                    className="mb-2 h5"
                    style={{ border: "2px solid black", padding: "7px" }}
                  >
                    Planning
                  </p> 
                </div>
              </div>*/}
      </div>
    </div>
  );
};

export default StudCard;
