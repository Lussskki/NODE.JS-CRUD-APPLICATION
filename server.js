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


app.post('/myFriends',(req,res,next)=>{
    myFriends.push(req.body)
    fs.writeFileSync('./db/myFriends.json', JSON.stringify(myFriends))
    res.send('Post request recieved')
})
//პოსტ მეთოდი, შეგიძლია მონაცემთა ბაზაში ჩაამატო ინფორმაცია 

app.delete('/myFriends/:isbn',(req,res,next)=>{
    const isbn = req.params.isbn

    for (let i = 0; i<myFriends.length; i++){
        let friend = myFriends[i]

        if (friend.id === isbn){
          const deleted = myFriends.splice(i,1)
          fs.writeFileSync('./db/myFriends.json', JSON.stringify(myFriends))
        //   console.log(myFriends)
          res.send(deleted)
        }
    }
})
//წაშლის მეთოდი,აიდის მითითებით შეგიძლია წაშალო კონკრეტული ინფორმაცია





app.listen(port, (req,res)=>{
    signale.success(`Example listens on port ${port}`)
})