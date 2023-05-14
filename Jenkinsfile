pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                sh 'rm -rf reactjs'
                sh 'git clone https://github.com/shashank3656/reactjs.git'
                sh 'git checkout master'
            }
        }

        stage ('Docker_Build') {
            steps {
                sh 'docker login --username shashank3656 --password gowthamn1' 
                sh 'docker build -t shashank3656/build:$BUILD_ID .'
            }
        }

        stage ('Push') {
            steps {
                sh 'docker push shashank3656/build:$BUILD_ID'
            }
        }

        stage ('Deploy') {
            steps {
                dir("k8s")
                sh "sed '/image/s/:.*/:$BUILD_ID/g' >> deployment.yaml"
                sh 'cat deployment.yaml'
            }
        }
    }
}
