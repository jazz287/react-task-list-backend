class Task{
    // id: string
    // title: string
    // description: string
    // isCompleted: boolean
    // dueDate: in milliseconds since epoch
    constructor(id, title, description, isCompleted, dueDate){
        this.id = id;
        this.title = title;
        this.description = description;
        this.isCompleted = isCompleted;
        this.dueDate = dueDate;
    }

    static matchObjectSchema(someObject){
        return someObject.hasOwnProperty("id") && someObject.hasOwnProperty("title") && 
            someObject.hasOwnProperty("description") && 
            someObject.hasOwnProperty("isCompleted") && 
            someObject.hasOwnProperty("dueDate");
    }
}

export default Task;