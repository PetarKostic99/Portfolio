//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');


}

//scroll section
window.onscroll = () => {
    //sticky header
    let header=document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);


}

const form = document.querySelector('form');
const typed = new Typed('.multiple-text',{
    strings : ['Software engineer','Developer'],
    typeSpeed: 150,
    backSpeed: 150,
    backDelay: 50,
    loop: true
});

