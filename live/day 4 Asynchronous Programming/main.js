
let h1=document.getElementById('counter')
function counter(){
   
    let i=60;
    
    let id=setInterval(function(){
       
        i--;
        if(i==0){
            clearInterval(id)
            // alert('Timeout!!')
          
        }
       
      h1.innerText=i  ;
    }, 100)

}

counter()