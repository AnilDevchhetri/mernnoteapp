import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
    try {
        const { success } = await ratelimit.limit("my-limit-key")
        if (!success) {
            return res.status(429).json({ message: "to many rquests try again latter" })
        }
        next();
    } catch (error) {
        console.log("Rate Limit error", error);
        next(error)
    }
}
export default rateLimiter;