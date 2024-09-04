import express from "express";
// const port = process.env.PORT || 4000;
import fs from 'fs'
import date_time from 'date-and-time'

import defaultroutes from './routes/default_route.js'
import pages from './routes/pages.js'
const app = express()
const port = 3000

//middleware
app.use(express.static('public'))

app.use((req, res, next) => {
  fs.appendFile('./logs/req_log.txt', `${date_time.format(new Date, 'YYYY/MM/DD HH:mm:ss')} , ${req.url} , ${req.ip} , ${req.method}\n`, (err, data) => {
    if (!err) {
      console.log("updated log")
    }
  })
  next()
})

//routes
app.use('/', defaultroutes)
app.use('/pages',pages)

app.listen(port, () =>
  console.log(`Example app listening on port ${port}`)
)