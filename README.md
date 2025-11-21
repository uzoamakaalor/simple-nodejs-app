# Simple Node.js CI/CD Demo Application

## Description
A simple Node.js web application demonstrating CI/CD pipeline automation using Jenkins.

## Project Details
- **Student:** Uzoamaka Ruth
- **Project:** CI/CD Mastery Capstone
- **Technology:** Node.js, Express, Docker, Jenkins

## Routes
- `/` - Home page
- `/health` - Health check endpoint

## How to Run Locally
```bash
npm install
node app.js
```

## Docker Build
```bash
docker build -t simple-nodejs-app .
docker run -p 3000:3000 simple-nodejs-app
```

## CI/CD Pipeline
This application is automatically built and deployed using Jenkins pipeline.

## Build Status
- Pipeline Build: Automated via Jenkinsfile
- Freestyle Build: Automated via Jenkins Freestyle Job

## Latest Updates
- Added Freestyle job for build and unit tests
- Configured automatic webhook triggers
