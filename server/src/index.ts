import { config } from "dotenv";
config()

import neo4jConfig from "./config/neo4j.config";
(async() => {
    await neo4jConfig();
})();

import cookieParser from "cookie-parser"
import cors from "cors"

import express, { Application, Request, Response } from "express"
import router from "./routers";
const app: Application = express()

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors({
    credentials: true,
    methods: ["GET", "PUT", "PATCH", "POST", "DELETE"],
    origin: process.env.CLIENT_URL
}))

// health checkup route
app.get('/health', (req: Request, res: Response) => {
    res.send({
        message: "server is running fine"
    })
})

// all the routes will be in router;
app.use('/api', router)

const PORT: number = Number(process.env.PORT) || 3001;
app.listen(PORT, () => {
    console.log(`server started at the port ${PORT}`);
})