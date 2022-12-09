import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" class="bg-primary color-white">
        <Toolbar>
          <Typography component="h2" class="fz-20 fw-6">
            Flight Search Engine
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}