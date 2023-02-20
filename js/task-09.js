
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const btn = document.querySelector('.change-color');
const textEl = document.querySelector('.color');

btn.addEventListener('click', (event) => {
  document.body.style.backgroundColor = getRandomHexColor();
  return textEl.textContent = document.body.style.backgroundColor;
})
