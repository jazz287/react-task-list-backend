async function checkIfServerIsRunning(){
    try{
        let response = await fetch("http://localhost:3000");
        let text = await response.text();

        // server is running
        testTasksAPI();
    } catch(e){
        console.error("Server is not running, please start the server and try again.");
        console.error("You can start the server by running 'npm start' in the terminal.");
        console.error("Then run 'npm test' again in a different terminal.");
    }
}

async function sleep(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}

function printHeading(heading){
    console.log("\n\n\n");
    console.log("=".repeat(50));
    console.log(heading);
    console.log("=".repeat(50));
}

async function testTasksAPI(){
    const testTask = {
        id: "1",
        title: "Test Task",
        description: "This is a test task",
        isCompleted: false,
        dueDate: Date.now()
    };
    printHeading("Test Get all tasks");
    // Test Get all tasks
    let response = await fetch("http://localhost:3000/tasks");
    let tasks = await response.json();
    console.log("Get all tasks", tasks);
    printHeading("Test Create a new task");
    await sleep(1000);
    // Test Create a new task
    response = await fetch("http://localhost:3000/tasks",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(testTask)
    });
    let result = await response.json();
    console.log("Create a new task", result);
    printHeading("Test retrieve a task by id");
    await sleep(1000);
    // Test Retrieve a task by id
    response = await fetch(`http://localhost:3000/tasks/${testTask.id}`);
    let task = await response.json();
    console.log("Retrieve a task by id", task);
    printHeading("Test Update a task by id");
    await sleep(1000);
    // Test Update a task by id
    const updatedTask = {
        id: "1",
        title: "Updated Test Task",
        description: "This is an updated test task",
        isCompleted: true,
        dueDate: Date.now()
    };
    response = await fetch(`http://localhost:3000/tasks/${testTask.id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedTask)
    });
    result = await response.json();
    console.log("Update a task by id", result);
    printHeading("Testing Delete a task by id");
    await sleep(1000);
    // Test Delete a task by id
    response = await fetch(`http://localhost:3000/tasks/${testTask.id}`,{
        method: "DELETE"
    });
    result = await response.json();
    console.log("Delete a task by id result-> ", result);
    printHeading("Test Get all tasks after delete");
    await sleep(1000);
    // Test Get all tasks after delete
    response = await fetch("http://localhost:3000/tasks");
    tasks = await response.json();
    console.log("Get all tasks after delete", tasks);
}

checkIfServerIsRunning();