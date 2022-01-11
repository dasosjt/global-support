import express, { Request, Response } from 'express';
import IDistanceQuery from 'models/distanceQuery.model';
import service from '../services/place.service';

const placeRoutes = express.Router();

placeRoutes.get('/distance', (req: Request, res: Response): void => {
    const query: IDistanceQuery = req.query as unknown as IDistanceQuery;
    service.calculateDistance(query.placeName1, query.placeName2, query.unit)
        .then(distance => res.json({distance, unit: query.unit}))
        .catch(_ => res.json({distance: -1, unit: query.unit}));
})

placeRoutes.post('/', (req: Request, res: Response): void => {
    service.createPlace(req.body)
        .then(() => res.send('OK'))
        .catch(() => res.send('BAD'));
})

export default placeRoutes;