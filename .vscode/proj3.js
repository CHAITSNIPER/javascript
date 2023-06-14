const add = document.querySelectorAll('.add');
const subtract = document.querySelectorAll('.subtract');
let quantity = document.querySelectorAll('.quantity');
let cost = document.querySelectorAll('.cost');
const item = document.querySelectorAll('.item');
const cart = document.querySelector('.cart')
let arr = [];
let tot = 0;


for(let i=0; i < add.length;i++){
    quantity[i].value = 0;
    console.log(quantity[i].textContent);
    cost[i].value = Number(cost[i].textContent);
add[i].addEventListener('click',function(){
    
    quantity[i].value += 1;
    quantity[i].textContent = quantity[i].value;
    arr.push(cost[i].value);
    console.log(arr);
});

subtract[i].addEventListener('click',function(){
    if(quantity[i].value > 0){
        quantity[i].value--;
        quantity[i].textContent = quantity[i].value;
        arr.push(-cost[i].value);
        console.log(arr);
        
    }
});
}
let itemarr=[];
for(let o=0;o<item.length;o++){
    itemarr.push(item[o].textContent);
}
let quantarr=[0,0,0];

console.log(itemarr)
cart.addEventListener('click',function(){
    for(let o=0;o<item.length;o++){
        quantarr[o] = quantity[o].value;
    }
    console.log(quantarr);
    for(let m=0; i < item.length; m++){
        if(quantarr[m] > 0){
            document.querySelector('.carti').textContent = `${quantarr[m]} of ${item[m].textContent}}`
        }
        
    }
});
document.querySelector('.buy').addEventListener('click',function(){
    for(let i = 0; i < arr.length; i++){
        tot += arr[i];
      }
      console.log(tot);
      document.querySelector('.buyi').textContent = `bill = ${tot}`;
});


    
