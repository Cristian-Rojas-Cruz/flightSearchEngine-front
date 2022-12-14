import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import {MenuItem, Grid } from '@mui/material/';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectPrice() {
  const [initialPrice, setInitialPrice] = React.useState('');

  const [finalPrice, setFinalPrice] = React.useState('');

  const initialPriceChange = (event: SelectChangeEvent) => {
    setInitialPrice(event.target.value as string);
  };

  const finalPriceChange = (event: SelectChangeEvent) => {
    setFinalPrice(event.target.value as string);
  };

  const containerCenter = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 1,
    borderColor: 'black',
    borderRadius: '10px'
  }

  return (
    <Grid container sx={containerCenter} spacing={2} fullWidth>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Precio Mínimo</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={initialPrice}
            label="Precio Mínimo"
            onChange={initialPriceChange}
          >
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={100}>100</MenuItem>
            <MenuItem value={200}>200</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
          <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Precio Máximo</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={finalPrice}
            label="Precio Máximo"
            onChange={finalPriceChange}
          >
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={100}>100</MenuItem>
            <MenuItem value={200}>200</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}