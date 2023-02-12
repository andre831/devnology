FROM node:16.19-alpine as build-stage

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
COPY package*.json ./
COPY tsconfig.json ./

RUN npm install 

COPY . .
# install and cache app dependencies

EXPOSE 80

# start app
CMD ["npm", "run", "serve"]