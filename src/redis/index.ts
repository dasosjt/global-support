import {createClient, RedisClientType} from '@node-redis/client';
import IPlace from 'models/place.model';

const client: RedisClientType = createClient({url: process.env.REDIS_URL || "redis://localhost:6379"});

export const redisConnect = async (): Promise<string> => {
    await client.connect();
    return client.ping();
}

export const redisGeoDistance = async (place1: IPlace, place2: IPlace, unit: string): Promise<number> => {
    client.geoAdd("geoDistance", {member: place1.name, latitude: place1.lat, longitude: place1.long});
    client.geoAdd("geoDistance", {member: place2.name, latitude: place2.lat, longitude: place2.long});
    return client.geoDist(place1.name, place2.name, unit);
}
