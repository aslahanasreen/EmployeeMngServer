require('dotenv').config()

const express = require('express')
const cors = require('cors')
require('./connections/db')
const router = require('./routes/route')

const empServer = express()

empServer.use(cors())
empServer.use(express.json())
empServer.use(router)

const PORT = 3000 || process.env.PORT

empServer.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
    
})