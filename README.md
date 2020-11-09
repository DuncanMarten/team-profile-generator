
  # Team Profile Generator
  [![License](https://img.shields.io/static/v1?label=License&message=MIT&color=blue)](https://img.shields.io/static/v1?label=License&message=MIT&color=blue)
  
  ## Description
  This application was built for the user to be able to create a HTML page with an employee team on it.  The user prompts to application to start and fill out name, id, email, and other info for each employee.  The first employee is the manager and after each employee the user has to select if they want to add an engineer or intern.  Once the user has the entire employee team added they hit finish building team and the html is created.  The html uses google font and bootstrap to style it and the user provided information including links to email and github(engineer).

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
    
  ## Installation
  Go to DuncanMarten github page and find team-profile-generator and clone it to your computer.  You will need node.js as well as inquirer and jest downloaded to the file to work the application.  Once you have all that you are ready to test or use the application.

  ## Usage
  To use the application prompt your command line by typing node index.js.  Then answer all prompts for manager and select add engineer, add intern, or finish building team to move on.  Adding employee will bring up prompts for the next employee and finish build team will push the information you entered and create the html.  All prompts have validation so make sure to add the information asked for.  The email prompt needs to have a @ and .com or it will ask you to add email again. After everything is done the finished product will be added to the file dist and you can see it. View video if you want visual (https://drive.google.com/file/d/1ZQfcdjyfN2Opdvx8QXu4EVWt4xBuT_K6/view).

  ## License
  [MIT](https://opensource.org/licenses/MIT)

  ## Contributing
  This is an application that should not be changed.  I ask do not recopy or distribute unless you ask.

  ## Tests
  To test this application in the parent folder type npm run test.  If you want to test a single part add Employee, Engineer, Manager, or Intern to the end of the npm run test command. It will show that the test was run and if it comes back as pass or fail.

  ## Questions
  * Contact me on [Github](http://www.github.com/DuncanMarten)
  * Contact me by [email](mailto:duncanmarten@yahoo.com?subject=[Question]%20About%20Team Profile Generator)