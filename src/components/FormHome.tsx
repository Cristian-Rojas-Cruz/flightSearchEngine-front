import React from "react";
import dayjs, { Dayjs } from 'dayjs';
import {  Stack,
          TextField,
          Typography,
          Grid,
          Button,
          MenuItem,
          InputLabel,
          FormControl
        } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useNavigate } from "react-router-dom";

export default function FormHome() {

  const navigate = useNavigate();
  const [initial, setInitial] = React.useState<Dayjs | null>(
    dayjs(Date()),
  );
  const [final, setFinal] = React.useState<Dayjs | null>(
    dayjs(Date()),
  );
  const [initialPrice, setInitialPrice] = React.useState("50");
  const [finalPrice, setFinalPrice] = React.useState("200");  
  
  const handleChangeInitial = (newDateInitial: Dayjs | null) => {
    setInitial(newDateInitial);
  };
  const handleChangeFinal = (newDateFinal: Dayjs | null) => {
    setFinal(newDateFinal);
  };
  const initialPriceChange = (event: SelectChangeEvent) => {
    setInitialPrice(event.target.value as string);
  };
  const finalPriceChange = (event: SelectChangeEvent) => {
    setFinalPrice(event.target.value as string);
  };
  // : MouseEvent<HTMLButtonElement, MouseEvent>
  const handleNavigate = (event: any) => {
    event.preventDefault();
    navigate('/map/' + initialPrice + "-" + finalPrice + "/" + initial + "-" + final);
  }

  const flex = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
  const input = {
    ...flex,
    border: 1,
    borderColor: 'common.black',
    borderRadius: '10px',
  }

  return (
    <form onSubmit={(event) => {handleNavigate(event)}}>
      <Grid container rowSpacing={6} sx={flex}>
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
          <Grid item sx={flex} xs={12}>

            {/* INIT DATE PICKER */}
            <Grid container sx={input} spacing={2}>
              <Grid item xs={6}>
              {/* IDA */}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={1}>
                  <DesktopDatePicker
                    label="Fecha de Ida"
                    inputFormat="DD/MM/YYYY"
                    value={initial}
                    onChange={handleChangeInitial}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Stack>
              </LocalizationProvider>
              </Grid>

              {/* VUELTA */}
              <Grid item xs={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={1}>
                  <DesktopDatePicker
                    label="Fecha de Vuelta"
                    inputFormat="DD/MM/YYYY"
                    value={final}
                    onChange={handleChangeFinal}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Stack>
              </LocalizationProvider>
              </Grid>
            </Grid>
            {/* END DATE PICKER */}
          </Grid>
          <Grid item sx={flex} xs={12}>
            {/* INIT SELECT PRICE */}
            <Grid container sx={input} spacing={2}>
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
            {/* END SELECT PRICE */}
          </Grid>
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
