import express from "express";
const app = express()
const port = 3000
import fs from 'fs'
import mongoose from "mongoose";
const conn =await mongoose.connect("mongodb+srv://raj902121raj:rahulpandit123@database.ox2us.mongodb.net/")

import { Startup } from "./models/startup_data.js";



app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile('index.html', { root:"./" })
})
app.get('/pages/:page', (req, res) => {
  res.sendFile(__dirname + `/pages/${req.params.page}`)
})

app.post('/submit', async (req, res) => {
  console.log("its a post request")
  const recieved_data = req.body
  // console.log(recieved_data)

  const newstartup=new Startup(recieved_data);
  newstartup.save()
  // let temp=await Startup.find({});
  // console.log(temp)


  // var data = fs.readFileSync("data/companies.json");
  // var data_json = JSON.parse(data);
  // // console.log(data_json);
  // data_json.push(recieved_data);


  // var data_string = JSON.stringify(data_json);
  // fs.writeFile("data/companies.json", data_string, (err) => {
  //   // Error checking
  //   if (err) throw err;
  //   console.log("New data added");
  // });

  res.sendFile('pages/redirect.html', { root: "./" })
})

app.post('/loadcard', async (req, res) => {
  // var data = fs.readFileSync("data/companies.json");
  // var data_json = JSON.parse(data);
  // var data_string=JSON.stringify(data_json);
  let temp=await Startup.find({});
  console.log(temp)
  res.send(temp)
})

app.listen(port, () =>
  console.log(`Example app listening on port ${port}`)
)