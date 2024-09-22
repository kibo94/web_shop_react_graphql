import React,{useState,useContext} from 'react';
import Input from  "../../../components/UI/Input/Input"
import useformValidation from "../../../hooks/formValidation"
import mutation from "../../../mutations/singleUser"
import {graphql} from "react-apollo"
import "./Login.css"
import { withRouter } from "react-router-dom";
import { validateLoginData } from "../../../utylity/validateLoginOnSubmit"
import { DataContext } from "../../../context"

const Login = ({mutate , history}) => {
    const {setUser} = useContext(DataContext)
    const [logedUser, setLogedUser] = useState(true);
    const loginFormValidation = useformValidation();
    const {loginData , setLoginData} = loginFormValidation; 

    const validateInputOnSubmitBtn = () => {   
        let cpyLoginData = [...loginData];
        cpyLoginData = validateLoginData(cpyLoginData);
        setLoginData(cpyLoginData);
    }
    const logedInHandler = async () => {
        validateInputOnSubmitBtn();   
        let emailInputValue = loginFormValidation.loginFormData.email;
        let passwordInputValue = loginFormValidation.loginFormData.password;
        let res = await mutate({
            variables:{
            email: emailInputValue
        },
        })
        let { singleUser } =  res.data;   
        const loginUser = singleUser   
        const [email, password] = loginData
        if(email.touched && password.touched){
            if(loginUser && loginUser.email === emailInputValue && loginUser.password === passwordInputValue){
                    localStorage.setItem('auth', JSON.stringify(true));
                    setUser(loginUser)
                    history.push("/");
                    setLogedUser(true);
            }  
            else {
                    setLogedUser(false); 
            }  
            }
    }

    const signInHandler = () => {
        history.push("/register")
    }   
    return (
        <div className="Login">
        <div className="LoginForm">
        <div className="Login-logo"><i className="fa fa-user"></i></div>
           {loginData.map(form=>(
               <Input 
               changed={(e)=>loginFormValidation.login(e,form)}
               errorMessage={form.errorMessage}
               type={form.type}
               elType={form.elType}
               valid={form.valid}
               value={form.value}        
               name={form.name}
               touched={form.touched}
               placeholder={form.name}
               key={form.id}
               />
           ))}
         <button className="log-in" onClick={logedInHandler}>Login</button>
          <button onClick={signInHandler} className="sing-in">Sign In</button>
          {!logedUser ? <p className="text-danger">Wrong email or password</p> : null}  
        </div>
        </div>
    );
}

export default withRouter( graphql(mutation)(
(Login)))
