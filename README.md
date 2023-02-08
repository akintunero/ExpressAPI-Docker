# ExpressAPI-Docker
### This is a simple API that returns user information; built with Express JS and Docker to build a docker image for the application.
* Install node on your local machine using homebrew command ' brew install node '
* launch your project directory from the terminal app and run the commands below:
* _$ npm init_
* _$ npm install --save express_
* Run the application with the command ' node index.js '
* confirm the application to be up and running from localhost:3000 on your browser.

## Building the docker image from the application:
* From the terminal, run the command ' docker build -t user-service-api:latest . '
* The image will be built with all the required dependencies.
