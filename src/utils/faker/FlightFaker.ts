import { Flight } from '../models'
export const flightsFaker: Flight[] =
[
    {
        _id: 'A2357FE4',
        fecha: new Date(),
        startingAirport: "ATL",
        destinationAirport: "DEL",
        price: 7,
        seatsRemaining: 4,
        characteristics: {
            isEconomy: true,
            isRefundable: true,
            isNonStop: true
        }
    },
    {
        _id: '41567213fff128',
        fecha: new Date(),
        startingAirport: "ATL",
        destinationAirport: "DEL",
        price: 15,
        seatsRemaining: 4,
        characteristics: {
            isEconomy: true,
            isRefundable: false,
            isNonStop: true
        }
    },
    {
        _id: '41567213fff127',
        fecha: new Date(),
        startingAirport: "ATL",
        destinationAirport: "DEL",
        price: 70,
        seatsRemaining: 4,
        characteristics: {
            isEconomy: true,
            isRefundable: true,
            isNonStop: false
        }
    },
    {
        _id: '41567213fff127',
        fecha: new Date(),
        startingAirport: "ATL",
        destinationAirport: "DEL",
        price: 70,
        seatsRemaining: 4,
        characteristics: {
            isEconomy: true,
            isRefundable: true,
            isNonStop: false
        }
    },
    {
        _id: '2624464fff127',
        fecha: new Date(),
        startingAirport: "ATL",
        destinationAirport: "DEL",
        price: 70,
        seatsRemaining: 4,
        characteristics: {
            isEconomy: true,
            isRefundable: true,
            isNonStop: false
        }
    },
    {
        _id: '41567213fff127',
        fecha: new Date(),
        startingAirport: "ATL",
        destinationAirport: "DEL",
        price: 70,
        seatsRemaining: 4,
        characteristics: {
            isEconomy: true,
            isRefundable: true,
            isNonStop: false
        }
    },
    {
        _id: '78989666',
        fecha: new Date(),
        startingAirport: "ATL",
        destinationAirport: "DEL",
        price: 70,
        seatsRemaining: 4,
        characteristics: {
            isEconomy: true,
            isRefundable: true,
            isNonStop: false
        }
    },
    {
        _id: '47646427',
        fecha: new Date(),
        startingAirport: "ATL",
        destinationAirport: "DEL",
        price: 70,
        seatsRemaining: 4,
        characteristics: {
            isEconomy: true,
            isRefundable: true,
            isNonStop: false
        }
    },
    {
        _id: '254524524127',
        fecha: new Date(),
        startingAirport: "ATL",
        destinationAirport: "DEL",
        price: 70,
        seatsRemaining: 4,
        characteristics: {
            isEconomy: true,
            isRefundable: true,
            isNonStop: false
        }
    }
]
export const currentFlight = {
    _id: 'A2357FE4',
    fecha: new Date(),
    startingAirport: "ATL",
    destinationAirport: "DEL",
    price: 217.2,
    seatsRemaining: 4,
    characteristics: {
        isEconomy: true,
        isRefundable: false,
        isNonStop: false
    }
}