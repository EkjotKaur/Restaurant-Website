var toggler = document.querySelector("#collapsed-navbar button");
var navbar = document.querySelector("#collapsed-navbar");
var closeBtn = document.querySelector("#close")

toggler.addEventListener("click",function(){
    navbar.classList.toggle("navToggler");
    closeBtn.classList.toggle("d-inline");
    $(closeBtn).css("float","right");
});
closeBtn.addEventListener("click",function(){
    navbar.classList.remove("navToggler");
    this.classList.toggle("d-inline");
})

// $(function(){
//     $(document).scroll(function(){
       
//         $nav.toggleClass("navbar-scroll", $(this).scrollTop() > $mainCover.height);

//     });
// });
var mainCover = $("#cover");
var nav = $("#cover .row");
var img = $("#logo");

$(document).scroll(function(){
     //alert("hello");  
    console.log($(this).scrollTop());
    console.log(mainCover.height());

     if($(this).scrollTop() > mainCover.height())
    {
        nav.addClass("navbar-scroll"); 
        img.css({
            width: "50px",
            height: "50px",
            margin: "10px"
        });

    }
    else
    {
        nav.removeClass("navbar-scroll"); 
        img.css({
            width: "100px",
            height: "100px",
            margin: "30px"
        });
    }
});