// Get Elements
let menuIcon = document.getElementById("menu_icon");
let navBox = document.getElementById("navbar_box");

menuIcon.addEventListener('click', function() {
    menuIcon.classList.toggle('open');
    navbar_box.classList.toggle('nav_active');

});


