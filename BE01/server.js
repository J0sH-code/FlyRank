import express, { json } from "express"
import swaggerJsdoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"
import { readFile } from 'node:fs/promises';
import TaskService from "./services/TaskService.js";
import taskRouter from "./routes/TaskRoute.js";
import metaRouter from "./routes/MetaRoute.js";

const app = express()
const port = 3000
const swaggerDocument = await readFile('./openapi.json', {encoding: 'utf8'})

app.use(express.json())
app.use("/docs", swaggerUi.serve, swaggerUi.setup(JSON.parse(swaggerDocument)))

app.use("/", taskRoutes)
app.use("/", metaRoutes)


app.listen(port,() => {
    console.log(`Listening to ${port}`)
})