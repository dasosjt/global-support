import express from 'express';
import dbClient from './db';
import routes from './routes/index';

const app = express();
const port = 8080;

app.listen(port, () => {
    (async () => {
        try {
            await dbClient.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    })();

    console.log(`application is running on port ${port}.`);
});

routes(app);