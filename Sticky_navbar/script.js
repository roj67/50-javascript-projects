const nav = document.querySelector(".nav");
const links = document.querySelectorAll(".link");

window.addEventListener("scroll", fixnav);

function fixnav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((link1) => {
      if (link1 !== link) {
        link1.classList.remove("current");
      } else {
        link1.classList.add("current");
      }
    });
  });
});
