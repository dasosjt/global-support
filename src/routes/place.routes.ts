import express from 'express';
import service from '../services/place.service';

const placeRoutes = express.Router();

placeRoutes.get('/distance', (req, res) => {
    res.send('calculated distance');
})

placeRoutes.post('/', (req, res) => {
    service.createPlace(req.body)
        .then(() => res.send('OK'))
        .catch(() => res.send('BAD'));
})

export default placeRoutes;