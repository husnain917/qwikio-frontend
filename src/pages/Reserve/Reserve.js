import React from "react";
import "./Reserve.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Menu from "../../components/Menu/Menu";

import image from "../../image/reserve/r.png"

const Reserve = () => {
  return (
    <div className="reserve">
        <div>
            <Menu name='reserve-now' />
        </div>
       
      <div className="ReserveInner">
          <div className="modelPic">
              <img src={image}/>
          </div>
        <div className="ReForm">
          <FormControl>
            <InputLabel id="demo-simple-select-label">Models</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
            >
              <MenuItem value={'Qwikio Riida X'}>Qwikio Riida X</MenuItem>
              <MenuItem value={'Qwikio Riida XL'}>Qwikio Riida XL</MenuItem>
              <MenuItem value={'Qwikio Pride'}>Qwikio Pride</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
          />
          <TextField id="outlined-basic" label="Last Name" variant="outlined" />
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basic" label="Phone" variant="outlined" />
          <div className="submit">
              <Button className="butto" variant="contained" type="submit">
                Waitlist
              </Button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Reserve;
