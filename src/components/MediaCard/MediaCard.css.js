
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        flex: '1 1 0',
        margin: '1rem',
        padding: '1rem',
        borderRadius: '5px',
        height: '18rem',
        '&:hover': {
			transform: 'scale(1.3)'
        }
    },
        media: {
        height: 140
    },
        popover: {
        padding: '1rem'
    },
        name: {
        fontSize: '1rem'
    }
}));

export {useStyles};
