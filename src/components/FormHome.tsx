import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { Dayjs } from 'dayjs';
import { Stack, TextField, Typography, Grid, Button, MenuItem, InputLabel, FormControl } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useNavigate } from "react-router-dom";
import { placesFaker } from '../utils/faker/PlaceFaker';

export default function FormHome() {
  const navigate = useNavigate();
  const [initialDate, setInitialDate] = React.useState(Date.now());
  const [finalDate, setFinalDate] = React.useState(Date.now());
  const [initialPrice, setInitialPrice] = React.useState("0");
  const [finalPrice, setFinalPrice] = React.useState("300");
  const [iata, setIata] = React.useState('');

  const handleChangeIATA = (event: SelectChangeEvent) => {
    setIata(event.target.value);
  };
  const handleChangeInitial = (newDateInitial: Dayjs) => {
    // if(newDateInitial < new Dayjs(Date.now())){ document.getElementById('errorFecha').style.display = 'Flex';
    // } else { 
      setInitialDate(newDateInitial); 
    // }
  };
  const handleChangeFinal = (newDateFinal: Dayjs | null, newDateInitial: Dayjs | null) => {
    // if(newDateFinal < newDateInitial){ document.getElementById('errorFecha').style.display = 'Flex';
    // } else { 
      setFinalDate(newDateFinal); 
    // }
  };
  const initialPriceChange = (event: SelectChangeEvent) => {
    setInitialPrice(event.target.value as string);
  };
  const finalPriceChange = (event: SelectChangeEvent) => {
    setFinalPrice(event.target.value as string);
  };
  const handleNavigate = (event: any) => {
    event.preventDefault();
    let toastDate = document.getElementById("errorFecha");
    let toastPrice = document.getElementById("errorPrice");
    let toastIata = document.getElementById("errorIata");
    if(toastDate !== null){
      if(initialDate > finalDate){
        toastDate.style.display = 'Flex';
      }else{
        toastDate.style.display = 'none';
      }
    }
    if(toastPrice !== null){
      if(initialPrice > finalPrice){
        toastPrice.style.display = 'Flex';
      }else{
        toastPrice.style.display = 'none';
      }
    }
    if(toastIata !== null){
      if(iata === ''){
        toastIata.style.display = 'Flex';
      }else{
        toastIata.style.display = 'none';
      }
    }
    if(initialPrice <= finalPrice && initialDate <= finalDate && iata !== ""){
      navigate('/map/' + initialPrice + "-" + finalPrice + "/" + initialDate + "-" + finalDate+'/'+iata);
    }
  };
  const flex = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  const input = {
    ...flex,
    border: 1,
    borderColor: 'common.black',
    borderRadius: '10px',
  };
  const inputIata = {
    ...input,
    pt: 0
  };

  // useEffect(() => {
  //   axios.get(`https://jsonplaceholder.typicode.com/users`)
  //     .then((res) => {
  //     setIata(res.data);
  //   })
  // });

  return (
    <form onSubmit={(event) => {handleNavigate(event)}}>
      <Grid container rowSpacing={4}>
        <Grid item>
        <Typography variant="h1">
              Flight Search Engine
          </Typography>
        </Grid>
        <Grid item>
          <Typography>
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer.
          </Typography>
          </Grid>
          <Grid item sx={flex} xs={12}>
            {/* INIT DATE PICKER */}
            <Grid container sx={input} spacing={2}>
              <Grid item xs={6}>
              {/* IDA */}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={1}>
                  <DesktopDatePicker
                    label="Fecha mínima"
                    inputFormat="DD/MM/YYYY"
                    value={initialDate}
                    disablePast={true}
                    renderInput={(params) => <TextField {...params} />}
                    onChange={handleChangeInitial}
                  />
                </Stack>
              </LocalizationProvider>
              </Grid>
              {/* VUELTA */}
              <Grid item xs={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={1}>
                  <DesktopDatePicker
                    label="Fecha Máxima"
                    inputFormat="DD/MM/YYYY"
                    value={finalDate}
                    minDate={new Date(initialDate)}
                    disablePast={true}
                    onChange={handleChangeFinal}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Stack>
              </LocalizationProvider>
              </Grid>
            </Grid>
            {/* END DATE PICKER */}
          </Grid>
          <Typography id="errorFecha">Por favor revise las fechas</Typography>
          <Grid item sx={flex} xs={12}>
            {/* INIT SELECT PRICE */}
            <Grid container sx={input}>
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
                    <MenuItem value={0}>0</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={40}>40</MenuItem>
                    <MenuItem value={60}>60</MenuItem>
                    <MenuItem value={80}>80</MenuItem>
                    <MenuItem value={100}>100</MenuItem>
                    <MenuItem value={150}>150</MenuItem>
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
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={40}>40</MenuItem>
                    <MenuItem value={60}>60</MenuItem>
                    <MenuItem value={100}>100</MenuItem>
                    <MenuItem value={150}>150</MenuItem>
                    <MenuItem value={200}>200</MenuItem>
                    <MenuItem value={250}>250</MenuItem>
                    <MenuItem value={300}>300</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            {/* END SELECT PRICE */}
          </Grid>
          <Typography id="errorPrice">Por favor revise el precio</Typography>
          {/* INIT SELECT IATA */}
          <Grid item sx={flex} xs={12}>
            <Grid item sx={inputIata} xs={12}>
              <FormControl fullWidth>
                <InputLabel id="">Aereopuerto de Origen</InputLabel>
                <Select
                  labelId=""
                  id=""
                  value={iata}
                  label="Aereopuerto de Origen"
                  onChange={handleChangeIATA}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {placesFaker.map((place:any, index:number) =>  {
                    return(
                      <MenuItem key={index} value={place.iata}>{place.iata}</MenuItem>
                    )})}
                  {/* <MenuItem value={'SDR'}>Twenty</MenuItem>
                  <MenuItem value={'SDR'}>Tirty</MenuItem> */}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Typography id="errorIata">Por favor seleccione un iata</Typography>
          <Grid item xs={12}>
            <Button fullWidth
              variant="contained"
              color="primary"
              size="large"
              type="submit"
            >
              BUSCAR
            </Button>
          </Grid>
      </Grid>
    </form>
  )
}
