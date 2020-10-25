var start = document.getElementById('start');
var next1 = document.getElementById('next1');
var next2 = document.getElementById('next2');
var next3 = document.getElementById('next3');
var next4 = document.getElementById('next4');
var username = document.getElementById('name');
var birthdate = document.getElementById('birthdate');
var achievements = document.getElementById('achievements');

document.getElementById('sec1').style.display="flex";

 function DisplaySection(section_id , previous_section_id){
    document.getElementById(section_id).style.display="flex";
    
   if(previous_section_id == "sec1"){
       
   document.getElementById(previous_section_id).classList.add('animation_exit');
       
   }
     
   else{    
     
    document.getElementById(previous_section_id).className = document.getElementById(previous_section_id).className.replace(' animation', ' animation_exit');
     }
}

window.onload = function(){
    var buttons = document.getElementsByClassName('next');
    for(i=0;i<buttons.length;i++){
        buttons[i].style.display="none";
    }
}

username.addEventListener('input', function(){
         next1.style.display="block";                 
                          
                          });
birthdate.addEventListener('input', function(){
         next2.style.display="block";                 
                          
                          });
achievements.addEventListener('input', function(){
         next3.style.display="block";                 
                          
                          });

function validate(x){
    if(x==1){
        next4.style.display="block";
    }
}

