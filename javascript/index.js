// get Elements
let conatainer = document.querySelector(".container");
let boxes = conatainer.querySelectorAll(".box");
// Handle Class onClick
boxes.forEach((box) => {
  box.addEventListener("click", (ev) => {
    boxes.forEach((e) => {
      e.classList.remove("active");
    });
    ev.currentTarget.classList.add("active");
  });
});
// Switch Class Between Elements
function moveActiveClass() {
  let activeBox = conatainer.querySelector(".box.active");
  let nextBox = activeBox.nextElementSibling;
  if (!nextBox) {
    nextBox = conatainer.querySelector(".box:first-child");
  }
  activeBox.classList.remove("active");
  nextBox.classList.add("active");
}
// Move the class "active" every 3 seconds 
setInterval(moveActiveClass, 3000);
