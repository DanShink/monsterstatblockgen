import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from './ProTip';

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }} style={{ display: 'flex', textAlign: 'center'}}>
          Monster Statblock Generator for DC20
        </Typography>
        <ProTip />
      </Box>
    </Container>
  );
}
