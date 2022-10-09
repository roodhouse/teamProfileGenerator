const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    }

    getSchool() {
        console.log(this.school);
    }

    getRole() {
        console.log('Intern')
    }
}

const intern = new Intern('John', 1, 'john@rugh.com', 'Texas' );

console.log(intern);
console.log('//////////////');
console.log(intern.getSchool());
console.log('//////////////');
console.log(intern.getRole());