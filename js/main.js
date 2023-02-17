let form=document.getElementById("register");
let first_name=document.getElementById("first_name");
let last_name=document.getElementById("last_name");
let email=document.getElementById("email");
let password=document.getElementById("password");
let text_firstname=document.querySelector(".text_first_name");
let text_lastname=document.querySelector(".text_last_name");
let text_email=document.querySelector(".text_email");
let text_password=document.querySelector(".text_password");
let inputbox=document.querySelector(".inputbox");

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let first_name_Re=/\w+(\d+)?/ig;
let last_name_Re=/\w+(\d+)?/ig;
let emailRe=/([^ ]+@[a-z]+\.[a-z]{2,3})$/ig; 
let passwordRe=/(\d+|\w+|\W+)+$/ig;
let testname=first_name_Re.test(first_name.value);
let testlast=last_name_Re.test(last_name.value);
let testemail=emailRe.test(email.value);
let testpassword=passwordRe.test(password.value);
console.log(testname)
console.log(testlast)
console.log(testemail)
console.log(testpassword)
if(testname===false){
    text_firstname.innerHTML="first name is error";
}if(testlast===false){
    text_lastname.innerHTML="last name is error";
}
if(testemail===false){
    text_email.innerHTML="email is error";
}
if(testpassword===false){
    text_password.innerHTML="password is error"
}
if(testname===true && testlast===true && testemail===true && testpassword===true){
    form.classList.add("invalid")
    form.classList.remove("valid")
}else if(testname===false || testlast===false || testemail===false || testpassword===true){
    form.classList.remove("invalid");
    form.classList.add("valid");
    
}
})