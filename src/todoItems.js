export default class Item {
    constructor(title, description, prio) {
        this.title = title;
        this.description = description;
        this.prio = prio;
    }
    

    setTitle = (title) => {
        this.title = title;
    }

    setDescription = (description) => {
        this.description = description;
    }

    setPrio = (prio) => {
        this.prio = prio;
    }    

    getTitle = () => {
        return this.title;
    }

    getDescription = () => {
        return this.description;
    }

    getPrio = () => { 
        return this.prio;
    }
};

