/* imports */
require('dotenv').config()
const express  = require('express')
const mongoose = require('mongoose')
const bcrypt   = require('bcrypt')
const jwt      = require('jsonwebtoken')

const app = express()

// Config JSON response
app.use(express.json())

app.get('/', (req, res) => {
    console.log('Estamos conectados!')
    res.status(200).json({ message: 'Estamos conectados!' })
})

// Register User
app.post('/auth/register', async(req, res) => {

    const {
        name,
        email,
        password,
        confirmpassword
    } = req.body

    // validations
    if(!name) {
        return res.status(422).json({ msg: 'O nome é obrigatório!' })
    }

})

// Credencials
const dbUser     = process.env.DB_USER
const dbPassword = process.env.DB_PASS

mongoose
    .connect(
        `mongodb+srv://${dbUser}:${dbPassword}@authjwt.bhw0qo6.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
        app.listen(3000)
        console.log('Conectou ao banco!')
    })
    .catch((err) => console.log(err))

