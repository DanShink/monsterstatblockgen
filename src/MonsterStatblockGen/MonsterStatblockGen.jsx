import React from 'react';
import Typography from '@mui/material/Typography';
import ProTip from '../ProTip';

export default function MonsterStatblockGen() {
  return (
    <React.Fragment>
      <Typography variant="h4" component="h1" sx={{ mb: 2 }} style={{ display: 'flex', textAlign: 'center'}}>
        Monster Statblock Generator for DC20
      </Typography>
      <div>
        CONTENT
      </div>
      <ProTip />
    </React.Fragment>
  );
}