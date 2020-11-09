class Employee {
    constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    }
    getName() {
        return `<h2 class="card-title">${this.name}</h2>`;
    };
    getId() {
        return `<p class="card-text">ID: ${this.id}</p>`;
    };
    getEmail() {
        return `<p><img src="../assets/icons/mailbox.svg" alt="" width="32" height="32" title="envelope-open"> <a href="mailto:${this.email}" target= _blank class="card-link">${this.email}</a></p>`;
    };
    getRole() {
        return 'Employee';
    };
}

module.exports = Employee;
