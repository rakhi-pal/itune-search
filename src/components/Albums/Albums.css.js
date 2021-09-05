
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      alignItems: "flex-start"
    },
    card: {
        padding: '1rem 0',
        flex: '1 1 0'
    },
    filteringAndSearching: {
      display: 'flex'
    }
  }));

  export {useStyles};
