import React from "react";
import "./Contact.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Menu from "../../components/Menu/Menu";

const Contact = () => {
  return (
    <div className="contact">
      <div>
        <Menu />
        <h2>Contact</h2>
      </div>
      <div>
        <div>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sales</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
            >
              <MenuItem value={10}>Sales</MenuItem>
              <MenuItem value={20}>Investment or Stock</MenuItem>
              <MenuItem value={30}>Vendors or Suppliers</MenuItem>
              <MenuItem value={30}>Partnerships</MenuItem>
              <MenuItem value={30}>Distribution</MenuItem>
              <MenuItem value={30}>Others</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
          />
          <TextField id="outlined-basic" label="Last Name" variant="outlined" />
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basic" label="Country" variant="outlined" />
          <textarea
            name=""
            id=""
            placeholder="Question/Comment"
            cols="30"
            rows="5"
          ></textarea>
          <Button className="butto" variant="contained">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
