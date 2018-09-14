# pull an image
FROM node:8.9

# set workdir in container
WORKDIR /usr/src/app

# install global packages
RUN npm install -g nodemon

# install local packages
RUN npm install

# Expose the 8080 port from the container
EXPOSE 8080

# Run the script called 'start' in package.json
CMD ["npm", "start"]
