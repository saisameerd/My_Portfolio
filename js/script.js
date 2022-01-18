let cursor = document.querySelector('.cursor');

window.onmousemove = (e) =>{
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
}

let navbar = document.querySelector('.navbar');

let menu_btn = document.querySelector('#menu-btn');

menu_btn.onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

