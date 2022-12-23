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


app.post('/myFriends',(req,res,next)=>{
    myFriends.push(req.body)
    fs.writeFileSync('./db/myFriends.json', JSON.stringify(myFriends))
    res.send('Post request recieved')
})

app.put('/myFriends/:name',(req,res,next)=>{
      const {name,lastName} = req.params

        const updateUser = myFriends.findindex(myFriends.id==1) //მინდა ჯერ პირველი აიდი, რომელსაც აქვს ის განმეახლებინა, ჩემი.
        const addToDb = myFriends.push(req.body)

      fs.writeFileSync('./db/myFriends.json', JSON.stringify(addToDb))
      
      
      
      let hasFound = false 
      myFriends.forEach(i => {
        if(name === name){
            i.lastName = lastName,
            hasFound = true
        }
        if(hasFound){
            return res.json({
                Message:'update successfuly'
            })
        }else{
            return res.json({
                Message:'user couldnt found'
            })
        }    
 

      })
})


app.listen(port, (req,res)=>{
    signale.success(`Example listens on port ${port}`)
})