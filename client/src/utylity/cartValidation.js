export function cartValidation({firstName,lastName,email,address,phone})  {
    let messages = []
    let valid = true
    if(firstName.trim().length < 1){
        messages.push("Name shoud have at least 2 charachters")
        valid = false;
    }
    if(lastName.trim().length < 4){
        messages.push("Name shoud have at least 3  charachters")
        valid = false;
    }
    if(address.trim().length < 6){
        messages.push("Name shoud have at least 5  charachters") 
        valid = false;
    }
    if(phone.trim().length < 6){
        messages.push("Name shoud have at least 5  charachters")  
        valid = false;
    }
    return {valid,messages}

}
