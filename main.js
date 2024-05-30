// navbar
let menu =document.getElementById("menu")
let right_head= document.querySelector(".right-head") 
let closee = document.querySelector(".closee")

menu.onclick= function(){
  right_head.classList.add("show")
}

closee.onclick= function(){
    right_head.classList.remove("show")   
}


// typing

var typed = new Typed('#element', {
    strings: ['Front End Developer',  ],
    typeSpeed: 100,
    backSpeed: 70,
    loop: true,
  });