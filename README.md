1

## demo app - ExpressAPI-Docker

2

​

3

This demo app is a simple API that returns user information built with 

5

- nodejs backend with express module


​

6

### To install Node

7
Step 1:

    ​brew install node 

8

#### To initiate the dependencies

9
Step 2:
    npm init
    npm install --save 
    

#### To start the application

10
Step 3:
    node index.js

#### Launch application in the browser UI

Step 4:
    http://localhost:3000


#### Create a Dockerfile to build the image

11
Step 5:
    FROM node:latest
    WORKDIR /app
    ADD . .
    RUN npm install
    CMD node index.js

#### Build the Dockerimage

12
Step 6:
    docker build -t user-service-api:latest .

