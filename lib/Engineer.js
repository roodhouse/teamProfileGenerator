const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    }

    getGithub() {
        console.log(this.github);
    }

    getRole() {
        console.log('Engineer')
    }
}

const engineer = new Engineer('John', 1, 'john@rugh.com', 'roodhouse' );

console.log(engineer);
console.log('////////////////////////');
console.log(engineer.getGithub());
console.log('////////////////////////');
console.log(engineer.getRole());