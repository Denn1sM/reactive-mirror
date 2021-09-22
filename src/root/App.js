import './App.css';
import {makeStyles, MuiThemeProvider} from "@material-ui/core";
import theme from "../theme";
import Layout from "./Layout";
import Router from "./Router";
import Store from "../state/Store";

const useStyles = makeStyles({
    root: {
        backgroundColor: "black",
        margin: 0,
        width: "100%",
        height: "100vh"
    },
    layout: {
        position: "absolute"
    },
    router: {
        position: "absolute"
    }
});
function App() {
    const classes = useStyles();
  return (
    <div className={classes.root}>
        <MuiThemeProvider theme={theme} >
            <Store>
                <Router className={classes.router}/>
                <Layout className={classes.layout}/>

            </Store>

        </MuiThemeProvider>
    </div>
  );
}

export default App;
