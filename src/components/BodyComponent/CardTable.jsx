import React, { useState, useEffect } from "react";
import axios from "axios";
const TableForm = () => {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
      setAPIData(response.data);
    });
  }, []);

  return (
    <div className="container mt-4">
      <h5>Trainers details</h5>
      <table class="table mt-4">
        <thead class="table-dark">
          <th>Trainer Id</th>
          <th>Name of Trainer</th>
          <th>Upload Date</th>
          <th>Status</th>
          <th>Enrolled Student</th>
          <th>Edit/Delete Training</th>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default TableForm;
