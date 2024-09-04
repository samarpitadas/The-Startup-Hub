import express from "express";
const route = express.Router();
const __dirname = import.meta.dirname;
import { Startup } from "../models/startup_data.js";
import path from 'path'
import mongoose from "mongoose";
const conn = await mongoose.connect("mongodb+srv://raj902121raj:rahulpandit123@database.ox2us.mongodb.net/")


route.post('/submit', async (req, res) => {
    console.log("its a post request")
    const recieved_data = req.body
    // console.log(recieved_data)

    const newstartup = new Startup(recieved_data);
    newstartup.save()

    // res.sendFile('pages/redirect.html', { root: __dirname })
    res.sendFile(path.join(__dirname,'..','/pages','redirect.html'))
})

route.get('/:page', (req, res) => {
    res.sendFile(path.join(__dirname,'..','/pages',req.params.page))
})



export default route;