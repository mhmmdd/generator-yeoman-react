const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: "confirm",
        name: "cool",
        message: "Would you like to enable the Cool Router feature?"
      }
    ]);
  }

  writing() {
    this.log("cool router feature", this.answers.cool); // user answer `cool` used
  }
};