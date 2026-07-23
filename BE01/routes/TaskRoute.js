import express from "express"
import TaskService from "../services/TaskService.js";

const taskRouter = express.Router()
const taskService = new TaskService()

taskRouter.get("/tasks", (req, res) => {
    res.status(200).json(taskService.getTasks())
})

taskRouter.get("/tasks/:id", (req, res, next) => {
    try {
        res.status(200).send(taskService.getTask(req.params.id))
    } catch (error) {
        next(error)
    }
})

taskRouter.post("/tasks", (req, res, next) => {
    try {
        res.status(201).json({
            created: true,
            task: taskService.createTask(req.body.title)
        })
    } catch (error) {
         next(error)
    }
})

taskRouter.put("/tasks/:id", (req, res, next) => {
    try {
        res.status(201).send(taskService.updateTask(req.params.id, req.body))
    } catch (error) {
        next(error)
    }
})

taskRouter.delete("/tasks/:id", (req, res, next) => {
    try {
        taskService.deleteTask(req.params.id)
        res.sendStatus(204)
    } catch (error) {
         next(error)
    }
})

export default taskRouter