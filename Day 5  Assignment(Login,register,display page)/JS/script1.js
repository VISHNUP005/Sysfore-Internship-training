function show(){
    alert('Hey')
}




function getdata_from_register(name) {
    const field_name = new URLSearchParams(window.location.search);
    return field_name.get(name);
}



var firstn = getdata_from_register('Firstname');
const lastn=getdata_from_register('lastname');
const midn=getdata_from_register('middle');
const dob=getdata_from_register('dateofbirth');
const email=getdata_from_register('email');
const phone123=getdata_from_register('phone');
const gender=getdata_from_register('gender');
const bloodgp=getdata_from_register('blood_grp');
const coment=getdata_from_register('comments');



const container=document.querySelector('#cont')

const table=document.querySelector('#table1')

const row=document.createElement('tr')


const firstname=document.createElement('td')
const firstnamefield=document.createElement('td')
firstname.textContent="FIRST NAME"
firstnamefield.innerHTML=firstn

const row1=document.createElement('tr')
const lastname=document.createElement('td')
const lastnamefield=document.createElement('td')



lastname.textContent="LAST NAME"
lastnamefield.innerHTML=lastn

const row2=document.createElement('tr')
const middlename=document.createElement('td')
const middlefield=document.createElement('td')
middlename.textContent="MIDDLE NAME"
middlefield.innerHTML=midn

const row3=document.createElement('tr')
const Dob=document.createElement('td')
const DOBfield=document.createElement('td')
Dob.textContent="DOB"
DOBfield.innerHTML=dob

const row4=document.createElement('tr')
const Email=document.createElement('td')
const Emailfield=document.createElement('td')
Email.textContent="EMAIL"
Emailfield.innerHTML=email

const row5=document.createElement('tr')
const Phone=document.createElement('td')
const Phonefield=document.createElement('td')
Phone.textContent="PHONE"
Phonefield.innerHTML=phone123

const row6=document.createElement('tr')
const bloodgrp=document.createElement('td')
const bloodgrpfield=document.createElement('td')
bloodgrp.textContent="BLOOD GROUP"
bloodgrpfield.innerHTML=bloodgp

const row7=document.createElement('tr')
const Comment=document.createElement('td')
const commentfield=document.createElement('td')
Comment.textContent="COMMENTS"

commentfield.innerHTML=coment
commentfield.setAttribute('id', 'commentfield');








row.appendChild(firstname)
row.appendChild(firstnamefield)

row1.appendChild(lastname)
row1.appendChild(lastnamefield)

row2.appendChild(middlename)
row2.appendChild(middlefield)


row3.appendChild(Dob)
row3.appendChild(DOBfield)


row4.appendChild(Email)
row4.appendChild(Emailfield)


row5.appendChild(Phone)
row5.appendChild(Phonefield)


row6.appendChild(bloodgrp)
row6.appendChild(bloodgrpfield)


row7.appendChild(Comment)
row7.appendChild(commentfield)

table.appendChild(row)
table.appendChild(row1)
table.appendChild(row2)
table.appendChild(row3)
table.appendChild(row4)
table.appendChild(row5)
table.appendChild(row6)
table.appendChild(row7)

