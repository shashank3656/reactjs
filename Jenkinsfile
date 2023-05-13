pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
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
                sh 'docker push shahsank3656/buil:$BUILD_ID'
            }
        }

        stage ('Deploy') {
            steps {
                dir("k8s")
                sh 'sh 'sed -i "s/shashank3656\\\\/build:.*/shashank3656\\\\/build:$BUILD_ID/g" deployment.yaml'
                sh 'cat deployment.yaml'
                sh 'git add .'
                sh 'git commit -m "updated the latest $BUILD_ID"'
                sh 'git push https://shashank3656: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@github.com/shashank3656/reactjs.git master'
            }
        }
    }
}
