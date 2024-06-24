const btns=document.querySelectorAll('.stonebtn')
const playertext1=document.querySelector('.playertext')
const computertext1=document.querySelector('.Computertext')
const resulttext1=document.querySelector('.Resulttext')
const reset_btn12=document.querySelector('#resetbtn')

let user="";
let cpu="";
let result="";
const comp=["Stone","Paper","Scissor"]

reset_btn12.addEventListener('click',function(){
    playertext1.textContent ="Player:";
    computertext1.textContent = "Computer:";
    resulttext1.textContent = "Result:";
     user="";
     cpu="";
     result="";
});


btns.forEach(function(btn){
btn.addEventListener('click',function(){
    const user_select=btn.querySelector('p');
    user=user_select.textContent
    cpu=compselect()   
    validate()
    playertext1.textContent =`Player: ${user}`;
    computertext1.textContent = `Computer: ${cpu}`;
    resulttext1.textContent = `Result:${result}`;
   

});
});







function compselect(){
    
    let val=Math.floor(Math.random()*3)
    return comp[val];
}

function validate(){
    console.log(user)
    console.log(cpu)
    if(user === cpu) {
        result = "Draw";
    } 
    else if (user == "Stone" && cpu == "Scissor" ||
               user == "Paper" && cpu == "Stone" ||
               user == "Scissor" && cpu == "Paper") {
        result = "Win";
    } 
    else {
        result = "Lose";
        
    }
    

}




