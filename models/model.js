const mongoose= require('mongoose');
const itemschema = mongoose.Schema({
 title:{
     type:String,
     required:true,

 },
 price:{
     type: String,
     required:true,
 },
 date:{
     type: Date,
     default:Date.now
 },
 image:{
     type:String,
     required:true,
 }
})

module.exports=mongoose.model('Items',itemschema);