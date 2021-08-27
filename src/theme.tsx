import {createTheme} from "@material-ui/core";
import {purple} from "@material-ui/core/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: "rgb(214, 214, 214, 0.1)",
            contrastText: "#d9d9d9",
            light: "#5e5d5e"
        },
        secondary: {
            main: "rgb(134, 188, 194, 0.4)",
            light: "rgb(130, 18, 48, 0.8)",
            contrastText: "#aeb4b5"
        }
    },
});
export default theme