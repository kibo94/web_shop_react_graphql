
export function validateLoginData(cpyLoginData){
    cpyLoginData.forEach(currentInput => {
        switch(currentInput.name){
            case "email":
                if(currentInput.required){
                    function validateEmail()  {
                        let re = /\S+@\S+\.\S+/;
                        return re.test(currentInput.value); 
                    }
                        currentInput.valid = validateEmail() === true ? true : false;
                        currentInput.errorMessage = currentInput.value ==="" ? "Required field" : "";
                    }
           break;
            case "password":
                if(currentInput.required){
                currentInput.valid = currentInput.value === "" ? false : true;
                currentInput.errorMessage = currentInput.value === "" ? "Required field" : "";
                }
              break;
            default: return null
        }
    })
    return cpyLoginData;
}
