import jwt from 'jsonwebtoken';
const verifyToken = (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.slice(7);
      console.log(token);
      const decoded = jwt.verify(token, 'this-secret-is');
      console.log(decoded);
      next();
    
    } else {
      res.send('No token provided');
    }
    // console.log(req.headers.authorization.split(' ')[1])
  } catch (error) {
    res.send(error);
  }
};
export default verifyToken;
//client /student api

//Authrorization



//NOTE cookie project //imp

//express setup 
//apis 
//methods  post , get http methods
//http error code
//http req http res
//middlewares kitne types k hote hian 
//mvc kya hota
//mongodb crud queries /mongoose model , db connection

//express application flow how it works ?



//STUDENT MODEL => register one student in the db ;


//node kya hain
//node main event loop kya hota 
//node single threaded 
//