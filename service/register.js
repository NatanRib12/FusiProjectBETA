function validateRegister(validateRegisterData){
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const returnData = ''

    if( typeof validateRegisterData.name === 'string' && regexEmail.test(validateRegisterData.email) &&      typeof validateRegisterData.password === 'string' && validateRegisterData.password.length >= 8){
        return true
    } else {
        return false
    }
    
}


module.exports = validateRegister;