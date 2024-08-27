const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');

const mongoose=require("mongoose")
const conn =mongoose.connect("mongodb+srv://raj902121raj:rahulpandit123@database.ox2us.mongodb.net/todo")






app.use(express.static('public'))
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname })
})

app.get('/pages/:page', (req, res) => {
  res.sendFile(__dirname + `/pages/${req.params.page}`)
})

app.post('/submit', (req, res) => {
  console.log("its a post request")
  const { ...recieved_data } = req.body
  // console.log(recieved_data)

  var data = fs.readFileSync("data/companies.json");
  var data_json = JSON.parse(data);

  data_json.push(recieved_data);

  var data_string = JSON.stringify(data_json);
  fs.writeFile("data/companies.json", data_string, (err) => {
    // Error checking
    if (err) throw err;
    console.log("New data added");
  });

  res.sendFile('pages/redirect.html', { root: __dirname })
})

app.post('/loadcard', (req, res) => {
  var data = fs.readFileSync("data/companies.json");
  // var data_json = JSON.parse(data);
  // var data_string=JSON.stringify(data_json);
  res.send(data)
})

app.listen(port, () =>
  console.log(`Example app listening on port ${port}`)
)