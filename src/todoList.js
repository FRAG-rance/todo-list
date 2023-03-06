import Item from './todoItems.js';

export default class Project {
    constructor(name, projectName){
        this.name = name;
        this.projectName = [];
    }
    
    setName = (newName) => {
        this.name = newName;
    }

    setprojectName = (tasks) => {
        this.tasks = tasks;
    }

    getName = () => {
        return this.name;
    } 

    getprojectName = () => { 
        return this.tasks;
    }

    addTask = (newTask) => {
        if(this.projectName.find((task) => task.getTitle() == newTask.name)) return;
        this.projectName.push(newTask);
    } 
}

