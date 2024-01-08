const NavToggle = document.querySelector('.navbar_toggle input');
const navbar = document.querySelector('.navbar_menu')

NavToggle.addEventListener('click', function(){
 navbar.classList.toggle('seret');
});

document.addEventListener("DOMContentLoaded", function() {
    const stopScrollingCheckbox = document.getElementById("stopScrollingCheckbox");

    stopScrollingCheckbox.addEventListener("change", function() {
        const body = document.body;

        if (this.checked) {
            // Disable scrolling
            body.style.overflowY = "hidden";
        } else {
            // Enable scrolling
            body.style.overflowY = "auto";
        }
    });
});
