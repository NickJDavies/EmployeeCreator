// TODO: Write code to define and export the Employee class
class employee {
    constructor(name, email, ID) {
        this.name = name;
        this.email = email;
        this.IDnum = ID;
    }
    getRole() {
        return this.role;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.IDnum;
    }
    getEmail() {
        return this.email;
    }
};

module.exports = employee;