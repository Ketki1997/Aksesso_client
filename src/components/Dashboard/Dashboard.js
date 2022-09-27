import { Link } from "react-router-dom";
import I8 from "../Images/I8.svg";
import I6 from "../Images/I6.svg";
import I5 from "../Images/I5.svg";
import "./Dashboard.css"

function Dashboard() {
  return ( 
    <div>
      <div className="dashboard">
        <div className="row">
          <div className="col-md-4 col-lg-4  col-sm-12">
            <div class="card shadow">
              <div class="card-body">
                <img
                  src={I8}
                  class="card-img-top"
                  alt="..."
                  width="100"
                  height="150"
                />
                <Link to="/newTraining">
                  <button className="btn btn-primary text-align-right">
                    New Training
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div class="card shadow">
              <div class="card-body">
                <img
                  src={I6}
                  class="card-img-top"
                  alt="..."
                  width="100"
                  height="150"
                />
                <Link to="/addConstruction">
                  <button className="btn btn-primary">
                    Add Construction Sites
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div class="card shadow">
              <div class="card-body">
                <img
                  src={I5}
                  class="card-img-top"
                  width="100"
                  height="150"
                  alt="..."
                />
                <Link to="/virtualTraining">
                  <button className="btn btn-primary">
                    View & Edit Training
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

	