`use strict`;
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent='Correct Number!';

// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=20;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
//to get the value, we use the .value property
let number = Math.trunc(Math.random() * 20) + 1;

let score=20;
//to do something, when the click button is used
let highscore = 0;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
console.log(typeof guess,guess);

// document.querySelector('.message').textContent='correct number!';

if(!guess){
    document.querySelector('.message').textContent='no number!';
}
else if(guess===number){
    document.querySelector('.message').textContent='correct!';
    document.querySelector('.numb').textContent=number;
    document.querySelector('body').style.backgroundColor= 'green';
    if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
}
else if(guess > number){
    if(score > 1){
    document.querySelector('.message').textContent='Too high';
   score--;
   document.querySelector('.score').textContent = score;
    }
    else{
       document.querySelector('.message').textContent='you lost!';
       document.querySelector('.score').textContent = 0;
    }
}
else if(guess < number){
    if(score > 1){
    document.querySelector('.message').textContent='Too low';
    score--;
    document.querySelector('.score').textContent = score;
    }
    else{
        document.querySelector('.message').textContent='you lost!';
        document.querySelector('.score').textContent=0;
     }
}

});

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    number = Math.trunc(Math.random()*20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.numb').textContent = '?';
    document.querySelector('.guess').value = ' ';
    document.querySelector('body').style.backgroundColor='black';
});








