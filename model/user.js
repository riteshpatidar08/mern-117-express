//resource model => 

import mongoose from 'mongoose' ;


const userSchema = new mongoose.Schema({
  name : {
    type : String,
    required :[true , 'Name is required']
  }  ,
  email : {
    type  : String
  },
  password : {
    type : String
  },
  role : {
    type  : String ,
    default : "Student"
  }
})
//mongodb schemaless => flexible schema 

const User = mongoose.model("User" , userSchema)

// model === collection
export default User



//express server setup
//mongodb se connect karung
//mvc folder structure create karna
//model resource //user //student //teacher  //department