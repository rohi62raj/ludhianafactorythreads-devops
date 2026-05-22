pipeline {
    agent any

    environment {
        IMAGE_NAME = 'ludhianafactorythreads'
        IMAGE_TAG = 'jenkins-${BUILD_NUMBER}'
        CONTAINER_NAME = 'lft-jenkins'
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
                bat 'docker build -t %IMAGE_NAME%:%IMAGE_TAG% .'
            }
        }

        stage('Smoke Test Container') {
            steps {
                bat '''
                docker rm -f %CONTAINER_NAME% || exit /b 0
                docker run -d --name %CONTAINER_NAME% -p 8090:80 %IMAGE_NAME%:%IMAGE_TAG%
                powershell -Command "Start-Sleep -Seconds 5; $response = Invoke-WebRequest -Uri http://localhost:8090 -UseBasicParsing; if ($response.StatusCode -ne 200) { exit 1 }"
                docker logs %CONTAINER_NAME%
                docker rm -f %CONTAINER_NAME%
                '''
            }
        }
    }

    post {
        always {
            bat 'docker rm -f %CONTAINER_NAME% || exit /b 0'
        }
        success {
            echo 'CI pipeline completed successfully.'
        }
        failure {
            echo 'CI pipeline failed. Check console output for exact stage and error.'
        }
    }
}
