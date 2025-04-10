import express from "express"
import 'dotenv/config'
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/about", (req,res)=>{
    res.send("Hello I am about")
})

app.get("/vikash",(req,res)=>{
    res.send("Hii Vikash here")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})