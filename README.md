

## demo app - ExpressAPI-Docker



This demo app is a simple API that returns user information built with 

- nodejs backend with express module

### To install Node

Step 1:

        brew install node 


#### To initiate the dependencies

Step 2:
        npm init
        npm install --save
         
    

#### To start the application

Step 3:
        node index.js

#### Launch application in the browser UI

Step 4:
        http://localhost:3000


#### Create a Dockerfile to build the image

Step 5:
        FROM node:latest
        WORKDIR /app
        ADD . .
        RUN npm install
        CMD node index.js

#### Build the Dockerimage

Step 6:
        docker build -t user-service-api:latest .

