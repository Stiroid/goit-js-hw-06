const inp = document.querySelector('#validation-input');

inp.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length === Number(inp.dataset.length)) {
        inp.className = 'valid';
    } else {
        inp.className = 'invalid';
    }
  });
  
