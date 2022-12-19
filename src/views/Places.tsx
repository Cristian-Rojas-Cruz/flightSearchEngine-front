import { useState } from 'react';
import { NavBar, Map } from '../components';
import { Box } from '@mui/material';

const Places = () => {
  const [count, setCount] = useState(0)

  const containerStyle = {
    m: 0,
    height: 'calc(100vh - 64px)',
    animation: 'pulse'
  }

  return (
    <Box sx={containerStyle}>
        <NavBar/>
        <p>Places</p>
    </Box>
  )
}

export default Places