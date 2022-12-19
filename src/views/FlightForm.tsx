import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
import dayjs, { Dayjs } from 'dayjs';
import { NavBar } from '../components';
import { Stack, Box, Grid, Typography, TextField, Button } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useQuery } from '../utils/hooks';
import { currentFlight } from '../utils/faker/FlightFaker';
import { Navigate } from 'react-router-dom';

const ActionCrud = () => {
    let query = useQuery();
    // const [create, setCreate] = useState()
    const [newDate, setNewDate] = React.useState<Dayjs | null>();
    const [dateEdit, setDateEdit] = React.useState<Dayjs | null>();

    const newDateHandle = (newDate: Dayjs | null, newDateinput: Dayjs | null) => {
        setNewDate(newDate);
    };
    const handleChangeEditDate = (editDate: Dayjs | null, newDate: Dayjs | null) => {
        setDateEdit(editDate);
    };

    const centerGeneralStyle = {
        display: 'flex',
        justifyContent: 'center'
    }
    const containerStyle = {
        ...centerGeneralStyle,
        height: 'calc(100vh - 64px)',
        animation: 'pulse'
      }
    const formStyles = {
        ...centerGeneralStyle,
        border: '0px solid #064420',
        backgroundColor: 'primary.light',
        borderRadius: '10px',
        width: '600px',
        m: '30px',
        p: '60px'
    }

    function handleNavigate(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if(query.get("type") === "create"){
            //
        }
    }

  return (
    <form onSubmit={(event) => {handleNavigate(event)}}>
    <Box>
        <NavBar/>
        <Grid container sx={containerStyle}>
            <Grid container sx={formStyles}>
                <Grid item xs={12}>
                    <Typography variant='h5'sx={centerGeneralStyle}>
                        {(query.get("type") === 'create')?"Create Flight":"Update Flight"}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Stack spacing={1}>
                    <DesktopDatePicker
                        label="Fecha Máxima"
                        inputFormat="DD/MM/YYYY"
                        value={newDate}
                        onChange={newDateHandle}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    </Stack>
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        required
                        id="standard-required"
                        label="Starting Airport"
                        defaultValue={(query.get("type") === 'create')?"":currentFlight.startingAirport}
                        variant="standard"
                        />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        required
                        id="standard-required"
                        label="Destination Airport"
                        defaultValue={(query.get("type") === 'create')?"":currentFlight.destinationAirport}
                        variant="standard"
                        />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        required
                        id="standard-required"
                        label="Flight Date"
                        defaultValue={(query.get("type") === 'create')?"":currentFlight.fecha}
                        variant="standard"
                        />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        required
                        id="standard-required"
                        label="Flight Price"
                        defaultValue={(query.get("type") === 'create')?"":currentFlight.price}
                        variant="standard"
                        />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="standard-required"
                        label="Seats Remaining"
                        defaultValue={(query.get("type") === 'create')?"":currentFlight.seatsRemaining}
                        variant="standard"
                        />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        required
                        id="standard-required"
                        label="Is the Flight Economy?"
                        defaultValue={(query.get("type") === 'create')?"":currentFlight.characteristics.isEconomy}
                        variant="standard"
                        />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        required
                        id="standard-required"
                        label="Is the Flight Non Stop?"
                        defaultValue={(query.get("type") === 'create')?"":currentFlight.characteristics.isNonStop}
                        variant="standard"
                        />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        required
                        id="standard-required"
                        label="Is the Flight Refundable?"
                        defaultValue={(query.get("type") === 'create')?"":currentFlight.characteristics.isRefundable}
                        variant="standard"
                        />
                </Grid>
                <Grid item xs={12}>
                    <Button fullWidth
                        variant="contained"
                        color="primary"
                        size="medium"
                        type="submit">
                        {(query.get("type") === 'create')?"Create":"Update"}
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    </Box>
    </form>
  )
}

export default ActionCrud