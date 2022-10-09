const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    }
}

const engineer = new Engineer('John', 1, 'john@rugh.com', 'roodhouse' );

console.log(engineer);