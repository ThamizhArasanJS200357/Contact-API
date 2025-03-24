const express=require('express');
const app=express();
const dotenv=require('dotenv');
const path=require('path');
dotenv.config({path:path.join(__dirname,'config','config.env')});
const connectDatabase=require('./config/connectDatabase');

const contact=require('./router/router');

connectDatabase();

app.use(express.json());
app.use('/api/v1',contact);


app.listen(8000,()=>{
    console.log(`Server is running on port is 8000`);
});