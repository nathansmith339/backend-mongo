# pull an image
FROM node:8.11.3

# set workdir in container
WORKDIR /src

# install global packages
RUN npm install -g nodemon

# install packages for project
RUN npm install

# Expose the 8080 port from the container
EXPOSE 8080

# Run the script called 'start' in package.json
CMD ["npm", "start"]
