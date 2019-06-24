import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import Box from '@material-ui/core/Box';

const Pie = ({ data }) => (
  <Box style={{ padding: '1em' }}>
    <div className="Title">PIE</div>
    <ResponsivePie
      data={data}
      margin={{ top: 8, right: 8, bottom: 30, left: 8 }}
      innerRadius={0.5}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  </Box>
);

export default Pie;
