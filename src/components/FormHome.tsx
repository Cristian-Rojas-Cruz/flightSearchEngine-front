import React from "react";
import { Typography, Grid, Button } from '@mui/material';
import { DatePicker, SelectPrice } from "./index"
export default function FormHome() {
  const containerCenter = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
  return (
    <Grid container rowSpacing={6} sx={containerCenter}>
      <Grid item>
      <Typography variant="h1">
            Flight Search Engine
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essential
        </Typography>
        </Grid>
        <Grid item sx={containerCenter} xs={12}>
          <DatePicker/>
        </Grid>
        <Grid item sx={containerCenter} xs={12}>
          <SelectPrice/>
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth
            variant="contained"
            color="primary"
            size="large"
            href="/map"
            onClick={() => {
              alert('clicked');
            }}>
            BUSCAR
        </Button>
      </Grid>
    </Grid>
  )
}
