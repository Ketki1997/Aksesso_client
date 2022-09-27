import React, { useEffect, useState } from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import axios from "axios";

export default function Tags() {
  const [users, setUsers] = useState([])
  const [value, setValues] = useState();
  useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get("https://localhost:44387/api/Area_Of_Intrest");
      console.log("RES", response.data); 
      console.log("value", value);
      setUsers(response.data);

      localStorage.setItem("area_of_intrests", value);
    };
    loadUsers();
  }, [value]);



  return (
    <>
      <Stack spacing={3} sx={{ width: 500,marginBottom:"5px" }}>
        <Autocomplete
          multiple
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
      </Stack>


    </>
  );
}
