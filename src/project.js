import Item from './todoItems.js';

export default class Project {
    constructor(name, tasks){
        this.name = name;
        this.tasks = [];
    }
    
    setName = (newName) => {
        this.name = newName;
    }

    setTasks = (tasks) => {
        this.tasks = tasks;
    }

    getName = () => {
        return this.name;
    } 

    getTasks = () => { 
        return this.tasks;
    }

    addTask = (newTask) => {
        if(this.tasks.find((task) => task.getTitle() == newTask.name)) return;
        this.tasks.push(newTask);
    } 
}

