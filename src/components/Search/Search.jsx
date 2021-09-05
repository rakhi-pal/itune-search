import React, { useState } from 'react';
import { FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import {OutlinedInput} from '@material-ui/core';
import {InputAdornment} from '@material-ui/core';
import { useStyles } from './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import {IconButton} from '@material-ui/core';


const Search =({updateAlbumsCallback}) => {
    const classes = useStyles();
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        if(e && e.target) {   
            setSearchTerm(e.target.value);
            debounce(updateAlbumsCallback(e.target.value), 10000);
        }
        
    }

    const debounce = (func, wait) => {
        let timeout;
      
        return function executedFunction(...args) {
          const later = () => {
            clearTimeout(timeout);
            func(...args);
          };
      
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
        };
    };
    return(<React.Fragment>
        <FormControl className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Albums</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={searchTerm}
            onChange={(e) => handleChange(e)}
            startAdornment={<InputAdornment position="start">
                <IconButton>
                    <SearchIcon />
                </IconButton>
            </InputAdornment>}
            labelWidth={60}
          />
        </FormControl>
    </React.Fragment>);
}

export default Search;