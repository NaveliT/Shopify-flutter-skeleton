const express= require('express');
const bodyparser= require('body-parser');
const mongoose=require('mongoose');
const itemroute= require('./routes/items')
const app= express();
app.use(bodyparser.json());
app.get('/',(req,res)=>{
    res.send('This is a shop')
})
app.use('/items',itemroute);
//connecting to mongodb database
mongoose.connect('mongodb+srv://himu:himu@cluster0.qkmvt.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true},()=>{
    console.log('db connected')
})


=======
//opening the server

app.listen(5000);
