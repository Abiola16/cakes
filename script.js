// ====== navbar =======

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick=() =>{
    navbar.classList.toggle('active');
}

// ========= search ===========

let search = document.querySelector('.search');
document.querySelector('#search').onclick=() =>{
    search.classList.toggle('active');
}

// ======== search function ======= 
function searchhh(){
            let filter = document.getElementById('find').value.toUpperCase();
            let item = document.querySelectorAll('.product');
            let l = document.getElementsByTagName('h3');

            for( var i = 0;i<=l.length;i++ ){
                let a=item[i].getElementsByTagName('h3')[0];
            
                let value=a.innerHTML || a.innerText || a.textContent;

                if(value.toLocaleUpperCase().indexOf(filter) > -1){
                    item[i].style.display="";
                }
                else{
                    item[i].style.display="none";
                }
            }
        }


// ======== HERO ======
function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
}

function changeCircleColor(color){
    const circle = document.querySelector('.circle')
    circle.style.background = color;
}

function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation')
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}







// ===========reviews slider=========
var swiper = new Swiper(".home-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
});

var swiper = new Swiper(".reviews-slider", {
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    grabCursor:true,
    loop:true,
    spaceBetween:20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});



// ============blogs slider============
var swiper = new Swiper(".blogs-row", {
  spaceBetween: 30,
  loop:true,
  centeredSlides:true,
  autoplay:{
      delay:9500,
      disableOnInteraction:false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation:{
      nextE1 :".swiper-button-next",
      prevE1 :".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    },
  },
});


