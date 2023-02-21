let rangeEl = document.querySelector('#font-size-control');
let itemEl = document.querySelector('#text');
itemEl.style.fontSize = rangeEl.value + "px";


rangeEl.addEventListener("input", (event) => {
itemEl.style.fontSize = event.currentTarget.value + "px";
});

console.log(rangeEl.value);
