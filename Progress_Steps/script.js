const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

// adding event listner to next to move the progress bar forward when clicked
next.addEventListener("click", () => {
  currentActive++; // incrementing the currentActive variable when next is clicked
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update(); // calling update function
});

// adding event listner to prev to move the progress bar backward when clicked
prev.addEventListener("click", () => {
  currentActive--; // decrementing the currentActive variable when next is clicked
  if (currentActive < 1) {
    currentActive = 1;
  }
  update(); // calling update function
});

function update() {
  circles.forEach((circle, index) => {
    //checking the condition and adding or removing active class
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  //getting all the active class
  const actives = document.querySelectorAll(".active");
  // calculating the width of the progress
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  //checking wether or not prev and next button should be disabled or not
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
