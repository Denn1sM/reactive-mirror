import React, {useCallback, useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import {fetchData} from "./Request";
import {IconButton} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    list: {
        backgroundColor: "transparent",
        color: theme.palette.primary.contrastText,
        fontSize: "15px"
    },
    listItem: {
        height: "55px",
        width: "80%",
        fontSize: "inherit",
        borderBottom: theme.palette.primary.light

    },
    content: {
        fontFamily: "orbitron",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        whiteSpace: "nowrap",
    },
    time: {
        width: "30%"
    },
    ziel: {
        paddingLeft: "30px",
        width: "70%",
        whiteSpace: "nowrap",
    },
    tram: {
        backgroundColor: theme.palette.info.main,
        color: theme.palette.secondary.contrastText,
        height: "35px",
        width: "35px"
    },
    bus: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        height: "35px",
        width: "35px"
    },
    indenter: {
        paddingLeft: "20px",
        "&:nth-child(2)": {
            paddingLeft: "70px"
        },
        "&:nth-child(3)": {
            paddingLeft: "105px"
        },
        "&:nth-child(4)": {
            paddingLeft: "125px"
        },
        "&:nth-child(5)": {
            paddingLeft: "140px"
        }
    },
    indenterInverted: {
        paddingLeft: "140px",
        "&:nth-child(2)": {
            paddingLeft: "125px"
        },
        "&:nth-child(3)": {
            paddingLeft: "105px"
        },
        "&:nth-child(4)": {
            paddingLeft: "70px"
        },
        "&:nth-child(5)": {
            paddingLeft: "20px"
        }
    },
    divider: {
        backgroundColor: theme.palette.primary.light,
        height: "0.1px"
    }
}));

interface Props {
    haltestelle: string;
    invertOrientation: boolean;
}
export interface Verbindung {
    time: string,
    linie: string,
    ziel: string
}

const Connections: React.FC<Props> = (props) => {
    const classes = useStyles();
    const [alleVerbindungen, setAlleVerbindungen] = useState<Array<Verbindung> | void>();


    useEffect(() => {

    const v: Array<Verbindung> = [
    {
        time: "10:49",
        linie: "1",
        ziel: "Somewhere"

    },
        {
        time: "10:49",
        linie: "1",
        ziel: "Somewhere"

    },
        {
        time: "10:49",
        linie: "1",
        ziel: "Somewhere"

    },
        {
        time: "10:49",
        linie: "1",
        ziel: "Somewhere"

    },
        {
        time: "10:49",
        linie: "1",
        ziel: "Somewhere"

    },
    ]
    setAlleVerbindungen(v)
    }, [])

    const fetchIt = useCallback(async () => {
        console.log("Started fetch")
        const x = await fetchData(props.haltestelle);
        setAlleVerbindungen(x)
        console.log(alleVerbindungen)

    }, [])


    setInterval(() => fetchIt(), 100000);
    const trams = ["1", "2", "3", "4", "5", "6"]

    return (
        <div className={classes.list}>
            <List  className={classes.list}>
                {alleVerbindungen?.map(verbindung => (
                    <>
                        {props.invertOrientation
                            ?
                            <div className={classes.indenterInverted}>

                                <ListItem key={Math.random()} className={classes.listItem}>

                                    <ListItemIcon>
                                        {trams.includes(verbindung.linie) ?
                                            <IconButton className={classes.tram}>
                                                {verbindung.linie}
                                            </IconButton>
                                            :
                                            <IconButton className={classes.bus}>
                                                {verbindung.linie}
                                            </IconButton>}

                                    </ListItemIcon>

                                    <ListItemText className={classes.content} disableTypography>
                                        <div className={classes.time}>
                                            {verbindung.time}
                                        </div>
                                        <div className={classes.ziel}>
                                            {verbindung.ziel}
                                        </div>
                                        <Divider className={classes.divider} variant="inset"/>
                                    </ListItemText>

                                </ListItem>
                            </div>
                            :
                            <div className={classes.indenter}>

                            <ListItem key={Math.random()} className={classes.listItem}>

                            <ListItemIcon>
                        {trams.includes(verbindung.linie) ?
                            <IconButton className={classes.tram}>
                        {verbindung.linie}
                            </IconButton>
                            :
                            <IconButton className={classes.bus} >
                        {verbindung.linie}
                            </IconButton>}

                            </ListItemIcon>

                            <ListItemText className={classes.content} disableTypography>
                            <div className={classes.time}>
                        {verbindung.time}
                            </div>
                            <div className={classes.ziel}>
                        {verbindung.ziel}
                            </div>
                            <Divider className={classes.divider} variant="inset"/>
                            </ListItemText>

                            </ListItem>
                            </div>
                        }
                    </>
                    ))}

            </List>
        </div>
    );
}
export default Connections;