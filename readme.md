# Tasks API

## Running the application locally
1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm start` to start the application
4. The application will be running on `http://localhost:3000`
5. You can use the API endpoints mentioned below to interact with the application

## Task Schema
```json
{
    "id": "string",
    "title": "string",
    "description": "string",
    "isCompleted": "boolean",
    "dueDate": "int" // Unix timestamp
}
```

## Get all tasks
### Request
```http
GET /tasks
```

### Response
```json
[
    {
        "id": "1",
        "title": "Task 1",
        "description": "Task 1 description",
        "isCompleted": false,
        "dueDate": 1631538000
    },
    {
        "id": "2",
        "title": "Task 2",
        "description": "Task 2 description",
        "isCompleted": true,
        "dueDate": 1631538000
    }
]
```

## Create a task
### Request
```http
POST /tasks
Content-Type: application/json

{
    'id': '3',
    "title": "Task 3",
    "description": "Task 3 description",
    "isCompleted": false,
    "dueDate": 1631538000
}
```

### Response
```json
{
    status: "success",
    task : {
        "id": "3",
        "title": "Task 3",
        "description": "Task 3 description",
        "isCompleted": false,
        "dueDate": 1631538000
    }
}
```

## Retrieve a task by id
### Request
```http
GET /tasks/1
```

### Response
```json
{
    "id": "1",
    "title": "Task 1",
    "description": "Task 1 description",
    "isCompleted": false,
    "dueDate": 1631538000
}
```

## Update a task
### Request
```http
PUT /tasks/1
Content-Type: application/json

{
    "title": "Task 1 updated",
    "description": "Task 1 description updated",
    "isCompleted": true,
    "dueDate": 1631538000
}
```

### Response
```json
{
    status: "success",
    task : {
        "id": "1",
        "title": "Task 1 updated",
        "description": "Task 1 description updated",
        "isCompleted": true,
        "dueDate": 1631538000
    }
}
```

## Delete a task
### Request
```http
DELETE /tasks/1
```

### Response
```json
{
    status: "success"
}
```