import TableComponent from './TableComponent';
import {makeStyles, TextField} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    searchClass : {
        padding : '0px',
        margin : '20px',
        width : '95%'
    }

}));
const Adminpage  = () => {
    const classes = useStyles();
    return (
        <div>
            <TextField className={classes.searchClass} id="outlined-search" label="Search by name , email or role" type="search" variant="outlined" />
            <TableComponent></TableComponent>
        </div>
    );
}

export default Adminpage;