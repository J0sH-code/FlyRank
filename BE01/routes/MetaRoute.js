import express from "express"

const metaRouter = express.Router()

metaRouter.get("/", (req, res) => {
    res.status(200).json({
        name: "Task API",
        version: "1.0",
        endpoints: ["/tasks"]
    })
})

metaRouter.get("/health", (req, res) => {
    res.status(200).json({
        status: "ok"
    })
})

export default metaRouter 