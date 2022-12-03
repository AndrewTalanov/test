"use strict";

const burger = document.querySelectorAll('.header__nav-burger');
const menu = document.querySelector('.header__nav-mobile-menu');

burger.forEach(el => {
    el.addEventListener('click', () => {
        burger.forEach(el => {
            el.classList.toggle('header__nav-burger--active');
        })
        menu.classList.toggle('header__nav-mobile-menu--active');
    });
});

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        margin: 47,
        nav:true,
        navText: ["<div class='files__btn left'><img src='./img/arrow-down.svg' alt='arrow'></div>", "<div class='files__btn right'><img src='./img/arrow-down.svg' alt='arrow'></div>"],
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3,
                margin:5
            },
            1000:{
                margin:10,
                items:4
            },
            1350:{
                margin:20,
                items:3
            }
        }
    })
});