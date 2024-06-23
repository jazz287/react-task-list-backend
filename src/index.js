import express from "express";
import tasksRouter from "./middleware/tasks.js";
import bodyParser from "body-parser";

const app = express();

// parse json
app.use(bodyParser.json());


app.get("/",(req,res)=>{
    res.send(`<pre>Greetings from React-List-API

Available Routes:
GET /tasks - Get all tasks
POST /tasks - Create a new task
GET /tasks/:id - Retrieve a task by id
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

app.use('/tasks', tasksRouter);

app.get("*", (req,res)=>{
    res.status(404).send("404 Not Found<br><a href='/'>Go to Home</a>");
});

app.listen(3000, ()=>{
    console.log("Backend Server is running at http://localhost:3000");
});