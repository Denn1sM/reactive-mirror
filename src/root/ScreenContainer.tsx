import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Connections from '../components/swa/Connections';
import Clock from '../components/Clock/Clock';
import Kalender from '../components/Calendar/Kalender';
import Weather from '../components/Weather/Weather';
import theme from '../theme';

const first = theme.palette.secondary.light;
const second = theme.palette.info.main;
const third = theme.palette.info.dark;
const useStyles = makeStyles((theme) => ({
  back: {
    backgroundColor: 'black',
    position: 'absolute',
    fontFamily: 'Times',
    color: 'white',
    fontSize: '5px',
  },
  topLeft: {
    position: 'absolute',
    top: '0%',
    width: '45%',
    height: '40%',
    overflow: 'hidden',
    marginLeft: '6%',
  },

  middle: {
    position: 'absolute',
    top: '40%',
    height: '20%',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  stopAndIcon: {
    // marginLeft: "3%",
    height: '450px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  StopTop: {
    width: '140px',
    height: '50px',
    fontWeight: 'bolder',
    fontSize: '17px',
    background: `linear-gradient(45deg, ${theme.palette.info.light} 30%, ${theme.palette.success.main} 90%), radial-gradient(${theme.palette.primary.contrastText}, ${theme.palette.info.light})`,
    fontFamily: 'orbitron',
    WebkitBackgroundClip: 'text !important',
    textFillColor: 'transparent',
    // textAlign: "center"
  },
  StopBottom: {
    width: '140px',
    height: '50px',
    fontWeight: 'bolder',
    fontSize: '17px',
    fontFamily: 'orbitron',
    WebkitBackgroundClip: 'text !important',
    color: 'white',
    textFillColor: 'transparent',
    background: `linear-gradient(45deg, ${theme.palette.secondary.light} 30%, ${theme.palette.secondary.main} 90%), radial-gradient(${theme.palette.primary.contrastText}, ${theme.palette.info.light})`,
    // textAlign: "center"

  },
  animation: {
    height: '120px',
    width: '120px',
    borderRadius: '50%',
    animation: '$spin 25s infinite alternate',
  },
  clock: {
    minWidth: '400px',
    maxWidth: '400px',
    paddingLeft: '140px',
  },

  animation2: {
    height: '5px',
    width: '40%',
    borderRadius: '50%',
    marginRight: '200px',
    animation: '$spin 25s infinite alternate',

  },

  bottomLeft: {
    position: 'absolute',
    top: '60%',
    width: '45%',
    height: '40%',
    overflow: 'hidden',
    marginLeft: '6%',

  },
  topRight: {
    position: 'absolute',
    top: '0%',
    left: '50%',
    height: '45%',
    width: '50%',
    // overflow: "hidden",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  spacerWide: {
    width: '100px',
  },
  spacerSmall: {
    width: '50px',
  },

  bottomRight: {
    position: 'absolute',
    width: '40%',
    left: '60%',
    top: '55%',
    height: '40%',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  // bubble size: ca 15px, muss die differenz aus den offsets ergeben
  '@keyframes spin': {
    '0%': {
      boxShadow: `inset 8px 0 10px ${third},inset 0 15px 15px ${second},inset -7px -5px 8px ${first},
            -5px 0 50px ${third},-2px 0 8px ${third}, 2px -8px 10px ${second}, 0px 4px 10px ${first}`,
    },

    '17%': {
      boxShadow: `inset -8px 1 10px ${third},inset -5px 10px 10px ${second},inset 2px -5px 6px ${first},
            5px 0 50px ${third},2px 0 8px ${third}, 0px -11px 10px ${second}, -9px 5px 10px ${first}`,

    },
    '35%': {
      boxShadow: `inset -8px 0 8px ${third},inset 0 15px 10px ${second},inset 5px 2px 4px ${first},
            5px 0 50px ${third},2px 0 8px ${third}, 0px -15px 10px ${second}, -3px  2px 10px ${first}`,

    },
    '50%': {
      boxShadow: `inset -8px -1 8px ${third},inset 0 13px 11px ${second},inset 5px 2px 4px ${first},
            5px 0 45px ${third},2px 0 8px ${third}, 0px -12px 10px ${second}, 2px  1px 10px ${first}`,

    },
    '65%': {
      boxShadow: `inset -1px -2px 10px ${first},inset 0 15px 13px ${second},inset -7px -5px 8px ${third},
            -2px -3px 50px ${first},-2px 0 8px ${first}, 2px -8px 10px ${second}, 0px 4px 10px ${third}`,
    },

    '78%': {
      boxShadow: `inset 1px -1px 10px ${first},inset -5px 10px 10px ${second},inset 2px 5px 6px ${third},
            0px 4px 50px ${first},2px 0 8px ${first}, 0px -15px 10px ${second}, -2px -2px 10px ${third}`,

    },
    '100%': {
      boxShadow: `inset 1px -2px 10px ${first},inset -5px 7px 10px ${second},inset 5px 2px 4px ${third},
            0px 4px 50px ${first},2px 0 8px ${first}, 5px -10px 14px ${second}, -2px  -1px 10px ${third}`,

    },

  },
  '@keyframes glow': {
    '0%': {
      boxShadow: '#474747 0px 0px 12px 2px',
    },
    '100%': {
      boxShadow: '#5e5d5e 0px 0px 12px 20px',
    },
  },

}));

/*
Haltestellen: Rotes Tor: 2000116 Hochschule: 2000768
 */

const ScreenContainer: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.topLeft}>
        <Connections key="2000116" haltestelle="2000116" invertOrientation={false} />
      </div>

      <div className={classes.middle}>
        <div className={classes.stopAndIcon}>
          <div className={classes.StopTop}>
            <p>
              ROTES TOR
            </p>
          </div>

          <div className={classes.StopBottom}>
            <p>
              HOCHSCHULE
            </p>
          </div>
        </div>

        <div className={classes.clock}>
          <Clock />
        </div>
      </div>

      <div className={classes.bottomLeft}>
        <Connections key="2000768" haltestelle="2000768" invertOrientation />
      </div>

      <div className={classes.topRight}>
        <Weather />
      </div>

      <div className={classes.bottomRight}>
        <Kalender />
        <div className={classes.spacerSmall} />
      </div>
    </>
  );
};
export default ScreenContainer;

//                <div className={classes.animation2}/>
