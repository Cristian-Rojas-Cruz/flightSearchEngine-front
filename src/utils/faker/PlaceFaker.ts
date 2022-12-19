import { Place } from '../models'
export const placesFaker: Place[] =
[
    {
        _id:"aaaa6786a8a6811",
        country: "piola",
        city: "ciudad de piola",
        iata: 'SDR',
        coordinates:{
            longitude:212.1,
            latitude: 12.6
        }
    },
    {
        _id:"aaaa6786a8a12368",
        country: "piola2",
        city: "ciudad de piola2",
        iata: 'BOG',
        coordinates:{
            longitude:123,
            latitude: 250
        }
    },
    {
        _id:"aaaa6786a8a63428",
        country: "piola3",
        city: "ciudad de piola3",
        iata: 'UYT',
        coordinates:{
            longitude:190,
            latitude: 56
        }
    },
    {
        _id:"aaaa6786a8a63428",
        country: "Spain",
        city: "Santander",
        iata: 'SDR',
        coordinates:{
            longitude: -3.8200,
            latitude: 43.42710
        }
    }
]
export const currentPlace: Place = {
    _id:"aaaa6786a8a6811",
    country: "piola",
    city: "ciudad de piola",
    iata: 'SDR',
    coordinates:{
        longitude:212.1,
        latitude: 12.6
    }
}