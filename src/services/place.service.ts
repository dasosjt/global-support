import IPlace from '../models/place.model';
import Places from '../db/models/place.model';

const createPlace = async (place: IPlace) => {
    const newPlace = Places.build({
        name: place.name,
        coordinates: {
            type: 'Point',
            coordinates: [place.long, place.lat],
        }
    });
    await newPlace.save();
}

/*const calculateDistance = async (placeName1: string, placeName2: string) => {

}*/

export default {createPlace};