import express from "express";
const route = express.Router();
const __dirname = import.meta.dirname;
import { Startup } from "../models/startup_data.js";
import path from 'path'
import mongoose from "mongoose";
const conn = await mongoose.connect("mongodb+srv://raj902121raj:rahulpandit123@database.ox2us.mongodb.net/")

//middleware
route.use(express.json())
route.use(express.urlencoded({ extended: false }));



route.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/..','/index.html'))
})
route.post('/find', async (req, res) => {
    let obj = req.body
    let obj2 = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            if (element != "") {
                // console.log(key, element);
                obj2[key] = element;
            }
        }
    }

    let temp = await Startup.find(obj2);
    res.send(temp);
})


// route.post('/loadcard', async (req, res) => {
//     let temp = await Startup.find({});
//     // console.log(temp)
//     res.send(temp)
// })

export default route;



