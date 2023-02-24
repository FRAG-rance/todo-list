const Item = (title, description, prio) => {
    this.title = title;
    this.description = description;
    this.prio = prio;

    const setTitle = (title) => {
        this.title = title;
    }

    const setDescription = (description) => {
        this.description = description;
    }

    const setPrio = (prio) => {
        this.prio = prio;
    }    

    const getTitle = () => {
        return this.title;
    }

    const getDescription = () => {
        return this.description;
    }

    const getPrio = () => { 
        return this.prio;
    }
};

export { Item };