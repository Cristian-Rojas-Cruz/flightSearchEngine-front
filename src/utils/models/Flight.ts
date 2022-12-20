export interface Flight {
    _id: string,
    FlightDate: number,
    StartingAirport: string,
    DestinationAirport: string,
    baseFare: number,
    seatsRemaining: number,
    characteristics: FlightCharacteristics
}

interface FlightCharacteristics{
    IsEconomy: boolean,
    IsRefundable: boolean,
    IsNonStop: boolean,
}

export interface Place {
    _id: string,
    country: string,
    City: string,
    iata: string,
    Coordinates: Coordinate
}
export interface Coordinate{
    longitude: number,
    latitude: number
}