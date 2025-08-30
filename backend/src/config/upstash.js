import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"

import dotevn from "dotenv"

dotevn.config();
//create a ratelimite that allow 100 request per 60 seconds
const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(100, "60 s")
})

export default ratelimit