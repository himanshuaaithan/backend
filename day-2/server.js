const express = require('express'); // require server

const app = express()

// program server to response

app.get('/', (req, res) => {
    res.send('welcome to page ')
})

app.get('/users', (req, res) => {
    res.send([
        {
            name: "hiamnshu",
            id: 1
        }, {
            name: 'vijay',
            id: 2
        }
    ])
})

app.get('/about',(req,res)=>{
    res.send('this is about page ')
})

app.listen(3000, () => {
    console.log('server is runing on port 3000')
})