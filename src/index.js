import UI from './UI.js'
import Project from './todoList.js'
import Item from './todoItems.js'
import List from './defaultProject.js'

console.log("debug1");

UI.loadProjectPreview();
UI.taskPopup();

const Item1 = new Item("fucker", "dirty", 3);
console.log(Item1);
Project.addTask(Item1);
console.log(new Project("test", "test2"));



