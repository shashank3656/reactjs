#FROM node:10-slim

# Set to a non-root built-in user `node`
#USER node

# Create app directory (with user `node`)
#RUN mkdir -p /home/node/app

#WORKDIR /home/node/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
#COPY --chown=node package*.json ./

#RUN npm install

# Bundle app source code
#COPY --chown=node . .

#RUN npm run build

# Bind to all network interfaces so that it can be mapped to the host OS
#ENV HOST=0.0.0.0 PORT=3000

#EXPOSE ${PORT}
#CMD [ "node", "." ]












###MY_CODE
FROM node:19.3.0
USER root
RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY . /usr/app
RUN npm install 
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
CMD ["npm", "run", "deploy"]

#FROM nginx:latest
#COPY --from=reactjs /usr/app/build /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]
