var heures = document.querySelector('.heures') ;
var minutes = document.querySelector('.minutes') ;
var seconds= document.querySelector('.secondes') ;
// const nhar = document.querySelector('.nhar') .innerHTML = hh;




 const time = document.querySelector('.lkoll') ;
 function lm() { 
    const date = new Date(); 
     hh = date.getHours();
      mm = date.getMinutes();
        ss = date.getSeconds(); 
        heures.textContent = hh;
        seconds.textContent =ss; 
        minutes.textContent =mm; 
      // nhar = "AM"; if(hh == 0){ hh = 12; } if(hh > 12){ hh = hh - 12; session = "PM"; } hh = (hh < 10)
}
setInterval(lm,1000)
