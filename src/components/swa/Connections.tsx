import React, {useCallback, useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import {fetchData} from "./Request";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

interface props {

}
export interface Verbindung {
    time: string,
    linie: string,
    ziel: string
}

const Connections = () => {
    const classes = useStyles();
    const [alleVerbindungen, setAlleVerbindungen] = useState<Array<Verbindung> | void>();

    const fetchIt = useCallback(async () => {
        const x = await fetchData();
        setAlleVerbindungen(x)
        console.log(alleVerbindungen)

    }, [])

    useEffect(() => {
        fetchIt()
        //alleVerbindungen?.map(verbindung => console.log(verbindung.time))
    }, [])


    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                {alleVerbindungen?.map(verbindung => (
                    <ListItem key={Math.random()}>
                        <ListItemText primary={`${verbindung.time} - ${verbindung.ziel}`}>

                        </ListItemText>
                    </ListItem>
                ))}
                <ListItem button>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Inbox"/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Drafts"/>
                </ListItem>
            </List>
            <Divider/>
            <List component="nav" aria-label="secondary mailbox folders">
                <ListItem button>
                    <ListItemText primary="Trash"/>
                </ListItem>
            </List>
        </div>
    );
}
export default Connections;