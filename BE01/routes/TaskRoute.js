import express from "express"
import TaskService from "./services/TaskService.js";

const taskRouter = express.Router()
const taskService = new TaskService()

taskRouter.get("/tasks", (req, res) => {
    res.status(200).json(taskService.getTasks())
})

taskRouter.get("/tasks/:id", (req, res) => {
    try {
        res.status(200).send(taskService.getTask(req.params.id))
    } catch (error) {
        res.status(404).json({
            error: error
        })
    }
})

taskRouter.post("/tasks", (req, res) => {
    try {
        res.status(201).json({
            created: true,
            task: taskService.createTask(req.body.title)
        })
    } catch (error) {
        if (taskTitle == null) {
            res.status(400).json({
                error: error
            })
        }
    }
})

taskRouter.put("/tasks/:id", (req, res) => {
    try {
        res.status(201).send(taskService.updateTask(req.params.id, req.body))
    } catch (error) {
        res.status(400).json({
            error: error
        })
    }
})

taskRouter.delete("/tasks/:id", (req, res) => {
    try {
        taskService.deleteTask(req.params.id)
        res.sendStatus(204)
    } catch (error) {
        res.status(404).json({
            error: error
        })
    }
})

export default taskRouter