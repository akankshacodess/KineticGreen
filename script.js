// const tooltipTriggerList = document.querySelectorAll(
//   '[data-bs-toggle="tooltip"]'
// );
// const tooltipList = [...tooltipTriggerList].map(
//   (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
// );

const sticky = document.getElementsByClassName("sticky")[0];
const navLogo = document.getElementById("navlogo");
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    sticky.classList.add("scrolled");
    // const navLogo = document.getElementById("navlogo");
    navLogo.innerHTML =
      '<img src="images/kinetic-logo-black.png" alt="logo" />';
    document.querySelectorAll(".nav-colour").forEach((element) => {
      element.style.color = "black";
    });
  } else if (window.innerWidth <= 991) {
    navLogo.innerHTML =
      '<img src="images/kinetic-logo-black.png" alt="logo" />';
  } else {
    sticky.classList.remove("scrolled");
    navLogo.innerHTML =
      '<img src="https://kinetic.nowtestme.com/public/images/logo.svg" alt="logo" />';
    document.querySelectorAll(".nav-colour").style.color = "white";
  }
});

console.log(window.innerWidth);

// owl carousel displays
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    530: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 0) {
//     document.getElementById("navlogo").innerHTML =
//       '<img src="images/logo.png" alt="logo" />';
//   } else {
//     document.getElementById("navlogo").innerHTML =
//       '<img src="/images/kinetic-logo-black.png" alt="logo" />';
//   }
// });
