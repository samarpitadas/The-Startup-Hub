import express from "express";
const route = express.Router();
const __dirname = import.meta.dirname;
import { Startup } from "../models/startup_data.js";
import path from 'path'
import { connectdbs } from "../connection.js";
import { addstartuptodbs, adduser, loginuser } from "../controllers/functions.js";
import { handlefile } from "../controllers/file.js";
import { uploadlogo } from "../middlewares/upload.js";

connectdbs();

route.post('/submit', addstartuptodbs);

route.get('/:page', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '/pages', req.params.page))
})

route.post('/signup', adduser);

route.post('/login', loginuser);

route.post('/logo', uploadlogo.single('logo'), (req, res) => {
    console.log(req.file, req.body)
    res.redirect('/pages/logo.html')
});



export default route;