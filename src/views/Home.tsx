import React from 'react'
import { NavBar, FormHome, DatePicker } from '../components'
import { Box, Grid, Container } from '@mui/material';
import img_home from '../assets/img/img_home.png'
const Home = () => {
  var altura = screen.width;
  console.log(altura);
  return (
    <div>
      <NavBar/>
      <Grid container>
        <Grid xs={6} class="img_home">
          <img src={img_home} class=""/>
        </Grid>
        <Grid xs={6}>
          <FormHome/>
          <DatePicker/>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home