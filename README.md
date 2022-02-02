# NodeJS Course - Academind
## Description
Repository for the code written for the Udemy course by Maximilian Shwarzmüller [NodeJS - The Complete Guide(MCV, REST, APIs, GraphQL, Deno)](https://www.udemy.com/course/nodejs-the-complete-guide/)
## File Description
### Sections 1 & 2
Simple and small codes that works as introduction to NodeJS
### Section 3 - Understanding the basics
Mountining a basic server just using NodeJS, handle basic requestes, responses, redirects, handle a response and write it using the file system, headers, writing some html into a page and modules in JS.
### Section 4 - Improved Development Workflow and Debugging
Learn the use of NPM, adding NPM scripts, identifying different error types, debugging with VSode and node
* `npm init` - Initalize node project / add extra features
* `npm start` - Runs script but its a special case (you don't need to write the run part) 
* `npm run nombre-script` - Run script created by user
* `npm install nombre-paquete` - Install packages from NPM into your project
  * `npm install nombre-paquete --save-dev` - You specify that the package will only be used in development, not production. Installs only for your project
  * `npm install nombre-paquete -g` - Installs the package globaly, not just for the project
  * `npm install` - Goes through your package json and installs and updates dependencies
#### Dependencies in this project:
* `npm install nodemon` - Package that removes the need to have to stop and run the programm again once changes are made and saved. Autorestarts server. 
### Section 5 - Working with Express.js
Learn how to use the Express framemowrk to focus more on the "bussiness" part of the code. Topics include: Middleware functions (app.use()), body parser
* `path.join()` Is used to create a path for any platform. That's why it is used instead of just concat the strings. To use it you need to import `const path = require('path');`
#### Dependencies in this project:
* `npm install --save express` - To install the express framework. We don't use the save-dev option because this is an essential part of the project so it goes into production.
* `npm install --save body-parser` - Body parser
