// Select the button and color display elements
let btn = document.querySelector("button");
let colorDisplay = document.querySelector(".color-display h3");
let colorBox = document.querySelector(".color-display");

// Add a click event listener to the button
btn.addEventListener("click", function () {
  let randomColor = getRandomColor();
  colorDisplay.innerText = `Your Color: ${randomColor}`;
  colorBox.style.backgroundColor = randomColor;
});

// Generate a random color in RGB format
function getRandomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}
