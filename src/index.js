const NavToggle = document.querySelector('.navbar_toggle input');
const navbar = document.querySelector('.navbar_menu')

NavToggle.addEventListener('click', function(){
 navbar.classList.toggle('seret');
});
