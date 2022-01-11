import { createClient, RedisClientType } from '@node-redis/client';

const client: RedisClientType = createClient();

export const redisConnect = async (): Promise<string> => {
    await client.connect();
    return client.ping();
}

const calculateDistance = async (): Promise<number> => {
    return 0
}
