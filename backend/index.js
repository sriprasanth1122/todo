// const express = required ('express')
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import Connection from './database/db.js'
import Routes from './routes/route.js'

import dotenv from 'dotenv'

//config
dotenv.config()

//DB connection
Connection()

const app = express();

app.use(cors())

app.use(bodyParser.json({ extended : true }));              // 1:22:55
app.use(bodyParser.urlencoded({extended : true}))

app.use('/' , Routes);



const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Your server in running successfully  on PORT ${PORT}`));