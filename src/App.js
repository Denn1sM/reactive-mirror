import logo from './logo.svg';
import './App.css';
import ScreenContainer from "./ScreenContainer";
import {makeStyles, MuiThemeProvider} from "@material-ui/core";
import theme from "./theme";
const useStyles = makeStyles({
    root: {
        backgroundColor: "black",
        margin: 0,
        width: "100%",
        height: "100vh"
    },
});
function App() {
    const classes = useStyles();
  return (
    <div className={classes.root}>
        <MuiThemeProvider theme={theme} >
            <ScreenContainer/>
        </MuiThemeProvider>
    </div>
  );
}

export default App;
