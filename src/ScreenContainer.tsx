import React from "react";
import {fetchAvvdata} from "./SWARequest";
import Connections from "./components/swa/Connections";
import {makeStyles} from "@material-ui/core/styles";
import Clock from "./components/Clock/Clock";
import Kalender from "./components/Calendar/Kalender";
import Weather from "./components/Weather/Weather";
import theme from "./theme";
import FlagIcon from '@material-ui/icons/Flag';

const first = theme.palette.secondary.light;
const second = theme.palette.info.main;
const third = theme.palette.info.dark;
const useStyles = makeStyles((theme) => ({
    back: {
        backgroundColor: "black",
        position: "absolute",
        fontFamily: "Times",
        color: "white",
        fontSize: "5px",
    },
    topLeft: {
        position: "absolute",
        width: "45%",
        height: "40%",
        overflow: "hidden",
    },
    StopTop: {
        position: "absolute",
        top: "25%",
        left: "25px",
        width: "100px",
        height: "50px",
        fontSize: "14px",
        background: `linear-gradient(45deg, ${theme.palette.info.light} 30%, ${theme.palette.success.main} 90%), radial-gradient(${theme.palette.primary.contrastText}, ${theme.palette.info.light})`,
        fontFamily: "orbitron",
        WebkitBackgroundClip: "text !important",
        textFillColor: "transparent",
    },

    StopBottom: {
        position: "absolute",
        top: "68%",
        left: "25px",
        width: "100px",
        height: "50px",
        fontSize: "14px",
        fontFamily: "orbitron",
        WebkitBackgroundClip: "text !important",
        textFillColor: "transparent",
        background: `linear-gradient(45deg, ${theme.palette.secondary.light} 30%, ${theme.palette.secondary.main} 90%), radial-gradient(${theme.palette.primary.contrastText}, ${theme.palette.info.light})`,
    },

    middle: {
        position: "absolute",
        top: "40%",
        height: "20%",
        display: "flex",
        justifyContent: "space-between",

    },
    animation: {
        left: "50px",
        position: "absolute",
        top: "42%",
        height: "150px",
        width: "150px",
        borderRadius: "50%",
        animation: "$spin 25s infinite alternate",
},
    middleLeft: {
        position: "absolute",
        top: "40%",
        height: "20%",
        width: "20%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    animation2: {
        left: "30%",
        position: "absolute",
        top: "50%",
        height: "5px",
        width: "55%",
        borderRadius: "50%",
        animation: "$spin 25s infinite alternate",

    },

    bottomLeft: {
        position: "absolute",
        top: "60%",
        width: "45%",
        height: "40%",
        overflow: "hidden",
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

    // bubble size: ca 15px, muss die differenz aus den offsets ergeben
    "@keyframes spin": {
        "0%": {
            boxShadow: `inset 8px 0 10px ${third},inset 0 15px 15px ${second},inset -7px -5px 8px ${first},
            -5px 0 50px ${third},-2px 0 8px ${third}, 2px -8px 10px ${second}, 0px 4px 10px ${first}`,
        },

        "17%": {
            boxShadow: `inset -8px 1 10px ${third},inset -5px 10px 10px ${second},inset 2px -5px 6px ${first},
            5px 0 50px ${third},2px 0 8px ${third}, 0px -11px 10px ${second}, -9px 5px 10px ${first}`,

        },
        "35%": {
            boxShadow: `inset -8px 0 8px ${third},inset 0 15px 10px ${second},inset 5px 2px 4px ${first},
            5px 0 50px ${third},2px 0 8px ${third}, 0px -15px 10px ${second}, -3px  2px 10px ${first}`,

        },
        "50%": {
            boxShadow: `inset -8px -1 8px ${third},inset 0 13px 11px ${second},inset 5px 2px 4px ${first},
            5px 0 45px ${third},2px 0 8px ${third}, 0px -12px 10px ${second}, 2px  1px 10px ${first}`,

        },
        "65%": {
            boxShadow: `inset -1px -2px 10px ${first},inset 0 15px 13px ${second},inset -7px -5px 8px ${third},
            -2px -3px 50px ${first},-2px 0 8px ${first}, 2px -8px 10px ${second}, 0px 4px 10px ${third}`,
        },

        "78%": {
            boxShadow: `inset 1px -1px 10px ${first},inset -5px 10px 10px ${second},inset 2px 5px 6px ${third},
            0px 4px 50px ${first},2px 0 8px ${first}, 0px -15px 10px ${second}, -2px -2px 10px ${third}`,

        },
        "100%": {
            boxShadow: `inset 1px -2px 10px ${first},inset -5px 7px 10px ${second},inset 5px 2px 4px ${third},
            0px 4px 50px ${first},2px 0 8px ${first}, 5px -10px 14px ${second}, -2px  -1px 10px ${third}`,

        },

    },
    "@keyframes glow": {
        "0%": {
            boxShadow: "#474747 0px 0px 12px 2px"
        },
        "100%": {
            boxShadow: "#5e5d5e 0px 0px 12px 20px"
        }
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

            <div className={classes.StopTop}>
                Rotes Tor
            </div>

            <div className={classes.topLeft}>
                <Connections haltestelle="2000116" invertOrientation={false}/>
            </div>



            <div className={classes.animation} />
            <div className={classes.middleLeft}>
                <Clock />
            </div>
            <div className={classes.animation2}/>

            <div className={classes.StopBottom}>
                <p>
                    Hochschule
                </p>
            </div>

            <div className={classes.bottomLeft}>
                <Connections haltestelle="2000768" invertOrientation={true}/>
            </div>

            <div className={classes.topRight}>
                <Weather />
            </div>

            <div className={classes.bottomRight}>
                <Kalender/>
            </div>








        </>
    );
}
export default ScreenContainer