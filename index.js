const express = require("express");
const cors = require('cors');
const connection = require("./utils/connection");
const tourRoutes = require("./routes/v1/tour.routes.js");

require('dotenv').config()
const app = express()

const port = process.env.PORT || 5000;


// middleware
app.use(cors())
app.use(express.json())


//connection
connection()

//tour API route
app.use('/api/v1', tourRoutes)

//base url
app.get('/', (req, res)=>{
    res.status(200).json({
        success: true,
        message: 'Tour management system is running'
    })
})

//create server
app.listen(port, ()=>{
    console.log('server is listening to the port', port)
})
