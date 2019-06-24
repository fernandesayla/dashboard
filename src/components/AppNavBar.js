import React from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Toolbar, Typography, Tab, Tabs } from '@material-ui/core';

function AppNavBar({ handleChange, valueTab }) {
  return (
    <AppBar color="primary">
      <Toolbar>
        <Typography variant="h6">UCE</Typography>
      </Toolbar>

      <Tabs
        value={valueTab}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab label="Perfil da Carteira" component={Link} to="/dashboard/" />
        <Tab label="Crédito" component={Link} to="/dashboard/credito" />
        <Tab label="Câmbio" component={Link} to="/dashboard/cambio" />
        <Tab label="Resultado" component={Link} to="/dashboard/cambio" />
        />
        <Tab label="Visitas" component={Link} to="/dashboard/visitas" />
        />
      </Tabs>
    </AppBar>
  );
}

export default AppNavBar;
