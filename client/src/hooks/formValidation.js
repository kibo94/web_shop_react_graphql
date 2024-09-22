import  {useState} from 'react';
import uuid from "uuid"
const useFormValidation = () => {
    const [loginData,setLoginData] = useState(
        [ {
                elType:"input",
                value:"",
                type:"email",
                name:"email",
                errorMessage:"",
                valid:true,
                touched:false,
                required:true,
                id:0
            }
                    ,
           {
                elType:"input",
                value:"",
                type:"password",
                name:"password",
                required:true,
                valid:true,
                touched:false,
                errorMessage:"",
                id:1,
            } 
        ]
    )
    const [registerData,setRegisterData]=useState([
        {
            elType:"input",
            value:"",
            type:"text",
            name:"firstName",
            valid:true,
            maxChar:15,
            numberChars:0,
            touched:false,
            minChar:2,
            errorMessage:"",
            placeholder:"FirstName",
            required:true,
            
            id:0
        },
        {
            elType:"input",
            value:"",
            type:"text",
            name:"lastName",
            valid:true,
            maxChar:20,
            numberChars:0,
            touched:false,
            minChar:2,
            placeholder:"LastName",
            errorMessage:"",
            required:true,
            
            id:1
        },
        {
            elType:"input",
            value:"",
            type:"password",
            name:"password",
            placeholder:"Password",
            valid:true,
            touched:false,
            maxChar:12,
            numberChars:0,
            minChar:3,
            id:2,
            required:true,
            errorMessage:"",
        
        }
,
        {
            elType:"input",
            value:"",
            type:"email",
            name:"email",
            msg:"",
            msg2:"",
            valid:true,
            touched:false,
            placeholder:"Email Adress",
            required:true,
            id:3,
            errorMessage:"",
        
        },
        {
            elType:"input",
            value:"",
            type:"text",
            name:"street",
            valid:true,
            maxChar:12,
            numberChars:0,
            touched:false,
            minChar:2,
            placeholder:"Street",
            required:true,
            errorMessage:"",
            id:4
        },
     
    ])
    const [loginForm,setForm] = useState({
        email:"",
        password:""
    })
    const [registerForm, setRegisterForm] = useState({
        firstName:"",
        lastName:"",
        password:"",
        street:"",
        email:"",
        id:uuid()
    });

const loginHandler = (e,form) => {
setForm({...loginForm,[e.target.name]:e.target.value});
form.value = e.target.value;
form.touched = true;
switch(form.name){
case "email":
     form.valid = true
     function validateEmail()         {
        let re = /\S+@\S+\.\S+/;
        return re.test(form.value);          
        }
     form.valid = validateEmail()=== true ? true : false; 
     form.errorMessage = form.value==="" ? "Required field" : "";
           break; 
case "password":
     form.valid = true;
     form.valid = form.value === "" ? false : true;  
     form.errorMessage = form.value==="" ? "Required field" : "";
     break;
 default:return form;    
}
}
// Validate register on keyup
const registerHandler= (e,currentInput,list)=>{
        setRegisterForm({...registerForm,[e.target.name]:e.target.value});
        currentInput.value = e.target.value;
        currentInput.touched = true;
    switch(currentInput.name){
     case "firstName":
        currentInput.valid = true;
        if(currentInput.required){
            currentInput.valid = currentInput.value.length > currentInput.maxChar || currentInput.value.length <= currentInput.minChar ? false : true;
            currentInput.errorMessage = currentInput.value.length <= currentInput.minChar ?
            "the min chars is  " + " " + currentInput.minChar:currentInput.value.length > currentInput.maxChar 
            ?
            "the max char is "+ " " + currentInput.maxChar:"";
                }
            break;
     case "lastName":
        currentInput.valid = true;
        if(currentInput.required){
            currentInput.valid = currentInput.value.length > currentInput.maxChar || currentInput.value.length <= currentInput.minChar ? false :true
            currentInput.errorMessage=currentInput.value.length <= currentInput.minChar ?
            "the min chars is  " + " " + currentInput.minChar:currentInput.value.length>currentInput.maxChar 
                ?
            "the max char is "+ " " + currentInput.maxChar : "";
            }
            break; 
     case "password":
        currentInput.valid=true
             if(currentInput.required){
                currentInput.valid = currentInput.value.length > currentInput.maxChar || currentInput.value.length <= currentInput.minChar ? false :true
                currentInput.errorMessage = currentInput.value.length <= currentInput.minChar ?
                "the min chars is  " + " " + currentInput.minChar : currentInput.value.length > currentInput.maxChar 
                 ?
                "the max char is "+ " " + currentInput.maxChar : "";
             }
          break;
         case "email":
            currentInput.valid=true
            if(currentInput.required){
                function validateEmail() 
                {
                   var re = /\S+@\S+\.\S+/;
                   return re.test(currentInput.value);
                }
          
           function validateUser(){
                 let user = list.filter(li=>li.email === currentInput.value)
                 return user;
           }       
            currentInput.valid=(validateEmail() && validateUser().length === 0) ? true : false
            currentInput.errorMessage=!validateEmail() ?
             "the email is not valid" 
             : validateUser().length!==0 ? "User exists" :""

            } 
           break;
           case "street":
              currentInput.valid=true 
            if(currentInput.required){
                currentInput.valid=currentInput.value.length>currentInput.maxChar || currentInput.value.length<=currentInput.minChar ? false :true
                currentInput.errorMessage=currentInput.value.length<=currentInput.minChar ?
               "the min chars is  " + " " + currentInput.minChar:currentInput.value.length>currentInput.maxChar 
                ?
               "the max char is "+ " " + currentInput.maxChar:""
            }            
            break;
           default:return "error"
    } 
    

    

}
  return {
    login:loginHandler,
    loginFormData:loginForm,
    register:registerHandler,
    regData:registerForm,
    loginData:loginData,
    setLoginData:setLoginData,
    registerData:registerData,
    setRegisterData:setRegisterData
    
}
}
export default useFormValidation;
