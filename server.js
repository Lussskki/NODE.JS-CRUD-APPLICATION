import express from 'express'
import signale from 'signale'

const app = express()
const port = 3000


const users = [
    {
        id:1,
        name:'Luka',
        lastName:'Guledani'
    },
    {
        id:2,
        name:'Giorgi',
        lastName:'Tchezia'
    },
    {
        id:3,
        name:'Luka',
        lastName:'Gvaramia'
    },
    {
        id:4,
        name:'Irakli',
        lastName:'Jishkariani'
    }
]




app.get('/users', (req,res) =>{
    res.send(users)
})






app.listen(port, (req,res)=>{
    signale.success(`Example listens on port ${port}`)
})