var toggler = document.querySelector("#mainNav button");
var navbar = document.querySelector("#mainNav")

toggler.addEventListener("click",function(){
    navbar.classList.toggle("navToggler");
})