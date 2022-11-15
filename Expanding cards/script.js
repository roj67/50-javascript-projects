const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses(); //calling removeActiveclasses() function
    panel.classList.add("active"); //adding active as class to the panel which is clicked
  });
});

//fucntion to remove class active
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
