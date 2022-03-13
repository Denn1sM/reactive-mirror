import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  clock: {
    fontSize: '40px',
    fontFamily: 'orbitron',
    color: theme.palette.primary.contrastText,
  },
}));

const Clock: React.FC = () => {
  const classes = useStyles();

  const [second, setSecond] = useState<string>('0');
  const [minute, setMinute] = useState<string>('0');
  const [hour, setHour] = useState<string>('0');

  useEffect(() => {
    setInterval(() => {
      const time = new Date();
      const minutesInt = time.getMinutes();
      const secondsInt = time.getSeconds();
      const hoursInt = time.getHours();
      setMinute(minutesInt < 10 ? `0${minutesInt.toString()}` : minutesInt.toString());
      setSecond(secondsInt < 10 ? `0${secondsInt.toString()}` : secondsInt.toString());
      setHour(hoursInt < 10 ? `0${hoursInt.toString()}` : hoursInt.toString());
    }, 1000);
  }, []);



  return (
    <div className={classes.clock}>
      {`${hour}:${minute}:${second}`}
    </div>

  );
};
export default Clock;
