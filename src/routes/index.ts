import express from 'express';
import placeRoutes from './place.routes';

export default (app) => {
    app.use(express.json());

    app.get('/status', (req, res): void => {
        res.send('OK');
    })

    app.use('/place', placeRoutes);
};