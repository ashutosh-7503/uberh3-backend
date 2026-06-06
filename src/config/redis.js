import Redis from "ioredis";
import 'dotenv/config';

const redis = new Redis(process.env.REDIS_URL)
redis.on('connect',()=> console.log('Redis Connected'));
redis.on('error',(err)=>console.error('Error: ',err));

export default redis; 