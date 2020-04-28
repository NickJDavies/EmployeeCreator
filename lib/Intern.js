// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const employee = require("./Employee");
class intern extends employee {
    constructor(name, id, email, school) {
        super(name, email, id);
        this.school = school;
        this.role = "Intern";
    }
    getSchool() {
        return this.school;
    }
}

module.exports = intern;