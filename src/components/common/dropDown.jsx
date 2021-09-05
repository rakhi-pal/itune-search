import React, { useState } from 'react';
import { FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { useStyles } from './dropDown.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


const Dropdown = React.forwardRef(({updateSelectedCallback, list, label}, ref) => {
    const classes = useStyles();
    const [selected, setSelected] = useState("");

    
    const handleChange = (e) => {
        if(e && e.target) {  
            setSelected(e.target.value);
            updateSelectedCallback(e.target.value);
        }
        
    }

    return(<React.Fragment>
        <FormControl 
            ref={ref} variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
            <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={selected}
            onChange={(e) => handleChange(e)}
            label="Age"
            >
                <MenuItem value="" key="none">
                    <em>None</em>
                </MenuItem>
                {list && list.map((item) => 
                    <MenuItem key={item} value={item}>{item}</MenuItem>
                )}
            </Select>
      </FormControl>
    </React.Fragment>);
});

export default Dropdown;
 