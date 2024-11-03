import { RedisOptions, Queue, Worker } from 'bullmq';
import IORedis from 'ioredis';

const redisOptions: RedisOptions = {
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT || '6379', 10),
};

export const redisConnection = new IORedis(redisOptions);

export const myQueue = new Queue('myQueue', { connection: redisConnection });
