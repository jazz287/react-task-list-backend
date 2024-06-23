import express from "express";
import Task from "../modals/task.js";

const tasksRouter = express.Router();
const TASKS = [];

// Get all tasks
tasksRouter.get("/",(req,res)=>{
    res.json(TASKS);
});

// Create a new task
tasksRouter.post("/",(req,res)=>{
    const task = req.body;
    if (Task.matchObjectSchema(task)){
        TASKS.push(task);
        res.json({success: true, task});
    }else{
        res.status(400).json({error: "Invalid Task Object"});
    }
});

// Retrieve a task by id
tasksRouter.get("/:id",(req,res)=>{
    const id = req.params.id;
    const task = TASKS.find(task=>task.id === id);
    if (task){
        res.json(task);
    }else{
        res.status(404).json({error: "Task Not Found"});
    }
});

// Update a task by id
tasksRouter.put("/:id",(req,res)=>{
    const id = req.params.id;
    const taskIndex = TASKS.findIndex(task=>task.id === id);
    if (taskIndex !== -1){
        const task = req.body;
        if (Task.matchObjectSchema(task)){
            TASKS[taskIndex] = task;
            res.json({success: true, task});
        }else{
            res.status(400).json({error: "Invalid Task Object"});
        }
    }else{
        res.status(404).json({error: "Task Not Found"});
    }
});


// Delete a task by id
tasksRouter.delete("/:id",(req,res)=>{
    const id = req.params.id;
    const taskIndex = TASKS.findIndex(task=>task.id === id);
    if (taskIndex !== -1){
        TASKS.splice(taskIndex,1);
        res.json({success: true});
    }else{
        res.status(404).json({error: "Task Not Found"});
    }
});

export default tasksRouter;