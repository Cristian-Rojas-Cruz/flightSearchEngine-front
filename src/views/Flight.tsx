import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { NavBar } from '../components';
import { Box, Grid, Collapse, FormControlLabel, List, Checkbox, ListItemText, Typography, ListItemButton, CardContent, Fab, CardActions, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import menu from '../../public/icons/menu.png';
import plus from '../../public/icons/plus-solid.svg';
import { Flight as FlightType } from "../utils/models";
import axios from 'axios';

const Flight = () => {
  const params = useParams();
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
  const [flights, setFlights] = React.useState<FlightType[]>([
    {
      _id: "",
      FlightDate: 0,
      StartingAirport: "",
      DestinationAirport: "",
      baseFare: 0,
      seatsRemaining: 0,
      characteristics: {
        IsEconomy: false,
        IsRefundable: false,
        IsNonStop: false,
      }
    }
  ]);


  const generateDropDownStates = (flights: FlightType[])=>{
    let intStream = [...Array(flights.length).keys()]
    setDropDownStates([...intStream.map((e: number) => { return {_id: flights[e]._id, state: false }})]);
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

  interface INumberInterval{
    min:number,
    max: number
  }
  interface IFlightsPayload{
    StartingAirportIata: string,
    DestinationAirportIata: string,
    filter: filter
  }
  
  interface filter {
    dates:INumberInterval,
    prices: INumberInterval,
    iata: string
  }
  interface Action{
    action: string,
    payload: IFlightsPayload
  }

  const getParamsMin = (interval: string) =>{
    let substring = interval.valueOf();
    return substring.substring(0,interval.indexOf("-"));
  }
  const getParamsMax = (interval: string) =>{
    let substring = interval.valueOf();
    return substring.substring(interval.indexOf("-") + 1, interval.length);
  }
  const createAction = (): Action=> {
    return {
      action: "getFlightsByFullRouteFiltered",
      payload: {
        StartingAirportIata: getParamsMin((params.place)? params.place:"0-0"),
        DestinationAirportIata: getParamsMax((params.place)?params.place:"0-0"),
        filter: {
          dates: {
            min: +getParamsMin((params.date)?params.date:"0-0"),
            max: +getParamsMax((params.date)?params.date:"0-0"),
          },
          prices: {
            min: +getParamsMin((params.price)?params.price:"0-0"),
            max: +getParamsMax((params.price)?params.price:"0-0"),
          },
          iata: ""
        }
      }
    }
  }
  const getData = async (action: Action) => {
    let res = await axios.post('https://localhost:44341/api/Flight/filter/route', {...action});
    setFlights(res.data);
    generateDropDownStates(res.data);
  }

  useEffect(() =>{
    getData(createAction());
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
        {flights.map((flight:FlightType, index:number) =>  {
        return(
          <Grid className="card" key={index} container sx={cardWithOption}>
            <Grid item sx={card}>
              <CardContent sx={CardContentStyle}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Fecha: {new Date(flight.FlightDate*1000).toLocaleString()}</Typography>
                <Typography variant="h5" component="div">{flight.StartingAirport} - {flight.DestinationAirport}</Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">{flight._id}</Typography>
                <Box sx={CardAction}>
                  <Typography variant="body2">Asientos libres: {flight.seatsRemaining}</Typography>
                  <Typography variant="h6">{flight.baseFare} €</Typography>
                </Box>
                <Box sx={CardAction}>
                  <FormControlLabel disabled control={(!flight.characteristics.IsEconomy) ? <Checkbox /> : <Checkbox defaultChecked sx={{color: 'red'}}/>} label="Económico" />
                  <FormControlLabel disabled control={(!flight.characteristics.IsRefundable) ? <Checkbox /> : <Checkbox defaultChecked />} label="Reembolsos" />
                  <FormControlLabel disabled control={(!flight.characteristics.IsNonStop) ? <Checkbox /> : <Checkbox defaultChecked />} label="Directo" />
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