import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '24px'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DateAndTimePickers({handleDateTimeChange}) {
  const classes = useStyles();
  const handleChange = (event) => {
    handleDateTimeChange(event.target.value);
  }
  return (
    <form className={classes.container} noValidate>
      <TextField
        id="datetime-local"
        label="Next appointment"
        type="datetime-local"
        defaultValue="2021-09-03T00:00" 
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => handleChange(e)}
      />
    </form>
  );
}
