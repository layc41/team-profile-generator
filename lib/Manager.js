const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber
    }
    getOfficeNumber() {
        return `<p class="card-text">Office Number: ${this.officeNumber}</p>`;
    }
    getRole() {
        return `<h3 class="card-subtitle mb-2"><img src="../assets/icons/eyeglasses.svg" alt="" width="32" height="32" title="eyeglasses"> Manager</h3>`;
    }
}

module.exports = Manager