const express = require ("express")
const app = express()
const cors = require ("cors")
app.use (cors())
// app.use (express.json())

app.listen (4000)

const users = []

// pirmas end-point - sukuria useri - registracija
app.get("/register/:username/:passOne/:passTwo", (req, res) => {
    const {username, passOne, passTwo} = req.params
    console.log(username, passOne)

    if(username.length>30 || username.length<4) return res.send({error:true})
    if(passOne.length>20 || passOne.length<5) return res.send({error:true})
    if(passTwo.length>20 || passTwo.length<5) return res.send({error:true})
    if (passOne !== passTwo) return res.send({error:true})

    const user = {
        username: username,
        password: passOne
    }
    users.push(user)

    res.send ({user: users})
})
// antras end-point - kuris suras useri - login

app.get ("/find/:username/:password", (req, res) => {
    const {username, password} = req.params

    const user = users.find (x => x.username === username && x.password === password)
    if (!user) return res.send({error:true})

    return res.send ({user})
})