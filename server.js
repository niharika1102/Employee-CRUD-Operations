//Calling the packages
const express = require('express')
const mongoose = require('mongoose')   //to work with mongod-db
const morgan = require('morgan')    //used to log requests to console
const bodyParser = require('body-parser')   //used to parse request in incoming bodies

const EmployeeRoute = require('./routes/employee')

// mongoose.connect('mongodb://127.0.0.1:27017/', {dbName: 'testdb', useNewUrlParser: true, useUnifiedTopology: true})
// mongoose.connect('mongodb://localhost:27017/testdb', {useNewUrlParser: true, useUnifiedTopology: true})

const uri = "mongodb+srv://niharikag1102:Psbn1234@cluster0.jyczunx.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('Database Connection Established!!')
})

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

app.use('/api/employee', EmployeeRoute)