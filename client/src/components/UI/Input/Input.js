import React from 'react';
import "./Input.css"
const Input = (props) => {
let {elementType , changed , valid , value , name , label , errorMessage , elementConfig} = props;
 let inputElement = null
    switch (elementType){
        case("input"):
             inputElement = <input  
             onChange={changed} 
             className={!valid ? "error" : "" }  
             value={value}
             name={name}
             placeholder={name} />
             break;
        case("textarea"):
             inputElement = <textarea 
             onChange={changed} 
             className={!valid ? "error" : "" } 
             name={name}
             value={value}/>
             break;
        case("select"):
             inputElement = <select 
              onChange={changed} 
              className={!valid ? "error" : "" } 
              name={name}
              value={value} >
              {elementConfig.options.map(option => ( 
              <option 
              key={option.value} 
              value={option.value}>
              {option.displayValue}
             </option>
               ))}
            </select>
            break;   
        default:
             inputElement=<input 
                onChange={changed} 
                className={!valid ? "error" : "" } 
                name={name}
                placeholder={name}
                value={value}/> 
    }
    return (
        <div className={"Input"}>
         <label className={"Input"}>{label}</label> 
         {inputElement}
         <p className="text-danger">{errorMessage}</p>  
        </div>
    );
}
export default Input;
