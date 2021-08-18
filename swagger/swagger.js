const swaggerAutogen = require('swagger-autogen');

swaggerAutogen()("./swagger/swagger.json", ['./server.js']);