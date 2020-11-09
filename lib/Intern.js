const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school
    }

    getSchool() {
        return `<p class="card-text">School: ${this.school}</p>`
    }

    getRole() {
        return `<h3 class="card-subtitle mb-2"><img src="../assets/icons/book.svg" alt="" width="32" height="32" title="book"> Intern</h3>`;
    }
}

module.exports = Intern