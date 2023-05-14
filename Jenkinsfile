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
                dir("reactjs/k8s") {
                   sh 'ls'
                   sh 'sed -i "s/shashank3656\\/build:.*/shashank3656\\/build:$BUILD_ID/g" deployment.yaml' 
                   sh 'cat deployment.yaml'
                }
            }
        }
        
        stage ('Commit & Push') {
            steps {
                dir("reacts") {
                   sh "git config --global user.email 'shashankgowtahm12@gmail.com'"
                   sh "git config --global user.name 'shashank3656'"
                   sh 'git remote set-url origin  https://$GIT_TOKEN@github.com/shashank3656/reactjs.git' 
                   sh 'git checkout master'
                   sh 'git add .'
                   sh 'git commit -m "updated the build id $BUILD_ID in the deployment file'
                   sh 'git push -u origin master' 
                }
            }
        }
    }
}    
