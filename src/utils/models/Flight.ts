export interface Flight {
    _id: string,
    fecha: Date,
    startingAirport: string,
    destinationAirport: string,
    price: number,
    seatsRemaining: number,
    characteristics: FlightCharacteristics
}

interface FlightCharacteristics{
    isEconomy: boolean,
    isRefundable: boolean,
    isNonStop: boolean,
}

export interface Place {
    _id: string,
    country: string,
    city: string,
    iata: string,
    coordinates: Coordinate
}
export interface Coordinate{
    longitude: number,
    latitude: number
}