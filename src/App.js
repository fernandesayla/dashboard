import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import AppNavBar from './components/AppNavBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { blue, yellow } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

import 'typeface-roboto';
import { Container } from '@material-ui/core';
import PerfilCarteira from './components/pages/perfilCarteira/PerfilCarteira';
import Credito from './components/pages/Credito';
import Cambio from './components/pages/Cambio';
import Visitas from './components/pages/Visitas';
import Resultado from './components/pages/Resultado';

function App() {
  const classes = useStyles();
  const [valueTab, setValueTab] = useState(0);

  function handleChange(event, newValue) {
    setValueTab(newValue);
  }

  return (
    <Provider store={store}>
      <Router initialEntries="/dashboard/" initialIndex={0}>
        <CssBaseline />
        <div className={classes.root}>
          <ThemeProvider theme={theme}>
            <AppNavBar handleChange={handleChange} valueTab={valueTab} />
            <main className={classes.content}>
              <Container maxWidth="xl">
                <Switch>
                  <Route
                    exact
                    path="/dashboard/"
                    render={() => <PerfilCarteira />}
                  />
                  <Route
                    exact
                    path="/dashboard/credito/"
                    render={() => <Credito />}
                  />
                  <Route
                    exact
                    path="/dashboard/cambio/"
                    render={() => <Cambio />}
                  />
                  <Route
                    exact
                    path="/dashboard/resultado/"
                    render={() => <Resultado />}
                  />
                  <Route
                    exact
                    path="/dashboard/visitas"
                    render={() => <Visitas />}
                  />
                </Switch>
              </Container>
            </main>
          </ThemeProvider>
        </div>
      </Router>
    </Provider>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  content: { flexGrow: 1, paddingTop: 150 }
}));

let theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: yellow
  },
  status: {
    danger: 'orange'
  }
});

export default App;
