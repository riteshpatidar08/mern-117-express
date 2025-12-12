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
