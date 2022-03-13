import React from "react";
import { FabricCanvasContainer } from "./containers";
import {Canvas, Toolbar} from "./index";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        position: "absolute",
        left: "150px",
        top: "50px",
        width: "calc(100%-100px)",
        pointerEvents: "all"
    }
}))


const NotesComponent: React.FC = () => {
    const classes = useStyles();
    return(
            <FabricCanvasContainer.Provider>
                <div className={classes.root}>
                    <Canvas />
                    <Toolbar />
                </div>

            </FabricCanvasContainer.Provider>
    )

};

export default NotesComponent;
