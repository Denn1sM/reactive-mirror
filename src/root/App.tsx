import React from 'react';
import './App.css';
import { makeStyles, MuiThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';
import theme from '../theme';
import Layout from './Layout';
import Router from './Router';
import store from '../state/store.js';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'black',
    margin: 0,
    width: '100%',
    height: '100vh',
    fontSize: '30px',
    fontStyle: 'bold',
  },
  layout: {
    position: 'absolute',
  },
  router: {
    position: 'absolute',
  },
});

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
            <Router />
            <Layout />

        </Provider>

      </MuiThemeProvider>
    </div>
  );
};

export default App;
