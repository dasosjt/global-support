import express from 'express';
import dbClient from './db';
import {redisConnect} from './redis';
import routes from './routes/index';

const app = express();
const port = 8080;

app.listen(port, () => {
    (async () => {
        try {
            await dbClient.authenticate();
            console.log('Database Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }

        try {
            const result = await redisConnect();
            console.log(`Redis Connection has been established successfully. PING-${result}`);
        } catch (error) {
            console.error('Unable to connect to redis:', error);
        }
    })();

    console.log(`application is running on port ${port}.`);
});

routes(app);