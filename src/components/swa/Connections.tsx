import React, { useCallback, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { IconButton } from '@material-ui/core';
import { fetchData } from './Request';
import { getDummyConnections } from '../../functions/Functions';
import { Verbindung } from '../../state/transport/to';

const useStyles = makeStyles((theme) => ({
  list: {
    backgroundColor: 'transparent',
    color: theme.palette.primary.contrastText,
    fontSize: '20px',
    fontWeight: 'lighter',

  },
  listItem: {
    height: '55px',
    width: '300px',
    fontSize: 'inherit',
    borderBottom: theme.palette.primary.light,

  },
  content: {
    fontFamily: 'Orbitron',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    whiteSpace: 'nowrap',
  },
  time: {
    width: '30%',
  },
  ziel: {
    paddingLeft: '30px',
    width: '70%',
    whiteSpace: 'nowrap',
  },
  tram: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.secondary.contrastText,
    height: '35px',
    fontSize: '17px',
    width: '35px',
    fontFamily: 'orbitron',
    animation: '$glowTram 4s infinite alternate',
    boxShadow: `0px 0px 6px 3px ${theme.palette.info.main}`,
    fontWeight: 'bold',

  },

  '@keyframes glowTram': {
    '0%': {
      boxShadow: `inset 0px 0px 6px 2px ${theme.palette.info.main}, 0px 0px 6px 2px ${theme.palette.info.main}`,
    },
    '100%': {
      boxShadow: `inset 0px 0px 6px 8px ${theme.palette.info.main}, 0px 0px 6px 4px ${theme.palette.info.main}`,
    },
  },

  '@keyframes glowBus': {
    '0%': {
      boxShadow: `inset 0px 0px 6px 2px ${theme.palette.secondary.main}, 0px 0px 6px 2px ${theme.palette.secondary.main}`,
    },
    '100%': {
      boxShadow: `inset 0px 0px 6px 8px ${theme.palette.secondary.main}, 0px 0px 6px 4px ${theme.palette.secondary.main}`,
    },
  },

  bus: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    height: '35px',
    width: '35px',
    fontSize: '17px',
    fontFamily: 'orbitron',
    animation: '$glowBus 4s infinite alternate',
    boxShadow: `0px 0px 6px 3px ${theme.palette.secondary.main}`,
    fontWeight: 'bold',

  },
  indenter: {
    paddingLeft: '20px',
    '&:nth-child(2)': {
      paddingLeft: '70px',
    },
    '&:nth-child(3)': {
      paddingLeft: '105px',
    },
    '&:nth-child(4)': {
      paddingLeft: '125px',
    },
    '&:nth-child(5)': {
      paddingLeft: '140px',
    },
  },
  indenterInverted: {
    paddingLeft: '140px',
    '&:nth-child(2)': {
      paddingLeft: '125px',
    },
    '&:nth-child(3)': {
      paddingLeft: '105px',
    },
    '&:nth-child(4)': {
      paddingLeft: '70px',
    },
    '&:nth-child(5)': {
      paddingLeft: '20px',
    },
  },
  divider: {
    backgroundColor: theme.palette.primary.light,
    height: '0.1px',
  },
}));

interface Props {
    haltestelle: string;
    invertOrientation: boolean;
}

const Connections: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [alleVerbindungen, setAlleVerbindungen] = useState<Array<Verbindung> | void>();
  const [lastRequestTime, setLastRequestTime] = useState<number>();

  const fetchIt = useCallback(async () => {
    console.log('Started fetch');
    if (!lastRequestTime || (lastRequestTime && lastRequestTime < (Date.now() - 60000))) {
      const x = await fetchData(props.haltestelle);
      setAlleVerbindungen(x);
      setLastRequestTime(Date.now());
      console.log(x);
      console.log('----------Fetched---------');
    }
  }, []);

  useEffect(() => {
    setAlleVerbindungen(getDummyConnections());
    fetchIt();
    setInterval(() => fetchIt(), 60000);
  }, [fetchIt]);

  const trams = ['1', '2', '3', '4', '5', '6'];

  return (
    <div className={classes.list}>
      <List className={classes.list}>
        {alleVerbindungen?.map((verbindung, index) => (
          <>
            {props.invertOrientation
              ? (
                <div key={index} className={classes.indenterInverted}>

                  <ListItem className={classes.listItem}>

                    <ListItemIcon>
                      {trams.includes(verbindung.linie)
                        ? (
                          <IconButton className={classes.tram}>
                            {verbindung.linie}
                          </IconButton>
                        )
                        : (
                          <IconButton className={classes.bus}>
                            {verbindung.linie}
                          </IconButton>
                        )}

                    </ListItemIcon>

                    <ListItemText className={classes.content} disableTypography>
                      <div className={classes.time}>
                        {verbindung.time}
                      </div>
                      <div className={classes.ziel}>
                        {verbindung.ziel}
                      </div>
                      <Divider className={classes.divider} variant="inset" />
                    </ListItemText>

                  </ListItem>
                </div>
              )
              : (
                <div key={index} className={classes.indenter}>

                  <ListItem className={classes.listItem}>

                    <ListItemIcon>
                      {trams.includes(verbindung.linie)
                        ? (
                          <IconButton className={classes.tram}>
                            {verbindung.linie}
                          </IconButton>
                        )
                        : (
                          <IconButton className={classes.bus}>
                            {verbindung.linie}
                          </IconButton>
                        )}

                    </ListItemIcon>

                    <ListItemText className={classes.content} disableTypography>
                      <div className={classes.time}>
                        {verbindung.time}
                      </div>
                      <div className={classes.ziel}>
                        {verbindung.ziel}
                      </div>
                      <Divider className={classes.divider} variant="inset" />
                    </ListItemText>

                  </ListItem>
                </div>
              )}
          </>
        ))}

      </List>
    </div>
  );
};
export default Connections;
