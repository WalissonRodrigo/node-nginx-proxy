# node-nginx-proxy
Node project with Express using nginx proxy server via docker container.
This project is running on port 3000 standard express but does not respond without going through the proxy first which in turn is running on port 80 to simplify access by the browser.

### Requirements
   * Docker
   * Web browser

### Executing project
1. Clone this project
      ```sh
      git clone https://github.com/WalissonRodrigo/node-nginx-proxy.git
      ```
2. Open your terminal and navigate to the clone folder using:
      ```sh
      cd node-nginx-proxy
      ```
3. After navigating to the project folder, run on your terminal:
      ```sh
      docker-compose up -d --build
      ```
4. Open your browser and access: http://localhost | http://localhost/now | http://localhost:8080 | http://localhost:8080/now

5. Change the files in the `node` folder and the server reloads via nodemon at run time, but in the browser you need to reload the page to see your changes being reflected.