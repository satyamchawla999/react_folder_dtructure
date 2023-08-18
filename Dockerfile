# Fetching the latest node image on alpine linux
FROM node:16 AS development

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /react_structure

# Installing dependencies
COPY ./package.json /react_structure
RUN npm install --f

# Copying all the files in our project
COPY . .

EXPOSE 3000 
#8000
# Starting our application
CMD npm start