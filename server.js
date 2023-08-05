import express from 'express'
import signale from 'signale'
import bodyParser from 'body-parser'
import fs from 'fs'



const app = express()
      app.use(bodyParser.json())
const port = 3000


const myFriends = JSON.parse(fs.readFileSync('./db/myFriends.json').toString())




app.get('/myFriends', (req,res,next) =>{
    // console.log(users)
    res.send(myFriends)
})
//გეთ მეთოდი, მოაქვს მონაცემები სერვერიდან
//get method, pushing data to site

app.post('/myFriends',(req,res,next)=>{
    myFriends.push(req.body)
    fs.writeFileSync('./db/myFriends.json', JSON.stringify(myFriends))
    res.send('Friend added successfully')
})
//პოსტ მეთოდი, შეგიძლია მონაცემთა ბაზაში ჩაამატო ინფორმაცია 
//post method, you can add data to db 






app.listen(port, (req,res)=>{
    signale.success(`Example listens on port ${port}`)
})