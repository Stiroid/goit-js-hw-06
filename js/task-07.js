let range = document.querySelector('#font-size-control');
let itemEl = document.querySelector('#text');
range.addEventListener("change", (event) => {
itemEl.style.fontSize = range.value + "px";
});



