require('dotenv').config()
const express = require('express')
const app = express()


const PORT = process.env.PORT || 8080;

//Routes
const memoizeRoutes =require('./routes')
app.use("/", memoizeRoutes);

//server 
app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT);
})