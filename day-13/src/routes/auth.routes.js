const express = require('express');
const userModel = require('../model/user.model')
const authRouter = express.Router();
const jwt = require('jsonwebtoken')


authRouter.post('/register', async (req, res) => {
    const { name, email, password } = req.body

    const isEmailAlradyExits = await userModel.findOne({ email })

    if (isEmailAlradyExits) {
        return res.status(409).json({
            message: `user with this email alrady exits`
        })
    }

    const user = await userModel.create({
        name, email, password
    })

    const tokan = jwt.sign(
        {
            id: user._id,
            email: user.email
        },
        process.env.JWT_SECRET
    )

    res.cookie('jwt_token',tokan)

    

    res.status(201).json({
        message: 'user register successflly',
        user,
        tokan
    })


})

module.exports = authRouter