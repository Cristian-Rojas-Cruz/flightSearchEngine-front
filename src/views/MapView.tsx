import { useState } from 'react';
import { NavBar, Map } from '../components';
import { Box, Grid } from '@mui/material';

const MapView = () => {
  const [count, setCount] = useState(0)

  const containerStyle = {
    m: 0,
    height: 'calc(100vh - 64px)',
    animation: 'pulse'
  }

  return (
    <Box sx={containerStyle}>
      <NavBar/>
        <Grid item>
          <Map/>
        </Grid>
    </Box>
  )
}

export default MapView