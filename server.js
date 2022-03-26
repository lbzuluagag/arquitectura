require('./api/db/mongoose')
const express = require('express')
const cors = require("cors");
const productRouter = require('./api/routes/productRoutes')
const clientRouter = require('./api/routes/clientRoutes')
const orderRouter = require('./api/routes/orderRoutes')

const app = express()
const port = process.env.PORT || 3000
var options = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }
app.use(cors(options));
app.use(express.json())
app.use(productRouter)
app.use(clientRouter)
app.use(orderRouter)
app.listen(port);


console.log('arquitectura list RESTful API server started on: ' + port); 