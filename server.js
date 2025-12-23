import express from 'express';
import jwt from 'jsonwebtoken';
const app = express();
import authRoutes from './routes/authroutes.js';
import studentRoutes from './routes/studentroute.js';

import bodyParser from 'body-parser';

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  // res.header('Access-Control-Allow-Credentials', 'true');
  // res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type '
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
// app.post('/login', (req,res)=> {
//     const {email,password} = req.body ;
//     const data = [{email : "ritesh@gmail.com",password :'ritesh@123', role:'customer'}];
//     const userData = data.find((user)=>user.email === email);
//     console.log(userData)
//     if(!userData){
//         return res.send("You are not registered , please register and try again")
//     }
//     console.log(userData.password === password)
//     if(userData.password !== password){
//         return res.send('Password is incorrect')
//     }
//     const token = jwt.sign({name:userData.name,email:userData.email,role : userData.role},'this-secret-is', {expiresIn : '7d'})
//     res.status(200).json({
//         message : "login success",
//         token
//     })
// })
app.use(bodyParser.json());

app.use(express.json());

app.use('/api/v1', authRoutes);
app.use('/api/v1', studentRoutes);

//global erro handler
app.use((err,req,res,next)=>{
  console.log('global error handler running')
  console.log(err.statusCode)
  res.status(500).json({
    message : err.message ,
    stack : err.stack
  })
})
app.listen(5000 , () => {
  console.log('server is running 5501');
});

//where i place my global error handler 

//condition => jab mujhe controller main error milege => catch(error) => next(error)

//mail   + upload + verifytoken + jwt + global error handler  + crud + mvc + 


//JAVASCRIPT => CRUD OPERATION CREATE UPDATE < READ < 

//current =>  http://127.0.0.1:5501  ui  => http://localhost:5501