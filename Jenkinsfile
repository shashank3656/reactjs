pipeline {
    agent any

    environment {
        NAME = "test"
        VERSION = "${env.BUILD_ID}"
        IMAGE_REPO = "shashank3656"
        GIT_USER_NAME = "shashank3656"
        GIT_REPO_NAME = "reactjs"
    }
    
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
                sh 'docker login --username shashank3656 --password gowthamn1'
                sh 'docker push shashank3656/build:$BUILD_ID'
            }
        }

        stage('Checkout K8S manifest SCM') {
            steps {
                git credentialsId: 'Github',
                url: 'https://github.com/shashank3656/reactjs.git',
                branch: 'master'
            }
        }

        stage('Update K8S manifest & push to Repo') {
            steps {
                dir("reactjs/k8s") {
                    withCredentials([usernameColonPassword(credentialsId: 'Github', variable: 'Github')]) {
                        sh '''
                        cat deployment.yaml
                        sed -i "s#shashank3656.*#${IMAGE_REPO}/build:${VERSION}#g" deployment.yaml
                        cat deployment.yaml
                        git config --global user.email "shashankgowtham12@gmail.com"
                        git config --global user.name "shashank3656"
                        git add deployment.yaml
                        git commit -m 'Updated the deploy yaml | Jenkins Pipeline'
                        git remote - v
                        git push https://github.com/shashank3656/reactjs.git HEAD:master
                        ''' 
                    } 
                }
            }
        }
    }
}    
