

const ValidateEmail = (email:string):boolean=>{
   return !/\S+@\S+\.\S+/.test(email)
}
const ValidateName = (Name:string):boolean=>{
    return !/^[a-zA-Z ]+$/.test(Name)
}
const ValidateId=(Id:string):boolean=>{
    return !/^[0-9]+$/.test(Id)
}



export const Validators={
    EmailAddress:ValidateEmail,
    ValidateName:ValidateName,
    ValidateId:ValidateId,
}