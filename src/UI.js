import Project from './project.js'
import Item from './todoItems.js'

export default class UI {
    static loadProjectPreview(projectName) {
        const projectPreview = document.querySelector('#project-preview');
        
        projectPreview.innerHTML = `
        <h1 id="project-name">${projectName}</h1>
        <div class="tasks-list" id="tasks-list"></div>`

        projectPreview.innerHTML += `
        <button class="button-add-task" id="button-add-task">
            <i class="fas fa-plus"></i>
                Add Task
        </button>
        <div class="add-task-popup" id="add-task-popup">
            <input
            class="input-add-task-popup"
            id="input-add-task-popup"
            type="text"
            />
            <div class="add-task-popup-buttons">
            <button class="button-add-task-popup" id="button-add-task-popup">
                Add
            </button>
            <button
                class="button-cancel-task-popup"
                id="button-cancel-task-popup"
            >
                Cancel
            </button>
            </div>
        </div>`
    }

    //eventListener

    static taskPopup() {
        const buttonAddTask = document.querySelector("#button-add-task");
        const addTaskPopup = document.querySelector("add-task-popup");
        const buttonAddTaskPopup = document.querySelector("button-add-task-popup");

        buttonAddTask.addEventListener('click', UI.hideTaskButtonPopup);
        
        
    }

    static hideTaskButtonPopup() {
        const buttonAddTask = document.querySelector('#button-add-task');
        const addTaskPopup = document.querySelector('#add-task-popup');
        const buttonAddTaskPopup = document.querySelector("button-add-task-popup");
        buttonAddTask.style.display = 'none';
        addTaskPopup.style.display = 'block';
        
    }

    static addTask() { 
        const inputAddTaskPopup = document.querySelector("#input-add-task-popup");
        const taskName = inputAddTaskPopup.value;

        if(taskName = '')
        {
            alert("?");
            return;
        } 

    }
};

