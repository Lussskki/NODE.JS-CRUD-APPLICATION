import express from 'express'
import signale from 'signale'
import bodyParser from 'body-parser'
import fs from 'fs'


const app = express()
      app.use(bodyParser.json())
const port = 3000


const users = JSON.parse(fs.readFileSync('./db/myFriends.json').toString())




app.get('/users', (req,res,next) =>{
    // console.log(users)
    res.send(users)
})


app.post('/users',(req,res,next)=>{
    users.push(req.body)
    fs.writeFileSync('./db/myFriends.json', JSON.stringify(users))
    res.send('Post request recieved')
})



app.listen(port, (req,res)=>{
    signale.success(`Example listens on port ${port}`)
})