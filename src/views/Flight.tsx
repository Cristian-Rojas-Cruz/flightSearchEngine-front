import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from '../components';
import { Box, Grid, Collapse, FormControlLabel, List, Checkbox, ListItemText, Typography, ListItemButton, CardContent, Fab, CardActions, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
// import AddIcon from '@mui/icons-material';
import MoreIcon from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import { flightsFaker } from '../utils/faker/FlightFaker';

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

  return (
    <Box>
        <NavBar/>
        <Grid container sx={containerCards}>
        {flightsFaker.map((flight:any) =>  {
        return(
          <Grid container sx={cardWithOption}>
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
                <Button size="large">Comprar</Button>
                <IconButton
                  size="small"
                  aria-label="display more actions"
                  edge="end"
                  color="inherit"
                  onClick={()=>true}
                >
                  <p>...</p>
                  {/* <MoreIcon /> */}
                </IconButton>
              </CardActions>
            </Grid>
            <Grid item>
              <Collapse in={true} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <Link to={`/flight/card?type=edit&objectId=`}>
                      <ListItemText primary="Editar" />
                    </Link>
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                      <ListItemText primary="Eliminar" />
                  </ListItemButton>
                </List>
              </Collapse>
            </Grid>
          </Grid>
        )})}
          <Link to="/flight/card?type=create">
            <Fab color="primary" aria-label="add">
              {/* <AddIcon /> */}
              Create
            </Fab>
          </Link>
        </Grid>
    </Box>
  )
}

export default Flight