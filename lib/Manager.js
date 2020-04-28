// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const employee = require("./Employee");

class manager extends employee {
    constructor(name, id, email, officeNum) {
        super(name, email, id);
        this.officeNum = officeNum;
        this.role = "Manager";
    }
    getOfficeNumber() {
        return this.officeNum;
    }
}

module.exports = manager;
