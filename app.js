/* imports */
require('dotenv').config()
const express  = require('express')
const mongoose = require('mongoose')
const bcrypt   = require('bcrypt')
const jwt      = require('jsonwebtoken')

const app = express()

// Config JSON response
app.use(express.json())

// Models
const User = require('./models/User')

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
    // validations
    if(!email) {
        return res.status(422).json({ msg: 'O email é obrigatório!' })
    }
    // validations
    if(!password) {
        return res.status(422).json({ msg: 'A senha é obrigatória!' })
    }

    if(password != confirmpassword) {    
        return res.status(422).json({ msg: 'As senhas não conferem!' })
    }

    // Check if user exists
    const userExists = await User.findOne({ email: email })
/*
    if(userExists) {
        return res.status(422).json({ msg: 'Por favor, utilize outro e-mail!' })
    }

    // Create password
    const salt         = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    // Create user
    const user = new User({
        name,
        email,
        password
    })

    try {

        await user.save()

        res.status(201).json({ msg: 'Usuário criado com sucesso!' })
        
    } catch (error) {
        
        console.log(error)
        res.status(500).json({ msg: 'Erro no servidor!' })

    }*/
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

