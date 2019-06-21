import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import AppNavBar from './components/AppNavBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { blue, yellow } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import responsiveFontSizes from '@material-ui/core/styles';
function App() {
  return (
    <Router>
      <CssBaseline />
      <div className="App">
        <ThemeProvider theme={theme}>
          <AppNavBar />
        </ThemeProvider>
      </div>
    </Router>
  );
}

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
