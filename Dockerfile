FROM node:17.7.1
USER root
RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY . /usr/app
RUN npm install 
#RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
#CMD ["npm", "run", "deploy"]

#FROM nginx:latest
#COPY --from=reactjs /usr/app/build /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]
