import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { Stack, TextField, Grid } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export default function DatePicker() {
  const [initial, setInitial] = React.useState<Dayjs | null>(
    dayjs(Date()),
  );
  const [final, setFinal] = React.useState<Dayjs | null>(
    dayjs(Date()),
  );

  const handleChangeInitial = (newDateInitial: Dayjs | null) => {
    setInitial(newDateInitial);
  };
  const handleChangeFinal = (newDateFinal: Dayjs | null) => {
    setFinal(newDateFinal);
  };

  const containerCenter = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 1,
    borderColor: 'common.black',
    borderRadius: '10px'
  }

  return (
    <Grid container sx={containerCenter} spacing={2}>
      <Grid item xs={6}>
      {/* IDA */}
      <LocalizationProvider dateAdapter={AdapterDayjs} fullWidth>
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

      {console.log("aqui",final)}
    </Grid>
  );
}