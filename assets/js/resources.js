// // // console.log('im inside resources.js');

// // // constructor function of creating new objects of resources
// // function Resource(lang, comment, link) {
// //     this.lang = lang;
// //     this.comment = comment;
// //     this.link = link;
// // }

// // // new object for resource
// // const res1 = new Resource("html", "best tool today:", "https://www.google.com");

// // // console.log(res1);

// const inquirer = require("inquirer");
// const fs = require("fs");
// // const group = [];
// const resources = [
//   {
//     type: "list",
//     message: "What language is the resource for? (ex. html",
//     name: "Languages",
//     choices: ["HTML", "CSS", "Javascript"],
//   },
//   {
//     type: "input",
//     message: "Describe the link you are using and how it is helpful",
//     name: "description",
//   },
//   {
//     type: "input",
//     message: "paste link here",
//     name: "link",
//   },
// ];

// inquirer.prompt(resources).then((answers) => {
//   let resource = new Resource(answers.language, answers.comment, answers.link);
// });
