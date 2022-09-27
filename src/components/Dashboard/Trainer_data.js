import React, { useState, useEffect } from 'react';
 
import MaterialTable from 'material-table'
import Switch from '@material-ui/core/Switch';
 // Import Material Icons
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};
 
export default function Trainer_data() {
 
  const [data, setData] = useState([])
  const columns = [
    {
      title: "Expert ID ",
      field: "exprt_id"
    },
    {
      title: "Expert Name",
      field: "exprt_name"
    },
    {
      title: "DOB",
      field: "exprt_dob"
    },
    {
      title: "Gender",
      field: "gender"
    },
    {
      title: "Mobile Number",
      field: "phone_num"
    },
    {
      title: "Email",
      field: "email"
    },
     
      {
        title: "Postal Address",
        field: "posttal_address"
      },
      {
        title: "Pincode",
        field: "pinCode"
      },
      {
        title: "Qualification",
        field: "qualification"
      },
      {
        title: "Area of Intrest",
        field: "Area_of_intrest"
      },
      {
        title: "Experience(in Yrs)",
        field: "yrs_of_experience"
      },
      {
        title: "Name Of organization",
        field: "name_of_organization"
      },
      {
        title: "Designation",
        field: "designation"
      },
      {
        title: "Resume",
        field: "resume"
      },
       {
        title: "Created Date",
        field: "exprt_created"
      }
  ];
  
  useEffect(() => {
    fetch("https://localhost:44387/api/Expert")
      .then(resp => resp.json())
      .then(resp => {
        setData(resp)
      })
  }, [])
 
  return (
    <div className="Apps" style={{padding:"50px"}}>
     
      <h4 align='center'>Expert Data</h4>
      <MaterialTable
        title="Expert Data"
        icons={tableIcons}
        data={data}
        columns={columns}
      />
    </div>
  );
}