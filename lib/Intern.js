// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const employee = require("./Employee");
class intern extends employee {
    constructor(name, email, id, school) {
        super(name, email, id);
        this.school = school;
    }
}
module.exports = intern;