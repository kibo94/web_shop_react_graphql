import React from 'react';
import {withRouter} from "react-router-dom"
import Input from '../../../components/UI/Input/Input';
import useFormValidation from "../../../hooks/formValidation"
import {graphql} from "react-apollo"
import mutation from "../../../mutations/createUser"
import query from "../../../queries/users"
import { validateRegisterData } from "../../../utylity/validateRegisterOnSubmit"
import "./Register.css"
const Register = ({data , history , mutate}) => { 
const registerValidation = useFormValidation()
const {registerData , setRegisterData} = registerValidation;
if(data.loading){
    return <div>loading!!</div>
}
let users = data.allUsers;
const validateFormOnKeyUp = ()=> {
    let cpyRegisterData = [...registerData]
    cpyRegisterData = validateRegisterData(cpyRegisterData , users)
    setRegisterData(cpyRegisterData)
}
const register = () => {
    validateFormOnKeyUp()
    let cpyRegisterData = [...registerData]
    let isValid = true;
    cpyRegisterData.forEach(data => {
        isValid = data.valid && isValid
    })
    if(isValid){
        mutate({
        variables:{
        user:registerValidation.regData   
              
            }
        })
        history.push("/login")
    }
}
    return (
        <div className="Register">
            <div className="RegisterForm">
                {registerData.map(form=>(
                    <Input 
                    changed={(e) => registerValidation.register(e,form,users)}
                    type = {form.type}
                    elType = {form.elType}
                    valid = {form.valid}
                    value = {form.value}
                    errorMessage = {form.errorMessage}
                    name = {form.name}
                    touched = {form.touched}
                    placeholder = {form.placeholder}
                    key = {form.id}
                />
                ))}
                <button onClick={register} className="register">Register</button>
            </div>
        </div>
    );
}
export default withRouter(graphql(mutation)(
    graphql(query)(Register)
))
