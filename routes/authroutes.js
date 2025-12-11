
//shopping 

//how to create a separate routes for each resouces : 
import { login } from "../controllers/authController.js";
import express from 'express' ;

const router = express.Router() ;

router.post('/login' , login)
// router.post('/register')
export default router ;

//products product rotues // product controller