let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');

    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');

    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');

    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

$(document).ready(function() {
    $('.logo-bar').owlCarousel({
      loop: !0,
      nav: !1,
      dots: !1,
      autoplay: !0,
      responsive:{
        0:{
          items:1
        },
        320:{
          items:2
        },
        600:{
          items:3
        },
        750:{
          items:4
        },
        990:{
          items:5
        },
        1270:{
          items:6
        }
    }
    })
   
  });