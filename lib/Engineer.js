// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const employee = require("./Employee");
class engineer extends employee {
    constructor(name, id, email, github) {
        super(name, email, id);
        this.github = github;
        this.role = "Engineer";
    }
    getGithub() {
        return this.github;
    }
}

module.exports = engineer;