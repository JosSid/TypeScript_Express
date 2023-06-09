import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import db from "./config/mongo"
import logger from "morgan"
const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.use(logger('dev'))

app.use(router)
db().then(() => console.log("Conexion to DB OK..."))
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))


