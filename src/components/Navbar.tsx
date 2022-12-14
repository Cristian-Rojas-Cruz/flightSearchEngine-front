import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography component="h2">
            Flight Search Engine
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}