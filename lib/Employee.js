class Employee {
    constructor(name, id, email) {
        this.name  = name;
        this.id    = id;
        this.email = email;
    }

    getName() {
        console.log(this.name);
    }

    getId() {
        console.log(this.id);
    }

    getEmail() {
        console.log(this.email);
    }

    getRole() {
        console.log('Employee')
    }
}

const employee = new Employee('John', 2, 'john@john.com');

employee.getName();
employee.getId();
employee.getEmail();
employee.getRole();