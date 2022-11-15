const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

open.onclick = () => container.classList.add("show-nav");
close.onclick = () => container.classList.remove("show-nav");
