import express from 'express';
const app = express();

import morgan from 'morgan';
app.use(morgan('dev'));

import  cors from 'cors';
app.use(cors());

// recibir información de formularios
app.use(express.json()); //
app.use(express.urlencoded({
    extended:true
})); //

// mongo
import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
const dbURL = 'mongodb://localhost:27017/dbnodeexpress';
mongoose.connect(
    dbURL,
    {
        useCreateIndex:true,
        useNewUrlParser:true
    }
).then(
    res => {
        console.log("Success conection");
    }
).catch(
    err => {
        console.log("Conection failed:",err);
    }
);

const port = process.env.APP_PORT || 3000

import router from './routes/api'
app.use('/api', router);

app.listen(port,()=>{
    console.log(`Server start on port ${port}`);
});