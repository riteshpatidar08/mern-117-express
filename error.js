// inbuilt Error
//main khud ka kaise bhi error bana skte ;

//  const error = new Error('you are not registered')
// console.log(error.message)
// error.statusCode = 400 ;
// console.log(error.statusCode)
//  error => data type ? array , object , number , string

try {
    const error = new Error('you are not registered')
    // console.log(error.message)
    error.statusCode = 400 ;
  
    // console.log(error.statusCode) 
    throw error 
} catch (error) {
   console.log(error)
//    Error.captureStackTrace(error)
   console.log(error.stack)  //kya yeah wala console chalege?
}

