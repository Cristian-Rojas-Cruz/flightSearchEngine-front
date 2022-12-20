import React, { useEffect, useState } from 'react';
import { NavBar } from '../components';
import { Box, Grid, Typography, TextField, Button, FormControlLabel, Checkbox } from '@mui/material';
import { useQuery } from '../utils/hooks';
import { currentFlight } from '../utils/faker/FlightFaker';

const ActionCrud = () => {
    let query = useQuery();

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
                <Grid item xs={6}>
                    <TextField
                        required
                        id="standard-required"
                        label="Starting Airport"
                        placeholder='SDR'
                        defaultValue={(query.get("type") === 'create')?"":currentFlight.startingAirport}
                        variant="standard"
                        />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        required
                        id="standard-required"
                        label="Destination Airport"
                        placeholder='BOG'
                        defaultValue={(query.get("type") === 'create')?"":currentFlight.destinationAirport}
                        variant="standard"
                        />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        required
                        id="standard-required"
                        label="Flight Date"
                        placeholder='30/5/2022'
                        defaultValue={(query.get("type") === 'create')?"":currentFlight.fecha.toLocaleDateString()}
                        variant="standard"
                        />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        required
                        id="standard-required"
                        label="Flight Price"
                        type="number"
                        placeholder='217,50'
                        defaultValue={(query.get("type") === 'create')?"":currentFlight.price}
                        variant="standard"
                        />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="standard-required"
                        label="Seats Remaining"
                        type="number"
                        defaultValue={(query.get("type") === 'create')?"":currentFlight.seatsRemaining}
                        variant="standard"
                        />
                </Grid>
                <Grid item xs={4}>
                    <FormControlLabel control={<Checkbox />} label="Is the Flight Economy?" />
                </Grid>
                <Grid item xs={4}>
                    <FormControlLabel control={<Checkbox />} label="Is the Flight Non Stop?" />
                </Grid>
                <Grid item xs={4}>
                    <FormControlLabel control={<Checkbox />} label="Is the Flight Refundable?" />
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