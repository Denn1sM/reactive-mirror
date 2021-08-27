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
        boxShadow: "rgba(99, 99, 99, 0.3) -5px 2px 8px 0px",
        backgroundColor: "black",
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
        width: "80%"
    },
    time: {
        width: "30%"
    },
    ziel: {
        width: "70%",
        whiteSpace: "nowrap",
    },
    tram: {
        backgroundColor: theme.palette.secondary.light,
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
    divider: {
        backgroundColor: theme.palette.primary.light,
        height: "0.1px"
    }
}));

interface Props {
    haltestelle: string;
}
export interface Verbindung {
    time: string,
    linie: string,
    ziel: string
}

const Connections: React.FC<Props> = (props) => {
    const classes = useStyles();
    const [alleVerbindungen, setAlleVerbindungen] = useState<Array<Verbindung> | void>();

    const fetchIt = useCallback(async () => {
        console.log("Started fetch")
        const x = await fetchData(props.haltestelle);
        setAlleVerbindungen(x)
        console.log(alleVerbindungen)

    }, [])
    useEffect(() => {
        console.log("effect")
        fetchIt()
    }, [])
    setInterval(() => fetchIt(), 100000);
    const trams = ["1", "2", "3", "4", "5", "6"]

    return (
        <div className={classes.list}>
            <List component="nav" aria-label="main mailbox folders">
                {alleVerbindungen?.map(verbindung => (
                    <>
                    <ListItem key={Math.random()} className={classes.listItem}>
                        <ListItemIcon>
                            {trams.includes(verbindung.linie) ?
                                <IconButton className={classes.tram}>
                                    {verbindung.linie}
                                </IconButton>
                            :
                                <IconButton className={classes.bus} >
                                    {verbindung.linie}
                                </IconButton>                            }

                        </ListItemIcon>

                        <ListItemText className={classes.content} disableTypography>
                            <div className={classes.time}>
                                {verbindung.time}
                            </div>
                            <div className={classes.ziel}>
                                {verbindung.ziel}
                            </div>

                        </ListItemText>
                    </ListItem>
                    <Divider className={classes.divider} variant="inset"/>
                    </>
                ))}

            </List>
        </div>
    );
}
export default Connections;