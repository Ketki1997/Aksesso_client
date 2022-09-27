import React, { useEffect, useState } from "react";
import Chip from "@mui/material/Chip";
import { Autocomplete,TextField,Stack } from "@mui/material";
import axios from "axios";

export default function Tags() {
  const [users, setUsers] = useState([])
  const [feature, setFeature] = useState([])
  const [skills, setSkill] = useState([])
  const [exprt_name,setExprt_name] = useState([])
  const [value, setValues] = useState();
  const [value2, setValues2] = useState();
  const [value3, setValues3] = useState();
  const [value4, setValues4] = useState();
  useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get("https://localhost:44387/api/Area_Of_Intrest");
      const response2 = await axios.get("https://localhost:44387/api/Skills");
      const response3= await axios.get("https://localhost:44387/api/Feature");
      const response4= await axios.get("https://localhost:44387/api/Expert");
      console.log("RES", response.data); 
      console.log("Skills", response2.data); 
      console.log("feature", response3.data); 
      console.log("Expert", response4.data); 
    
      setUsers(response.data);
      setSkill(response2.data);
      setFeature(response3.data);
      setExprt_name(response4.data);
      console.log("value", value);
      console.log("value2", value2);
      console.log("value3", value3);
      console.log("value4", value4); 

      localStorage.setItem("area_of_intrests", JSON.stringify(value));
      localStorage.setItem("feature", JSON.stringify(value2));
      localStorage.setItem("Skills", JSON.stringify(value3));
      localStorage.setItem("Expert", JSON.stringify(value4));
    };
    loadUsers();
  }, [value,value2,value3,value4]);



  return (
    <>
        <Autocomplete className="my-4"
          multiple
          required
          id="tags-filled"
          options={users.map((option) => option.area_of_intrests)}
          defaultValue={users.area_of_intrests}
          freeSolo
          onChange={(e, v) => setValues(v)}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                variant="outlined"
                label={option}
                {...getTagProps({ index })}
                required
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              variant="filled"
              label="Area of Intrest"
              placeholder=" Select Area of Intrest"
              onChange={({ target }) => setValues(target.value)}
              
            />
          )}
        />
        <Autocomplete className="my-4"
          multiple
          limitTags={5}

          id="tags-filled"
          options={skills.map((option) => option.skills)}
          defaultValue={skills.skills}
          freeSolo
          onChange={(e, v) => setValues3(v)}
          renderTags={(value3, getTagProps) =>
            value3.map((option, index) => (
              <Chip
                variant="outlined"
                label={option}
                {...getTagProps({ index })}
                required
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              variant="filled"
              label="Skills"
              placeholder=" Select Skills"
              onChange={({ target }) => setValues3(target.value3)}
              
            />
          )}
        />
        <Autocomplete className="my-4"
          multiple
          id="tags-filled"
          options={feature.map((option) => option.feature)}
          defaultValue={feature.feature}
          freeSolo
          onChange={(e, v) => setValues2(v)}
          renderTags={(value2, getTagProps) =>
            value2.map((option, index) => (
              <Chip
                variant="outlined"
                label={option}
                {...getTagProps({ index })}
                
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              variant="filled"
              label="Feature"
              placeholder=" Select feature"
              onChange={({ target }) => setValues2(target.value2)}
              
            />
          )}
        />
        <Autocomplete className="my-4"
          multiple
          limitTags={5}


          id="tags-filled"
          options={exprt_name.map((option) => option.exprt_name)}
          defaultValue={exprt_name.exprt_name}
          freeSolo
          onChange={(e, v) => setValues4(v)}
          renderTags={(value4, getTagProps) =>
            value4.map((option, index) => (
              <Chip
                variant="outlined"
                label={option}
                {...getTagProps({ index })}
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              variant="filled"
              label="Trainer"
              placeholder=" Select Trainer"
              onChange={({ target }) => setValues4(target.value4)}
              
            />
          )}
        />
   
     
    </>
  );
}
