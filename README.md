# Formative Front End 3.2 by John, Andy and Katherine

# A One-page App Using Mongo DB (Front End)


# Installation

This is the **server** part of a 2-part project. The server side is located here: https://github.com/JonnySaito/formative-3.2-server

To copy this project, you need to have a version of **Node JS** and **npm** installed on your machine.

In Terminal on your computer:
>$ git clone https://github.com/Katherineslove/formative3.2FrontEnd.git

>$ cd formative3.2FrontEnd

At the level of the project folder, make a dev branch for yourself:
>$ git branch yournameDev

Make sure you're in your dev branch:
>$ git checkout yournameDev

Still in Terminal, but now in your local server (vagrant, localhost, etc.):
>$ npm install

This will install Bootstrap, jQuery, Popper.js and Grunt.

You also need to create a **config.json** file in your root directory and paste the following into the file. You need yto insert the SERVER_URL and SERVER_PORT so that you can access everything. Add these to the newly created config.json file.

Here's what the example config file looks like:

>${
    "SERVER_URL" : "SERVER_URL",
    "SERVER_PORT" : "SERVER_PORT"
}


# STYLE GUIDE

- For JavaScript, we use: single quotes for values; camelcase for variable and function names; spaces around operators; 4-space indentation; and other practices recommended by [W3Schools](https://www.w3schools.com/js/js_conventions.asp). We are starting to use ES6 for variable and function declarations.

- We are using **Bootstrap** for CSS layout and styling.

- HTML is written in line with [W3Schools guidelines](https://www.w3schools.com/html/html5_syntax.asp)
