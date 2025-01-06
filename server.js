const express = require('express');
const app = express();
app.set('view engine','ejs')

const userRoute = require('./routes/user');
app.use('/user',userRoute);

app.listen(3000);