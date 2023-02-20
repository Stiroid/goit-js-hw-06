let range = document.querySelector('#font-size-control');
let itemEl = document.querySelector('#text');
range.addEventListener("input", (event) => {
itemEl.style.fontSize = range.value + "px";
});



