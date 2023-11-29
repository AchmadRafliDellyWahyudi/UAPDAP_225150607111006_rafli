// uap.js

// You can add your JavaScript code here
document.addEventListener('DOMContentLoaded', function () {
  // This event listener ensures that the DOM is fully loaded before executing your JavaScript code

  // You can add your JavaScript logic and interactions here

  // Example: Change the background color when a button is clicked
  const changeColorButton = document.getElementById('changeColorButton');
  const body = document.body;

  changeColorButton.addEventListener('click', function () {
    body.style.backgroundColor = getRandomColor();
  });

  // Function to generate a random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
