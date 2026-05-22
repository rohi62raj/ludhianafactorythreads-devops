pipeline {
    agent any

    environment {
        IMAGE_NAME = 'ludhianafactorythreads'
        CONTAINER_NAME = 'lft-jenkins'
        DOCKERHUB_REPO = '12326280/ludhianafactorythreads'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Validate Files') {
            steps {
                bat '''
                if not exist index.html exit /b 1
                if not exist style.css exit /b 1
                if not exist script.js exit /b 1
                if not exist Dockerfile exit /b 1
                if not exist nginx.conf exit /b 1
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t %IMAGE_NAME%:jenkins-%BUILD_NUMBER% .'
            }
        }

        stage('Smoke Test Container') {
            steps {
                bat '''
                docker rm -f %CONTAINER_NAME% || exit /b 0
                docker run -d --name %CONTAINER_NAME% -p 8090:80 %IMAGE_NAME%:jenkins-%BUILD_NUMBER%
                powershell -Command "Start-Sleep -Seconds 5; $response = Invoke-WebRequest -Uri http://localhost:8090 -UseBasicParsing; if ($response.StatusCode -ne 200) { exit 1 }"
                docker logs %CONTAINER_NAME%
                docker rm -f %CONTAINER_NAME%
                '''
            }
        }

        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-credentials',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    powershell '''
                        $env:DOCKER_PASS | docker login -u $env:DOCKER_USER --password-stdin
                        if ($LASTEXITCODE -ne 0) { exit 1 }
                    '''
                    bat 'docker tag %IMAGE_NAME%:jenkins-%BUILD_NUMBER% %DOCKERHUB_REPO%:latest'
                    bat 'docker tag %IMAGE_NAME%:jenkins-%BUILD_NUMBER% %DOCKERHUB_REPO%:build-%BUILD_NUMBER%'
                    bat 'docker push %DOCKERHUB_REPO%:latest'
                    bat 'docker push %DOCKERHUB_REPO%:build-%BUILD_NUMBER%'
                    bat 'docker logout'
                }
            }
        }
    }

    post {
        always {
            bat 'docker rm -f %CONTAINER_NAME% || exit /b 0'
        }
        success {
            echo 'CI/CD pipeline completed successfully. Image pushed to DockerHub.'
        }
        failure {
            echo 'CI/CD pipeline failed. Check console output for exact stage and error.'
        }
    }
}
