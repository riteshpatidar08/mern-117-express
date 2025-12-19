
import express from 'express' ;
import { getStudent } from '../controllers/studentController.js';
import verifyToken from '../middleware/verfiyToken.js';
const router = express.Router() ;

router.get('/student' ,getStudent)

export default router

//route protected => token ? role === 'teacher' token verify then role checkrna => 2 middleware token verify karna middleware role ko check rkna


//login => email password check => token generate => client =>  /student => token/req.headers => middleware /verfiy token => role check => getstudent