const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  // getting the height of the window's content area
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    //getting the size of the element
    const boxTop = box.getBoundingClientRect().top; //getBoundingClientRect() returns the size of an element and its position relative to the viewport

    // adding show class to the box whose top value is less than window's height
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
