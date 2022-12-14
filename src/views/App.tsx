import { useState } from 'react'
import { NavBar, FormHome, DatePicker } from '../components';
import { Box, Grid, CardMedia } from '@mui/material';
import img_home from '../assets/img/img_home.png';

function App() {
  const [count, setCount] = useState(0)

  const containerStyle = {
    m: 0,
    height: 'calc(100vh - 64px)',
    animation: 'pulse'
  }
  const containerCenter = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  return (
    <Box sx={containerStyle}>
    <NavBar/>
      <Grid container sx={containerCenter} >
        <Grid item xs={5}
          bgcolor="secondary.main">
          <CardMedia sx={containerStyle}
            component="img"
            image={img_home}
            alt="Flight Search"
            />
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={4} sx={containerCenter}
        flexDirection="column">
          <FormHome/>
        </Grid>
      </Grid>
    </Box>
  )
}

export default App