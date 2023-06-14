let box = document.querySelectorAll(".a");
let turn = document.querySelectorAll(".turn");
let start = document.querySelector(".start");
let t = document.querySelectorAll(".b");
let p = 0;




start.addEventListener('click',function(){
    start.style.display = 'none';
    turn[0].classList.add('color');
   
    
   
      for(let i = 0 ; i < box.length, p < 9 ;i++){
          box[i].addEventListener('click',function(){
                box[i].classList.add('hidden');
                t[i].textContent = turn[p%2].textContent;
       
                if(p%2==0){
                  turn[p%2+1].classList.add('color');
                  turn[p%2].classList.remove('color');
                  if(p == 8){
                    turn[p%2].classList.remove('color');
                    turn[p%2+1].classList.remove('color');
                  }
                }
                if(p%2==1){
                  turn[p%2-1].classList.add('color');
                  turn[p%2].classList.remove('color');
                  
                }
                console.log(t[i].textContent);
        if(t[0].textContent==t[1].textContent && t[1].textContent==t[2].textContent && t[1].textContent != ' '){
          document.querySelector('.win').classList.remove('hidden');
      
          for(let i=0; i<box.length; i++){
            box[i].classList.add('hidden');
            
          }
        }
        if(t[0].textContent==t[3].textContent && t[3].textContent==t[6].textContent && t[0].textContent != ' '){
          document.querySelector('.win').classList.remove('hidden');
      
          for(let i=0; i<box.length; i++){
            box[i].classList.add('hidden');
            
          }
        }
        if(t[1].textContent==t[4].textContent && t[4].textContent==t[7].textContent && t[1].textContent != ' '){
          document.querySelector('.win').classList.remove('hidden');
      
          for(let i=0; i<box.length; i++){
            box[i].classList.add('hidden');
            
          }
        }
        if(t[2].textContent==t[5].textContent && t[5].textContent==t[8].textContent && t[2].textContent != ' '){
          document.querySelector('.win').classList.remove('hidden');
        
          for(let i=0; i<box.length; i++){
            box[i].classList.add('hidden');
            
          }
        }
        if(t[3].textContent==t[4].textContent && t[4].textContent==t[5].textContent && t[5].textContent != ' '){
          document.querySelector('.win').classList.remove('hidden');
      
          for(let i=0; i<box.length; i++){
            box[i].classList.add('hidden');
            
          }
        }
        if(t[6].textContent==t[7].textContent && t[7].textContent==t[8].textContent && t[6].textContent != ' '){
          document.querySelector('.win').classList.remove('hidden');
    
          for(let i=0; i<box.length; i++){
            box[i].classList.add('hidden');
            
          }
        }
        if(t[0].textContent==t[4].textContent && t[4].textContent==t[8].textContent && t[0].textContent != ' '){
          document.querySelector('.win').classList.remove('hidden');
       
          for(let i=0; i<box.length; i++){
            box[i].classList.add('hidden');
            
          }
        }
        if(t[2].textContent==t[4].textContent && t[4].textContent==t[6].textContent && t[2].textContent != ' '){
          document.querySelector('.win').classList.remove('hidden');
         
          for(let i=0; i<box.length; i++){
            box[i].classList.add('hidden');
            
          }
        }


        

                
                
        p++;

                
               

        });
       

      }

  });



