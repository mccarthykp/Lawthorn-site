function validate() {
    const mail = document.getElementById('email').value;

    const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

    if (regx.test(mail)) {
        alert('You have provided a valid email address.');
        return true;
    } else {
        alert('You have provided an invalid email address.')
        return false;
    }
}
