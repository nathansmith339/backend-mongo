# How to run the server

1. Install Docker
    * follow the post-installation steps
2. Install docker-compose
3. Run the command
    `docker-compose -f docker-compose.yml up --build`
4. Test the server by navigating to `localhost:8080` with a browser or sending a GET request to `localhost:8080`


# Adding users to test with

1. Run this command from host terimal docker when it is running:
    * `docker exec -it backendmongo_node-app-docker_1 bash -c 'npm run addusers'`
2. Check the `/users` endpoint to verify users were added.
