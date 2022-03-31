# Fashion Town

The Fashion Town is an online one-stop shop for all fashion and lifestyle needs. where users can easily search and filter out the product based on their needs, and seller can list their product post admin approval

<br/>

# Table of Contents

1. [Demo](#demo)
2. [Installation](#installation)
3. [Technology Stack and Architecture](#technology-stack-and-architecture)
4. [Author](#author)
5. [License](#license)

# Demo

[Live Demo](https://fashion-town.netlify.app/)


# Installation

**Method 1**

1. Run **npm install** to install all the necessary packages.
2. Run the product service with the command **start-service-products**
3. Run the product service with the command **start-service-order**
4. Once the above services have stared successfully, add these service URL in service array in gateway.js file and run **npm start** to start API Gateway

**Method 2**

1. cd services/service-name
2. **npm install && npm start**
3. Once the above services have stared successfully, add these service URL in service array in gateway.js file.
4. Go to root directory (where gateway.js is present) run **npm install && npm start** to start API gateway

**Note** API gateway will crash if the product and order services are not running.


# Technology Stack and Architecture

This application is based on microservice architecture and the services are as follows:

1. Product service
2. Order service
3. graphQL API gateway service: All request are routed via this gateway
# Author
1. Vikram
# License

MIT
