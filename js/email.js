function validate() {
    const mail = document.getElementById('email').value;
    const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

    if (regx.test(mail)) {
        alert('Thanks! You have provided a valid email address.');
        saveToFirebase(mail);
        return true;
    } else {
        alert('Please provide a valid email address.')
        return false;
    }
}


function saveToFirebase(email) {
    let emailObject = {
        email: email
    };

    firebase.database().ref('subscription-entries').push().set(emailObject);
}