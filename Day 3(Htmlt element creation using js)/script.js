function show(){
    name=inputfieldname.value;
    pass=password.value;

    if(name == "" || pass ==""){
    alert("Enter the proper credentials");
    return;
    }
    if(pass.length<8){
        alert("enter the password more than 8 characters")
        return
    }
    let pattern=/^[a-zA-Z0-9._%+-]+@gmail+\.[a-z]{2,}$/;
   
   if(!pattern.test(name)){
    alert("Please enter valid email address")
    return

   }

   for(var i in database) {
    if(name in database){
        if (database[name]==pass) {

            alert("user login successful")
            return;
        }
        else{
            alert("Incorrect password")
            return;
        }    
    
}
else{
    alert("user not found")
    return
}

 }
    console.log(name)
    alert("Username: "+name+"\n"+"Password: "+pass)
}


const database={"vishnu@gmail.com":"123456789","akshat":"11111111","hithesh":"11110000"}


const formfield=document.querySelector("#formfieldid");
const label=document.createElement("label");
const inputfieldname=document.createElement("input");
const label2=document.createElement("label");
const password=document.createElement("input");
password.setAttribute("type", "password");
inputfieldname.setAttribute("placeholder","username@gmail.com")
password.setAttribute("placeholder","Password")
let name=" "
let pass=" "
label.innerHTML="username"
label2.innerHTML="password"
formfield.appendChild(label);
formfield.appendChild(inputfieldname);
formfield.appendChild(label2);
formfield.appendChild(password);
const submit=document.createElement("button");
submit.innerHTML="submit"
submit.setAttribute("type","submit");
submit.addEventListener("click",show)
formfield.appendChild(submit);
