import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from '../components';
import { Box, Grid, Collapse, FormControlLabel, List, Checkbox, ListItemText, Typography, ListItemButton, CardContent, Fab, CardActions, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { flightsFaker } from '../utils/faker/FlightFaker';
import { Flight as FlightType } from '../utils/models';
import menu from '../../public/icons/menu.png';
import plus from '../../public/icons/plus-solid.svg';

const Flight = () => {
  const CardAction = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    p: 0,
  }
  const containerCards = {
    display: 'grid',
    gap: '40px',
    gridTemplateColumns: 'repeat(3, 1fr)',
    p: '30px',
  }
  const card = {
    display: 'flex',
    px: '10px',
    pb: '10px',
    flexDirection: 'column',
    justifyContent: 'center',
    border: '1px solid #064420',
    borderRadius: '10px'
  }
  const CardContentStyle = {
    p: '10px',
  }
  const cardWithOption = {
    display: 'flex',
    flexDirection: 'column',
  }

  interface DropDownState{
    _id: string,
    state: boolean
  }
  const [dropDownStates, setDropDownStates] = React.useState<DropDownState[]>([{_id:"", state: false}]);

  const generateDropDownStates =(flights: FlightType[])=>{
    let intStream = [...Array(flights.length).keys()]
    return intStream.map((e: number)=>{return {_id: flights[e]._id, state: false}});
  }
  const handleCardsDropdown = (_id: string) => {
    let newDropDownState = dropDownStates.map((e: DropDownState)=>{
      if(e._id === _id && e.state == false){
        return {_id: e._id, state: true}
      }else{
        return {_id: e._id, state: false}
      }
    })
    setDropDownStates([...newDropDownState]);
  };

  const searchFlightDropdownState = (_id: string) =>{
    return dropDownStates.reduce((accumulator:DropDownState, element:DropDownState) =>element._id == _id?element:accumulator).state;
  }


  useEffect(() =>{
    setDropDownStates([...generateDropDownStates(flightsFaker)]);
  }, []);

  return (
    <Box>
        <NavBar/>
        <Link className='btn btn--float' to="/flight/card?type=create">
          <Fab color="primary" aria-label="add">
            <img src={plus}/>
          </Fab>
        </Link>
        <Grid container sx={containerCards}>
        {flightsFaker.map((flight:FlightType, index:number) =>  {
        return(
          <Grid className="card" key={index} container sx={cardWithOption}>
            <Grid item sx={card}>
              <CardContent sx={CardContentStyle}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Fecha: {flight.fecha.toLocaleDateString()}</Typography>
                <Typography variant="h5" component="div">{flight.startingAirport} - {flight.destinationAirport}</Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">{flight._id}</Typography>
                <Box sx={CardAction}>
                  <Typography variant="body2">Asientos libres: {flight.seatsRemaining}</Typography>
                  <Typography variant="h6">{flight.price} €</Typography>
                </Box>
                <Box sx={CardAction}>
                  <FormControlLabel disabled control={(!flight.characteristics.isEconomy) ? <Checkbox /> : <Checkbox defaultChecked sx={{color: 'red'}}/>} label="Económico" />
                  <FormControlLabel disabled control={(!flight.characteristics.isRefundable) ? <Checkbox /> : <Checkbox defaultChecked />} label="Reembolsos" />
                  <FormControlLabel disabled control={(!flight.characteristics.isNonStop) ? <Checkbox /> : <Checkbox defaultChecked />} label="Directo" />
                </Box>
              </CardContent>
              <CardActions sx={CardAction}>
                <IconButton className='btn--centered'
                  // size="small"
                  aria-label="display more actions"
                  edge="end"
                  color="inherit"
                  onClick={() =>{ handleCardsDropdown(flight._id)}}
                >
                  <img src={menu} />
                </IconButton>
              </CardActions>
            </Grid>
            <Collapse className='card__collapsable' in={searchFlightDropdownState(flight._id)} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Link to={`/flight/card?type=edit&objectId=${flight._id}`} className="inputLink">
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Editar" />
                </ListItemButton>
                </Link>
                <ListItemButton sx={{ pl: 4 }}  className="inputLink">
                    <ListItemText primary="Eliminar" />
                </ListItemButton>
              </List>
            </Collapse>
          </Grid>
        )})}
        </Grid>
    </Box>
  )
}

export default Flight