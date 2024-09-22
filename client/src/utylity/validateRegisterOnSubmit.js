export function validateRegisterData(cpyRegisterData , users) {
    cpyRegisterData.forEach(currentInput => {
        switch(currentInput.name){
            case "firstName":
              currentInput.valid = currentInput.value.length > currentInput.maxChar || currentInput.value.length <= currentInput.minChar ? false : true
              currentInput.errorMessage = currentInput.value.length <= currentInput.minChar ?
               "the min chars is  " + " " + currentInput.minChar:currentInput.value.length>currentInput.maxChar 
                ? "the max char is "+ " " + currentInput.maxChar :""
              break;
              case "lastName":
              currentInput.valid = currentInput.value.length>currentInput.maxChar 
              || currentInput.value.length <= currentInput.minChar ? false :true
              currentInput.errorMessage=currentInput.value.length <= currentInput.minChar ?
                "the min chars is  " + " " + currentInput.minChar:currentInput.value.length>currentInput.maxChar 
                ? "the max char is "+ " " + currentInput.maxChar : ""
    
                break; 
            case "password" :
              currentInput.valid=currentInput.value.length>currentInput.maxChar || currentInput.value.length<=currentInput.minChar ? false :true
              currentInput.errorMessage=currentInput.value.length <= currentInput.minChar ?
               "the min chars is  " + " " + currentInput.minChar : currentInput.value.length>currentInput.maxChar 
                ? "the max char is "+ " " + currentInput.maxChar : ""
              break;
            case "email":
               function validateEmail() {
                   var re = /\S+@\S+\.\S+/;    return re.test(currentInput.value);
                   }
               function validateUser(){
                    let user = users.filter(li=>li.email === currentInput.value)
                    return user;
              }
               currentInput.valid=(validateEmail() && validateUser().length===0) ? true : false
               currentInput.errorMessage =! validateEmail() 
               ? "the email is not valid" 
               : validateUser().length !== 0 ? "User exists" :""
               break;
            case "street":
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

    })
    return cpyRegisterData;
}
