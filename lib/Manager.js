const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, office) {
    super(name, id, email);
    this.office = office;
    }

    getRole() {
        console.log('Manager')
    }
}

const manager = new Manager('John', 1, 'john@rugh.com', 45 );

console.log(manager);
console.log('//////////////');
console.log(manager.getRole());