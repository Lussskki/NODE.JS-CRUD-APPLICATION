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

app.delete('/myFriends/:isbn',(req,res,next)=>{
    const isbn = req.params.isbn
    let found = false

    for (let i = 0; i<myFriends.length; i++){
        let friend = myFriends[i]

        if (friend.id === isbn){
          let found = true
          const deleted = myFriends.splice(i,1)
          fs.writeFileSync('./db/myFriends.json', JSON.stringify(myFriends))
        //   console.log(myFriends)
          res.send(deleted)
        }
    }
    if(!found){res.status(404).send(`This friend with ISBN ${isbn} notfound `)}
    
})
//წაშლის მეთოდი,ISBN მითითებით შეგიძლია წაშალო კონკრეტული ინფორმაცია
//delete method,you can  delete data with ISBN





app.listen(port, (req,res)=>{
    signale.success(`Example listens on port ${port}`)
})