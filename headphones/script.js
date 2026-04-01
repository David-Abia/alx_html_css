const form = document.getElementById('registration');

form.addEventListener('submit', function (event) {
    event.preventDefault()
    const name = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if (name.value.length <= 3) {
        nameError.innerHTML = 'your name must be at least <br>greater than 3 character long';
        return;
    } else {
        nameError.textContent = '';
    }

    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email.value)) {
        emailError.textContent = 'please enter a valid email';
        return;
    } else {
        emailError.textContent = '';
    }

    const message = document.getElementById('message');
    const messageError = document.getElementById('messageError');
    if (!message) {
        messageError.textContent = 'Please enter a message';
        return;
    }

    messageError.textContent = '';



});

 const numberCount = document.getElementById('numberCount');
    const characterLimit = 20000
    numberCount.textContent = 0 + '/' + characterLimit

    function characterCount() {
        const numberValue = message.value.trim();
        numberCount.textContent = numberValue.length + '/' + characterLimit
    }

    message.addEventListener('input', characterCount);

