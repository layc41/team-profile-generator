const managerQuestions = [
  {
      type: 'input',
      name: 'name',
      message: "What's the manager's name?",
      validate: nameInput => {
          if (nameInput) {
              return true;
          } else {
              console.log("Please enter manager's name!");
              return false;
          }
      }
  },
  {
      type: 'input',
      name: 'id',
      message: "What's the manager's employee id?",
      validate: idInput => {
          if (idInput) {
              return true;
          } else {
              console.log("Please enter your manager's id!");
              return false;
          }
      }
  },
  {
      type: 'input',
      name: 'email',
      message: "What is the manager's e-mail address?",
      validate: emailInput => {
          const val = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          if (emailInput.match(val)) {
              return true;
          } else {
              console.log('Please enter a valid email address!');
              return false;
          }
      }
  },
  {
      type: 'input',
      name: 'officeNumber',
      message: "Enter the manager's office number.",
      validate: numberInput => {
          if (numberInput) {
              return true;
          } else {
              console.log("Please enter your manager's office number!");
              return false;
          }
      }
  },
  {
      type: 'list',
      name: 'anotherTeammate',
      message: 'Please choose to add a teammate or finish.',
      choices: ['Engineer', 'Intern', 'Make Team Page!']
  }
];

const engineerQuestions = [
  {
      type: 'input',
      name: 'name',
      message: "What is the engineer's name?",
      validate: nameInput => {
          if (nameInput) {
              return true;
          } else {
              console.log("Please enter your engineer's name!");
              return false;
          }
      }
  },
  {
      type: 'input',
      name: 'id',
      message: "What is the engineer's id?",
      validate: idInput => {
          if (idInput) {
              return true;
          } else {
              console.log("Please enter your engineer's id!");
              return false;
          }
      }
  },
  {
      type: 'input',
      name: 'email',
      message: "What is the engineer's email?",
      validate: emailInput => {
          const val = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          if (emailInput.match(val)) {
              return true;
          } else {
              console.log('Please enter a valid email address!');
              return false;
          }
      }
  },
  {
      type: 'input',
      name: 'github',
      message: "What's the engineer's github?",
      validate: githubInput => {
          if (githubInput) {
              return true;
          } else {
              console.log("Please enter your engineer's GitHub username!");
              return false;
          }
      }
  },
  {
    type: 'list',
    name: 'anotherTeammate',
    message: 'Please choose to add a teammate or finish.',
    choices: ['Engineer', 'Intern', 'Make Team Page!']
  }
];

const internQuestions = [
  {
      type: 'input',
      name: 'name',
      message: "What's the name of the intern?",
      validate: nameInput => {
          if (nameInput) {
              return true;
          } else {
              console.log("Please enter your intern's name!");
              return false;
          }
      }
  },
  {
      type: 'input',
      name: 'id',
      message: "What's the intern's id?",
      validate: idInput => {
          if (idInput) {
              return true;
          } else {
              console.log("Please enter your intern's id!");
              return false;
          }
      }
  },
  {
      type: 'input',
      name: 'email',
      message: "What's the intern's email?",
      validate: emailInput => {
          const val = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          if (emailInput.match(val)) {
              return true;
          } else {
              console.log('Please enter a valid email address!');
              return false;
          }
      }
  },
  {
      type: 'input',
      name: 'school',
      message: "What school does the intern go to?",
      validate: schoolInput => {
          if (schoolInput) {
              return true;
          } else {
              console.log("Please enter your intern's school!");
              return false;
          }
      }
  },
  {
    type: 'list',
    name: 'anotherTeammate',
    message: 'Please choose to add a teammate or finish.',
    choices: ['Engineer', 'Intern', 'Make Team Page!']
  }
];

module.exports = { managerQuestions, internQuestions, engineerQuestions }