const express = require ('express');
const swaggerUi = require ('swagger-ui-express');
const swaggerDocument = require ('./swagger.json');
const userRouter=require('./routes/users');

var app = express ();



app.use (express.json ());

app.use('/user',userRouter);



app.use ('/api-docs', swaggerUi.serve, swaggerUi.setup (swaggerDocument));
app.use ('/api/v1', userRouter);

app.listen (3000);
module.exports = app;
