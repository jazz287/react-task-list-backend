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
}

export default Task;