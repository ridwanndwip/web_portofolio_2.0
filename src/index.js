// Hamburger Menu
const NavToggle = document.querySelector('.navbar_toggle input');
const navbar = document.querySelector('.navbar_menu')

NavToggle.addEventListener('click', function(){
 navbar.classList.toggle('seret');
});


// Stop Scrolling while nav active
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

// Nav Down while User Scroll Down
let prevScrollPos = window.pageYOffset;
const navbarScroll = document.getElementById('navbar');

  window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      navbarScroll.style.top = '0';
    } else {
      navbarScroll.style.top = `-${navbarScroll.offsetHeight}px`;
    }

    prevScrollPos = currentScrollPos;
  }

// GSAP
  gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
        scrollTrigger:{
            trigger:".hero",
            start: "top 100",
            end: "400 top",
            scrub: 1,
            markers: true,
            pin: true,
            yoyo:true,
        }
    });

    tl.to(".hero_mainbanner_1", {width:0, duration: 2})
    .to(".hero_mainbanner_2", {width:0, duration: 2});

// const content = document.querySelector(".content");
// const character = document.querySelector(".wrap");

// gsap
//   .timeline({
//     repeat: -1,
//     yoyo: true
//   })
//   .to(
//     character,
//     {
//       duration: 1,
//       y: -30,
//       easy: "sine.inOut"
//     },
//     0
//   );

// gsap
//   .timeline({
//     scrollTrigger: {
//       trigger: ".page",
//       scrub: true,
//       start: "0% 0%",
//       end: "100% 100%"
//     }
//   })

//   .fromTo(
//     content,
//     {
//       xPercent: 0
//     },
//     {
//       xPercent: -67,
//       easy: "none"
//     },
//     0
//   )

//   .to(
//     character,
//     {
//       duration: 1,
//       rotation: 10,
//       x: -400,
//       easy: "sine.inOut"
//     },
//     0
//   );

//  AOS Animation
// AOS.init();


// SCROLL Navbar
// const body = document.querySelector("#navbar");
// let lastScroll = 0;

// window.addEventListener("scroll", () => {
//   const currentScroll = window.pageYOffset;

//   if (Math.abs(currentScroll - lastScroll) < 20) {
//     return;
//   }

//   if (currentScroll > lastScroll) {
//     body.classList.add("scroll-down");
//   } else {
//     body.classList.remove("scroll-down");
//   }

//   lastScroll = currentScroll;
// });

// if (currentScroll <= 0) {
//   body.classList.remove("scroll-up");
//   return;
// }