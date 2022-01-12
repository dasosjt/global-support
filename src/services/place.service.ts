import IPlace from '../models/place.model';
import Places from '../db/models/place.model';
import {redisGeoDistance} from '../redis';

const createPlace = async (place: IPlace): Promise<void> => {
    const newPlace = Places.build({
        name: place.name,
        coordinates: {
            type: 'Point',
            coordinates: [place.long, place.lat],
        }
    });
    await newPlace.save();
}

const getPlaceByName = async (placeName: string): Promise<IPlace> => {
    return Places.findOne({
        raw: true,
        where: {name: placeName}
    }).then((place: any) => {
            return {
                name: place.name,
                lat: place.coordinates.coordinates[1], // TODO check if its correct to set in this order
                long: place.coordinates.coordinates[0]
            };
        });
}

const calculateDistance = async (placeName1: string, placeName2: string, unit: string): Promise<number> => {
    return Promise.all([getPlaceByName(placeName1), getPlaceByName(placeName2)])
        .then(async (placesResponse: IPlace[]) => {
        return await redisGeoDistance(placesResponse[0], placesResponse[1], unit);
    });
}

export default {createPlace, calculateDistance};