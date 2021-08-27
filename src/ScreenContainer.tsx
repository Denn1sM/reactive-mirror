import React from "react";
import {fetchAvvdata} from "./SWARequest";
import Connections from "./components/swa/Connections";
import {makeStyles} from "@material-ui/core/styles";
import Clock from "./components/Clock/Clock";
import Kalender from "./components/Calendar/Kalender";

const useStyles = makeStyles((theme) => ({
    back: {
        backgroundColor: "black",
        position: "absolute",
        fontFamily: "Times",
        color: "white",
        fontSize: "5px"
    },
    topLeft: {
        position: "absolute",
        height: "20%",
        width: "50%",
        paddingRight: "5%",
        paddingBottom: "0%"
    },
    middleLeft: {
        position: "absolute",
        height: "40%",
        width: "50%",
        paddingLeft: "20%",
        paddingRight: "5%"
    },
    bottomLeft: {
        position: "absolute",
        height: "40%",
        width: "50%",
        paddingLeft: "20%",
        paddingRight: "5%",
        paddingBottom: "20px"
    },
    topRight: {
        position: "absolute",
        top: "0%",
        left: "50%",
        height: "45%",
        overflow: "hidden"
    },
    middleRight: {
        position: "absolute",
        left: "70%",
        top: "45%",
        paddingTop: "20px",
        width: "30%",
        height: "10%",

    },
    bottomRight: {
        position: "absolute",
        width: "40%",
        left: "50%",
        top: "55%",
        height: "45%",
        overflow: "hidden"
    },
}));

/*
Haltestellen: Rotes Tor: 2000116 Hochschule: 2000768
 */

const ScreenContainer: React.FC = () => {
    const classes = useStyles();
    console.log("hccellodd")
    return (
        <>
            <div className={classes.topRight}>
                <Kalender/>
            </div>
            <div className={classes.topRight}>
                <Connections haltestelle="2000116" />
            </div>

            <div className={classes.middleRight}>
                <Clock />
            </div>

            <div className={classes.bottomRight}>
                <Connections haltestelle="2000768"/>
            </div>
        </>
    );
}
export default ScreenContainer