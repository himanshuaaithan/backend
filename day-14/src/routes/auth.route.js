const express = require('express');
const userModel = require('../model/user.model');
const jwt = require('jsonwebtoken')
const bcrpyt = require('bcrypt')

const authRouter = express.Router();

// post 
// register api 
// /api/auth/register 
authRouter.post('/register', async (req, res) => {
    const { name, email, password } = req.body

    const isEmailAlradyExits = await userModel.findOne({ email })


    if (isEmailAlradyExits) {
        return res.status(409).json({
            message: "user with this email alrady exits"
        })
    }

    const hash = await bcrpyt.hash(password, 10)
    const user = await userModel.create({ name, email, password: hash })

    const token = jwt.sign({
        id: user._id,
        email: user.email
    }, process.env.JWT_SECRET)

    res.cookie('jwt_token', token)

    res.status(201).json({
        message: 'user register successfully',
        email: user.email,
        name: user.name
    })
});




// post 
// api/auth/login
authRouter.post('/login', async (req, res) => {
    const { email, password } = req.body

    const user = await userModel.findOne({ email })


    if (!user) {
        return res.status(409).json({
            message: 'user with this email not found'
        })
    }

    const ispasswordcorrect = await bcrpyt.compare(password, user.password)

    if (!ispasswordcorrect) {
        return res.status(409).json({
            message: 'password is incorrect'
        })
    }

    const token = jwt.sign({
        id: user._id,
        email: user.email
    }, process.env.JWT_SECRET)

    res.cookie('jwt_token', token)

    res.status(201).json({
        message: ' user login successfully'
    })
})


//get
//api/auth/get-me
authRouter.get('/get-me', async (req, res) => {
    const token = req.cookies.jwt_token
    console.log(token)

    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    const user = await userModel.findById(decoded.id)


    res.status(200).json({
        email: user.email,
        name: user.name
    })
})

module.exports = authRouter