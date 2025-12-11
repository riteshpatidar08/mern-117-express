import express from 'express';
import mongoose from 'mongoose';
const app = express();
import upload from './middleware/upload.js';
app.use(express.json());
//NOTE first connect with database

mongoose.connect('mongodb://localhost:27017/testUsers').then(() => {
  console.log('DB CONNECTED');
});
//serve the image file on the https://localhost:3000/filePathWhichIsSaveInURL
//src=http://localhsot:3000/uploads/avatar-1940494409383290032
app.use('/uploads',express.static('uploads'))


//NOTE step - 2 schema defines
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    default: 'user',
  },
  isActive : {
    type : Boolean ,
    default : true
  },
  avatar : {
    type : String
  },
  lastLogin: {
    type: Date,
  },
});
//step - 3 define the model
const User = mongoose.model('User', UserSchema);

//crud api's
//get
//post

app.post('/api/v1/register', upload.single('file'), async (req, res) => {
  try {
    console.log(req.body)
    console.log(req.file)
    const newUser = await User.create({...req.body , avatar : req.file.path});
    if (!newUser) {
      res.status(400).json({
        message: 'Failed to Register the user',
      });
    }
    res.status(201).json({
      sucess: true,
      data: newUser,
    });
  } catch (error) {}
});

//get all users
app.get('/api/v1/users', async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json({
      success: true,
      data: allUsers,
    });
  } catch (error) {}
});

//get single user
app.get('/api/v1/users/:id', async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const singleUser = await User.findById(id);
    console.log(singleUser);
    // console.log(singleUser._id.toString() === id)
    res.status(200).json({
      data: singleUser,
    });
  } catch (error) {}
});
app.put('/api/v1/users/:id', async (req, res) => {
  try {
    const id = req.params.id;
    //search for the document //kya update karna name , age ,email
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json({
      data: updatedUser,
    });
  } catch (error) {}
});

app.post('/profile', upload.single('file') , (req,res)=>{
  console.log(req.files)
})
//deative shym account 
//id find , isActive : false
app.listen(3000, () => {
  console.log('Server is running on the port 3000');
});


//model => controller => routes => app.js/server/js




//MVC => MODEL , VIEW , CONTROLLER => ARCHITECTURE 
//MVT => MODEL , VIEW , TEMPLATE =>

  //MODEL =>DB SE INTERACTION 
  //CONTROLLER => controller => model //USER.find 
  //VIEW => REACT  /user => controller

  //NOTE templates engine => 
    //NOTE AUTHENTICATION AND AUTHORIZATION
  //NOTE HOW TO HANDLE FILES IN BACKEND 
  //NOTE HOW TO SEND EMAIL FROM BACKEND 


  //form => text field  + files /resume /profile pic directly X

  // if multimedia field exist karti hain toh us data ko main backend main bhjne k liye FormData use data

// /profile => backend => 00 11 11 00 11 => accept => multer => store  

// /profile => multer uploads/profile.jpg => controller => database
//                       req.file

//upload


//express.json => req.body set
//multer => req.file set





// http://localhost:3000/uploads/file-1764915561929-621018975

//PENDING TOPICS :  ERROR HANDLING , MONGOOSE MIDDLEWARES , MONGodb , middlewares , mail servrice , file uploads cloudinary , sso firebase , notification