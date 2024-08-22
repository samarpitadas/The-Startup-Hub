const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile('index.html',{root:__dirname})
})

app.get('/pages/:page', (req, res) => {
  res.sendFile(__dirname+`/pages/${req.params.page}`)
})

app.post('/submit', (req, res) => {
  console.log("its a post request")
  const {...data}=req.body
  console.log(data)
  
  res.sendFile('index.html',{root:__dirname})
})

app.listen(port, () => 
  console.log(`Example app listening on port ${port}`)
)