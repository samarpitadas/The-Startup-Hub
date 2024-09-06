// import express from 'express'
// const __dirname = import.meta.dirname;
// import path from 'path'
import { connectdbs } from "../connection.js";
import { Startup } from "../models/startup_data.js";
import { user } from '../models/user_data.js';


connectdbs();

async function addstartuptodbs(req, res) {
    console.log("its a post request")
    const recieved_data = req.body
    // res.send(recieved_data)
    const newstartup = new Startup(recieved_data);
    newstartup.save()

    // res.sendFile(path.join(__dirname, '..', '/pages', 'redirect.html'))
    res.redirect('/')

}

async function findfromdbs(req, res) {
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
}

async function adduser(req, res) {
    try {
        const userdata = req.body;
        const existingUser = await user.findOne({
            $or: [
                { email: userdata.email },
                { username:userdata.username},
            ]
        }); // or any other unique field
        if (existingUser) {
            res.send("User already exist");
        } else {
            const new_user = new user(userdata);
            await new_user.save();
            res.redirect('/');
        }
    } catch (error) {
        res.redirect('/');
    }
}

export { findfromdbs, addstartuptodbs, adduser };
