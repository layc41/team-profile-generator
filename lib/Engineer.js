const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github

    }
    getGithub() {
        return `<p><img src="../assets/icons/binoculars.svg" alt="" width="32" height="32" title="binoculars"> <a href="https://github.com/${this.github}" target= _blank class="card-link">${this.github}</a></p>`
    }
    getRole() {
        return `<h3 class="card-subtitle mb-2"><img src="../assets/icons/tools.svg" alt="" width="32" height="32" title="tools"> Engineer</h3>`;
    }
}

module.exports = Engineer