import logo from './logo.svg';
import './App.css';
import ScreenContainer from "./ScreenContainer";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        backgroundColor: "black",
        width: "10000px",
        height: "10000px"
    },
});
function App() {
    const classes = useStyles();
  return (
    <div className={classes.root}>
        <ScreenContainer/>
    </div>
  );
}

export default App;
