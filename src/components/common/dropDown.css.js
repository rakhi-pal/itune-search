
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  }
}));

export {useStyles};
