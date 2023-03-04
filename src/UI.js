import Project from './project.js'
import Item from './todoItems.js'

export default class UI {
    test = () => {
        console.log("ufcki");
    }
    static loadProjectPreview() {
        const projectPreview = document.querySelector('#project-preview');
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

    
};

