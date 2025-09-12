// Show an alert
function showMessage() {
  alert("Hello! Welcome to my site.");
}

// Change text content
function changeText() {
  const text = document.getElementById("text");
  text.textContent = "The text has been updated!";
}

// Count button clicks
let count = 0;
function countClicks() {
  count++;
  document.getElementById("clickCount").textContent = `Button clicked ${count} time(s).`;
}

// Change background color
function changeBackground() {
  const colors = ["#f0f8ff", "#ffe4e1", "#e6ffe6", "#ffffcc"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}
