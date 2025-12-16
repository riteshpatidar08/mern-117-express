import jwt from 'jsonwebtoken'
import transporter from '../mail.js';
export const login = (req,res)=> {
  const {email , password} = req.body

    const data = [{email : "ritesh@gmail.com",password :'ritesh@123', role:'teacher'}];

    const userData = data.find((user)=>user.email === email);
    console.log(userData)
    if(!userData){
        return res.send("You are not registered , please register and try again")
    }
    console.log(userData.password === password)
    if(userData.password !== password){
        return res.send('Password is incorrect')
    }
    // const token = jwt.sign({name:userData.name,email:userData.email,role : userData.role},'this-secret-is', {expiresIn : '7d'})
 
    (async () => {
        const info = await transporter.sendMail({
          from: '<itsmeriteshpatidar@gmail.com>',
          to: "devansh2102001@gmail.com",
          subject: "Account login",
          text: `Your aaccount has been logged in with this device ${req.ip}`, // plain‑text body
        
        });
      
        console.log("Message sent:", info.messageId);
      })();
    res.status(200).json({
        message : "login success",
       
    })
}


//AUTHENTICATION => CREDIANTIAL WEBSITE K ANDER LOGIN 

// PROTECTED API's => token call  //authorization
// exporse apis public => 

    //tool college 
// get /student => protected with token , role === teacher
    // hod , teacher , student => user's  => role : teacher , role => student


// role => student 