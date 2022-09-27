import React,{useState,useEffect} from "react";
import { useFormik } from 'formik';
import FileUpload from "./FileUpload";
import axios from "axios";
import "./AddConstruction.css"

import * as Yup from 'yup';
import VirtualTraining from "./VirtualTraining";

const AddCo = () => {

  const [items, setItems] = useState([]);
  const initialValues = {
    numberOfTickets: '',

    tickets: [] 
};

const validationSchema = Yup.object().shape({
    numberOfTickets: Yup.string()
        .required('Number of Section is required'),
    tickets: Yup.array().of(
        Yup.object().shape({
            name: Yup.string()
                .required('Name is required'),
            email: Yup.string()
                .email('Email is invalid')
                .required('Email is required'),
            file: Yup.string()
                .required('file is required')
        })
    )
});
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("vedio"));
    if (items) {
      setItems(items);
    }
  }, []);
  function onChangeTickets(e, field, values, setValues) {
    // update dynamic form
    const tickets = [...values.tickets];
    const numberOfTickets = e.target.value || 0;
    const previousNumber = parseInt(field.value || '0');
    if (previousNumber < numberOfTickets) {
        for (let i = previousNumber; i < numberOfTickets; i++) {
            tickets.push({ name: '', email: '',file:'' });
        }
    } else {
        for (let i = previousNumber; i >= numberOfTickets; i--) {
            tickets.splice(i, 1);
        }
    }
    setValues({ ...values, tickets });

    // call formik onChange method
    field.onChange(e);
}

  const formik = useFormik({
    initialValues: {

      title_of_section: "",
      desc_of_section: "",
      video_title: "",
      vedio_filename:"",
      vedio_desc: "",
      vedio_notes: "",
      vedio_notes_filepath: "",
  
    },
    
    onSubmit: (values) => {

      
      console.log(values);
      

      const result = { ...values, ...items };
      console.table("Data",result );


      axios.post(`https://localhost:44387/api/ConstructionSite`, result).then((res) => {
        console.log("Record Inserted");
        console.log(res.result);
      });
      alert("Record Inserted");
      
    },
    

  });
  

  return (
    <div className="container text-start ">
       <form className="g-3" onSubmit={formik.handleSubmit}>
        <div className="col-12 text-center">
        </div>

        <h5 className="text-primary fw-bold m-2">Add Section</h5>

  <div className="row card p-2">
  <div className="col-md-12">
          <label
            htmlFor="inputPassword2"
            style={{ fontSize: "14px", fontWeight: "bold" }}
            className="form-label"
          >
             Title Of Section
          </label>
          <input
            type="text"
            className="form-control"
            value={formik.values.title_of_section}
            onChange={formik.handleChange}
            name="title_of_section"
          />{" "}
          
        </div>
        <div className="col-md-12">

          <label
            htmlFor="inputPassword3"
            style={{ fontSize: "14px", fontWeight: "bold" }}
            className="form-label"
          >
            Description of Section{" "}
          </label>
          <input
            type="text"
            className="form-control"
            value={formik.values.desc_of_section}
            onChange={formik.handleChange}
            name="desc_of_section"
          />
        </div>
        <VirtualTraining/>
        <div className="col-12">
          <button type="submit" className="btn text-end btn-lg btn-primary"  >
            Add Section
          </button>
        </div>
  </div>


<div className="col-md-12">
   
 
 { /*  <label
    htmlFor="inputPassword5"
    style={{ fontSize: "14px", fontWeight: "bold" }}
    className="form-label"
  > <FileUpload/>
    Add Vedio{" "}
  </label>
  <input
    type="file"
    className="form-control"
    value={formik.values.video_path}
    onChange={formik.handleChange}
    name="video_path"
  />*/}
</div>

  
                                                                                                                                                                                            

 
    
       
     
      </form>
    </div>
  );
};

export default AddCo;
