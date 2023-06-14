'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const Closebtn = document.querySelector('.close');
const show1 = document.querySelector('.show-Modal');
const show2 = document.querySelector('.Show-Modal');
const show3 = document.querySelector('.Show-modal');

show1.addEventListener('click',function(){
    modal.classList.remove('hidden');//no dot in front of the class name,, yesss
   overlay.classList.remove('hidden');
   
});
show2.addEventListener('click',function(){
    modal.classList.remove('hidden');//no dot in front of the class name,, yesss
    overlay.classList.remove('hidden');
});
show3.addEventListener('click',function(){
    modal.classList.remove('hidden');//no dot in front of the class name,, yesss
    overlay.classList.remove('hidden'); 
});

Closebtn.addEventListener('click',function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});
overlay.addEventListener('click',function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});
//keyboard events
document.addEventListener('keydown',function(e){
    console.log(e.key);

    if(e.key === 'Escape'){
        if(!modal.classList.contains('hidden')){
            modal.classList.add('hidden');
    overlay.classList.add('hidden');
        }
    }
});
//keydown: when we press
//keypress: when we hold it it happens eg: shooting games
//keyup: when we leave the key






