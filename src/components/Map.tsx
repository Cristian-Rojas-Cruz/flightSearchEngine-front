import React from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { Container } from '@mui/material';
const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

  const markers = [
    { markerOffset: -15, name: "Buenos Aires", coordinates: [-58.3816, -34.6037] },
    { markerOffset: -15, name: "La Paz", coordinates: [-68.1193, -16.4897] },
    { markerOffset: 25, name: "Brasilia", coordinates: [-47.8825, -15.7942] },
    { markerOffset: 25, name: "Santiago", coordinates: [-70.6693, -33.4489] },
    { markerOffset: 25, name: "Bogota", coordinates: [-74.0721, 4.711] },
    { markerOffset: 25, name: "Quito", coordinates: [-78.4678, -0.1807] },
    { markerOffset: -15, name: "Georgetown", coordinates: [-58.1551, 6.8013] },
    { markerOffset: -15, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
    { markerOffset: 25, name: "Paramaribo", coordinates: [-55.2038, 5.852] },
    { markerOffset: 25, name: "Montevideo", coordinates: [-56.1645, -34.9011] },
    { markerOffset: -15, name: "Caracas", coordinates: [-66.9036, 10.4806] },
    { markerOffset: -15, name: "Lima", coordinates: [-77.0428, -12.0464] }
  ];

export default function Map() {

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
          {markers.map(({ name, coordinates, markerOffset }) => (
          <Marker key={name} coordinates={coordinates}>
            {/* <circle r={4} fill="#FFAAA5" stroke="#FDFAF6" strokeWidth={1} /> */}
              <g
                fill="none"
                stroke="#FF5533"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="translate(-12, -24)"
              >
              <circle cx="12" cy="10" r="3" />
              <path d="M13 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
            <text
              textAnchor="small"
              y={markerOffset}
              style={{ fontFamily: "Arial", fill: "#5D5A6D" }}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </Container>
  )
}
