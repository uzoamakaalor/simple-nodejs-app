pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = 'simple-nodejs-app'
        CONTAINER_NAME = 'nodejs-app-container'
        APP_PORT = '3000'
    }
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code from GitHub...'
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }
        
        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
            }
        }
        
        stage('Docker Build') {
            steps {
                echo 'Building Docker image...'
                sh "docker build -t ${DOCKER_IMAGE}:${BUILD_NUMBER} ."
                sh "docker tag ${DOCKER_IMAGE}:${BUILD_NUMBER} ${DOCKER_IMAGE}:latest"
            }
        }
        
        stage('Stop Old Container') {
            steps {
                echo 'Stopping and removing old container if exists...'
                sh """
                    docker stop ${CONTAINER_NAME} || true
                    docker rm ${CONTAINER_NAME} || true
                """
            }
        }
        
        stage('Run Application') {
            steps {
                echo 'Running application in Docker container...'
                sh """
                    docker run -d \
                    --name ${CONTAINER_NAME} \
                    -p ${APP_PORT}:3000 \
                    ${DOCKER_IMAGE}:latest
                """
                echo 'Application is now running at http://13.51.86.174/:3000'
            }
        }
        
        stage('Verify Deployment') {
            steps {
                echo 'Verifying application is running...'
                sh 'sleep 5'
                sh """
                    curl -f http://localhost:${APP_PORT} || exit 1
                    curl -f http://localhost:${APP_PORT}/health || exit 1
                """
                echo 'Application verified successfully!'
            }
        }
    }
    
    post {
        success {
            echo '✅ Pipeline completed successfully!'
            echo "Application is running at: http://13.51.86.174/:${APP_PORT}"
        }
        failure {
            echo '❌ Pipeline failed!'
            sh "docker logs ${CONTAINER_NAME} || true"
        }
    }
}
