let cursor = document.querySelector('.cursor');

window.onmousemove = (e) =>{
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
}

let home_img = document.querySelector('.home .home-img');
let home = document.querySelector('.home');

home.onmousemove = (e) =>{
    home_img.style.top = e.pageY + 'px';
    home_img.style.left = e.pageX + 'px';
}

let menu_btn = document.querySelector('#menu-btn');

let navbar = document.querySelector('.navbar');

menu_btn.onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

