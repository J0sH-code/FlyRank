import TaskRepo from "../repositories/TasksRepo.js";

export default class TaskService {
    #taskRepo = new TaskRepo()
    
    getTasks(){
        return this.#taskRepo.getAllTasks()
    }

    getTask(id){
        const requestedTask = this.#taskRepo.findById(id)
        if (requestedTask == null) {
            throw new Error(`Task ${id} not found`);
        }
        return requestedTask

    }

    createTask(title){
        if (taskTitle == null) {
        throw new Error("Title Missing");
        
        }
        let repoSize = this.getTasks().length
        let newId = this.getTasks()[repoSize-1].id + 1

        let newTask = {
            id: newId,
            title: title,
            done: false
        }
        this.#taskRepo.add(newTask)

        return this.getTask(newTask.id)
    }

    updateTask(id, payload){
        if (payload == null || (payload.title == null && payload.done== null)) {
            throw new Error("Invalid/missing request body");
        }

        let requestedTask = this.getTask(id)
        if (requestedTask == null) {
            throw new Error(`Task ${id} not found`);
            
        }

        this.#taskRepo.updateTitle(id, payload.title)
        this.#taskRepo.updateStatus(id, payload.status)
    }

    deleteTask(id){
        let requestedTask = this.getTask(id)
        if (requestedTask == null) {
            throw new Error(`Task ${id} not found`);
        }

        this.#taskRepo.deleteTask(requestedTask)
    }
}