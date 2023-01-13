require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const { notFound, errorHandler } = require('./middlewares/auth.js')


const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())



app.use('/api', require('./routes/authRouter'))


// app.use(notFound);
// app.request(errorHandler);

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(con => {
    console.log(`MongoDB Database connected`)
})




const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`server is running on port`, port);
})