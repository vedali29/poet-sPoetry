// script.js

document.getElementById('showCreateAccount').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('loginFormContainer').style.display = 'none';
    document.getElementById('createAccountFormContainer').style.display = 'block';
});

document.getElementById('showLoginForm').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('createAccountFormContainer').style.display = 'none';
    document.getElementById('loginFormContainer').style.display = 'block';
});

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Perform login operation (e.g., send data to the server)
    alert(`Logging in with email: ${email}`);
});

document.getElementById('createAccountForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Perform create account operation (e.g., send data to the server)
    alert(`Creating account for ${name} with email: ${email}`);
});

function previous() {
    window.history.back();
}
