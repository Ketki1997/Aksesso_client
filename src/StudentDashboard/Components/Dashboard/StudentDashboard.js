import React from "react";
import StudCard from "./StudCard";

const StudentDashboard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <StudCard />
        </div>
        <div className="col-md-8"></div>
      </div>
    </div>
  );
};

export default StudentDashboard;
