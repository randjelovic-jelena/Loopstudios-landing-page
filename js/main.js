'use strict';
const closeMenuBtn=document.querySelector('#close-menu-icon');
const openMenuBtn=document.querySelector('#hamb-menu');
const mobileMenu=document.querySelector('.navigation-mobile-list');

closeMenuBtn.addEventListener('click',()=>{
    mobileMenu.style='transform:translateX(-200%)';
})
openMenuBtn.addEventListener('click',()=>{
    mobileMenu.style='transform:translateX(0%)';
});

