class User {
    constructor(name) {
        this.name = name;
    }

    attemptsTo(task) {
        return task.performAs(this);
    }
}

module.exports = User;
