function wish(){
    alert("register click")
}



const card2=document.getElementById('card2')


const card=document.getElementById('card1')
card.style.display="none"

function hide(){
    card.style.display="none"
    card2.style.display="inline"
   
}


function show(){
    card.style.display="inline"
    card2.style.display="none"

}






let table=document.createElement('table')
let row=document.createElement('tr')
let FIRSTNAME=document.createElement('td')
let LASTNAME=document.createElement('td')
let DOB=document.createElement('td')
let PHONENO=document.createElement('td')
let GENDER=document.createElement('td')
let EMAIL=document.createElement('td')
let PASSWORD=document.createElement('td')
FIRSTNAME.innerHTML="FIRSTNAME";
LASTNAME.innerHTML="LASTNAME";
DOB.innerHTML="DOB";
PHONENO.innerHTML="PHONENO";
GENDER.innerHTML="GENDER"
EMAIL.innerHTML="EMAIL";
PASSWORD.innerHTML="PASSWORD";

row.appendChild(FIRSTNAME)
row.appendChild(LASTNAME)
row.appendChild(DOB)
row.appendChild(PHONENO)
row.appendChild(GENDER)
row.appendChild(EMAIL)
row.appendChild(PASSWORD)
table.appendChild(row)
card2.appendChild(table);







card2.appendChild(table1);


function onsavebutton(){
    card.style.display="none"
    card2.style.display="inline"
    let newentry=table.insertRow(-1);



    const firstnn=document.getElementById('firstn').value;
    const lastn=document.getElementById('lastn').value;
    const dob12=document.getElementById('daten').value;
    const usern=document.getElementById('emailn').value;
    const pass=document.getElementById('passwordn').value;
    const pn=document.getElementById('passwordn').value;
    const gender1212=document.getElementById('gendern').value;
    const check1=document.getElementById('chbox').value;




if(firstnn==""||lastn=="" || dob12==""|| pass==""|| pn==""|| gender1212==""){
    alert("please fill all credentials")
    return;
}
let pattern=/^[a-zA-Z0-9._%+-]+@gmail+\.[a-z]{2,}$/;
   
if(!pattern.test(usern)){
 alert("Please enter valid email address")
 return;

}
if (pass.length<8){
    alert('please enter password more than 8 characters')
    return;
}
// if(check1.checked){
// }
// else{
//     alert("Hehhhe");
//     return;
// }
let fn=newentry.insertCell(0);
let ln=newentry.insertCell(1);
let dob=newentry.insertCell(2);
let phone=newentry.insertCell(3);
let gender123=newentry.insertCell(4);
let email=newentry.insertCell(5);
let password=newentry.insertCell(6);

const firstname=document.getElementById('firstn').value;
const lastname=document.getElementById('lastn').value;
const dob1=document.getElementById('daten').value;
const username=document.getElementById('emailn').value;
const password1=document.getElementById('passwordn').value;
const phone1=document.getElementById('mobilen').value;
const gender12=document.getElementById('gendern').value;

fn.innerHTML=firstname
ln.innerHTML=lastname
dob.innerHTML=dob1
phone.innerHTML=phone1
email.innerHTML=username
password.innerHTML=password1;
gender123.innerHTML=gender12





}



function formclear(){
    document.getElementById('form-field').reset();
}

