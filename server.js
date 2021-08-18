const express = require('express');
const swaggerUi = require('swagger-ui-express');
const routes = require('./routes/routes');
const app = express()
const port = 8000

app.use(express.json())
app.use('/api', routes)
app.use('/explorer', swaggerUi.serve, swaggerUi.setup(require('./swagger/swagger.json')))
app.listen(port)