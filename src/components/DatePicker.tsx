import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { Stack, TextField, Container } from '@mui/material';
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

  return (
    <Container class="inputs">
      {/* IDA */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={2}>
          <DesktopDatePicker
            label="Fecha de Ida"
            inputFormat="DD/MM/YYYY"
            value={initial}
            onChange={handleChangeInitial}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>

      {/* VUELTA */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={2}>
          <DesktopDatePicker
            label="Fecha de Vuelta"
            inputFormat="DD/MM/YYYY"
            value={final}
            onChange={handleChangeFinal}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
      {console.log("aqui",final)}
    </Container>
  );
}