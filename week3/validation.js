document.addEventListener('DOMContentLoaded', () => {
    // Login Form Validation
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            let isValid = true;
            const username = document.getElementById('username');
            const password = document.getElementById('password');
            const userErr = document.getElementById('usernameError');
            const passErr = document.getElementById('passwordError');
            const loginErr = document.getElementById('loginError');

            // Reset errors
            userErr.textContent = '';
            passErr.textContent = '';
            loginErr.textContent = '';

            // For login, we only check if fields are empty
            if (username.value.trim() === '') {
                userErr.textContent = 'Username is required';
                isValid = false;
            }

            if (password.value === '') {
                passErr.textContent = 'Password is required';
                isValid = false;
            }

            // If fields are not empty, check for matching credentials
            if (isValid) {
                const storedUser = localStorage.getItem('user');
                const storedPass = localStorage.getItem('pass');

                // Check against stored user OR a default demo user (admin/admin)
                const isStoredMatch = (username.value === storedUser && password.value === storedPass);
                const isDemoMatch = (username.value === 'admin' && password.value === 'admin');

                if (!isStoredMatch && !isDemoMatch) {
                    loginErr.textContent = 'Invalid Credentials';
                    isValid = false;
                }
            }

            if (!isValid) e.preventDefault();
            else {
                alert('Login Successful!');
                window.location.href = 'catalog.html';
                e.preventDefault();
            }
        });
    }

    // Register Form Validation (Keep structural validation here)
    const regForm = document.getElementById('registerForm');
    if (regForm) {
        regForm.addEventListener('submit', (e) => {
            let isValid = true;
            const username = document.getElementById('regUsername');
            const email = document.getElementById('regEmail');
            const password = document.getElementById('regPassword');
            
            const userErr = document.getElementById('usernameError');
            const emailErr = document.getElementById('emailError');
            const passErr = document.getElementById('passwordError');

            // Reset errors
            userErr.textContent = '';
            emailErr.textContent = '';
            passErr.textContent = '';

            if (username.value.trim() === '') {
                userErr.textContent = 'Username is required';
                isValid = false;
            }

            if (email.value.trim() === '') {
                emailErr.textContent = 'Email is required';
                isValid = false;
            } else if (!validateEmail(email.value)) {
                emailErr.textContent = 'Please enter a valid email address';
                isValid = false;
            }

            if (password.value === '') {
                passErr.textContent = 'Password is required';
                isValid = false;
            } else if (password.value.length < 6) {
                passErr.textContent = 'Password must be at least 6 characters';
                isValid = false;
            }

            if (!isValid) e.preventDefault();
            else {
                localStorage.setItem('user', username.value);
                localStorage.setItem('pass', password.value);
                alert('Registration Successful!');
                window.location.href = 'index.html';
                e.preventDefault();
            }
        });
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
