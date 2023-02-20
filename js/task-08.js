const form = document.querySelector('.login-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const {elements: { email, password }} = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert('all fields must be filled');
    }
    const objEl = {
        email: email.value,
        password: password.value
    };
    console.log(objEl);
    event.currentTarget.reset();
});


