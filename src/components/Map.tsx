import React from "react";
import { Link, useParams } from 'react-router-dom';
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { Container } from '@mui/material';
import { placesFaker } from '../utils/faker/PlaceFaker';
import { Place } from "../utils/models";
const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

  const markers = [
    { name: "Buenos Aires", coordinates: [-62.3816, -34.6037] },
    { name: "La Paz", coordinates: [-64.1193, -16.4897] },
    { name: "Brasilia", coordinates: [-47.8825, -11.7942] },
    { name: "Santiago", coordinates: [-70.6693, -33.4489] },
    { name: "Bogota", coordinates: [-74.0721, 4.711] },
    { name: "Quito", coordinates: [-78.4678, -0.1807] },
    { name: "Georgetown", coordinates: [-58.1551, 6.8013] },
    { name: "Asuncion", coordinates: [-57.5759, -25.2637] },
    { name: "Paramaribo", coordinates: [-55.2038, 5.852] },
    { name: "Montevideo", coordinates: [-56.1645, -34.9011] },
    { name: "Caracas", coordinates: [-66.9036, 10.4806] },
    { name: "Lima", coordinates: [-74.0428, -12.0464] },
    { name: "Oslo", coordinates: [9.6628, 62.0464] },
    { name: "Amsterdam", coordinates: [6.0028, 53.0464] },
    { name: "Varsovia", coordinates: [11.1645, 50.9011] },
    { name: "Lisboa", coordinates: [-7.9036, 40.4806] },
    { name: "Madrid", coordinates: [-4.0428, 40.0464] },
    { name: "Moscu", coordinates: [100.6628, 62.0464] },
    { name: "USA", coordinates: [-107.0028, 41.0464] },
    { name: "Ottawa", coordinates: [-110.0028, 60.0464] },
    { name: "Canberra", coordinates: [133.1645, -24.9011] },
    { name: "Mexico", coordinates: [-100.9036, 20.4806] },
    { name: "Pekin", coordinates: [100.0428, 36.0464] },
    { name: "Delhi", coordinates: [78.6628, 20.0464] },
    { name: "Argel", coordinates: [2.0028, 28.0464] },
    { name: "UlanBator", coordinates: [104.0028, 46.0464] },
    { name: "Astana", coordinates: [70.0028, 49.0464] },
    { name: "Ankara", coordinates: [36.0028, 39.0464] },
    { name: "Abuya", coordinates: [8.0028, 10.0464] },
    { name: "Brazzaville", coordinates: [24.0028, -3.0464] },
    { name: "Bangui", coordinates: [21.0028, 7.0464] },
  ];

export default function Map() {

  const params = useParams()

  const containerStyle = {
    width: '68%',
    animation: 'pulse'
  }

  return (
    //TODO: cambiar el color con Fill
    <Container>
      <ComposableMap className="mapStyles">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} fill="#064420" stroke="#FDFAF6"/>
              ))
          }
        </Geographies>
          {placesFaker.map((place: Place, index: number) => (
            <Marker key={index} coordinates={[place.coordinates.longitude, place.coordinates.latitude]}>
              <Link to={`/flights/${params.price}/${params.date}/${place.iata}`}>
                <circle r={4} fill="red" stroke="#FDFAF6" strokeWidth={1} className="selectCountry"/>
              </Link>
            </Marker>
        ))}
      </ComposableMap>
    </Container>
  )
}
