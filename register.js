document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');

    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const number = document.getElementById('number').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const cpf = document.getElementById('cpf').value;

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, number, username, password, cpf })
            });
            const result = await response.json();
            if (result.success) {
                window.location.href = '/login.html';
            } else {
                alert('Registration failed: ' + result.message);
            }
        } catch (error) {
            console.error('Error registering:', error);
        }
    });
});
