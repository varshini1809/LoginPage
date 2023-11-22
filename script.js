
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const rememberCheckbox = document.getElementById('remember');
const loginButton = document.querySelector('.btn');

loginButton.addEventListener('click', (event) => {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const remember = rememberCheckbox.checked;

    // Check if all fields are filled
    if (!username || !password) {
        alert('Please fill in all details!');
        return;
    }

    // Check password strength
    if (password.length < 8) {
        alert('Password must be at least 8 characters long');
        return;
    }

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d!#$%^&*()]).+$/;
    if (!regex.test(password)) {
        alert('Password must contain at least one uppercase letter\n one lowercase letter and one special character');
        return;
    }

    // Check if email ID is valid
    if (!/\S+@\S+\.\S+/.test(username)) {
        alert('Please enter a valid email address');
        return;
    }

    else {
        alert('Login Successful!');
    }
});
