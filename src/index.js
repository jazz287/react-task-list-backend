import express from "express";

const app = express();
const TASKS = [];

app.get("/",(req,res)=>{
    res.send(`<pre>Greetings from React-List-API

Available Routes:
GET /tasks - Get all tasks
POST /tasks - Create a new task
PUT /tasks/:id - Update a task
DELETE /tasks/:id - Delete a task
<br/>
Task Schema:
{
    id: string
    title: string
    description: string
    isCompleted: boolean
    dueDate: in milliseconds since epoch
}</pre>`);
});

app.listen(3000, ()=>{
    console.log("Backend Server is running on port 3000");
});