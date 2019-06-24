import React from 'react';
import { Typography, Box } from '@material-ui/core';

function Kpi({ data }) {
  const { title, infor, time } = data;

  return (
    <Box
      style={{
        backgroundColor: '#3F6CB3',
        color: 'white',
        textAlign: 'center',
        padding: 16,
        heigth: 100
      }}
    >
      <Typography variant="h5">{infor}</Typography>
      <Typography variant="subtitle1">{title}</Typography>
      <Typography variant="subtitle2"> {time}</Typography>
    </Box>
  );
}

export default Kpi;
