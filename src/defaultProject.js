import Item from './todoItems.js'; 
import Project from './todoList.js';

export default class List  {
    constructor(List) {
        this.List = [];
        this.List.push(Project("ALL"));
        this.List.push(Project("TODAY"));
        this.List.push(Project("PLANNED"));
    }
    

    getList = () => {
        return this.List;
    } 

    setList = (List) => { 
        this.List = List;
    }

    addList = (newProject) =>
    {
        if(this.List.find((project) => project.name == newProject.name)) return;
        this.List.push(newProject);
    }

}

