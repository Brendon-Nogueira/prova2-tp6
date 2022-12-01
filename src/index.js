const express = require('express')
const router = require('./router/customers.route', './router/ordereds.route', './router/products.route')
const app = express()


app.use(express.json())
app.use('api/v1/customers/', router)
app.use('api/v1/ordereds/', router)
app.use('api/v1/products/', router)

app.listen(8087, () => console.log('Server up on port 8087'))