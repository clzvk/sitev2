document.addEventListener('DOMContentLoaded', () => {
    const fetchUserDetails = async () => {
        try {
            const response = await fetch('/api/user-details');
            const userDetails = await response.json();
            document.getElementById('user-name').innerText = userDetails.name;
            document.getElementById('user-email').innerText = userDetails.email;
            document.getElementById('user-cpf').innerText = userDetails.cpf;
            document.getElementById('user-number').innerText = userDetails.number;
        } catch (error) {
            console.error('Error fetching user details:', error);
        }
    };

    fetchUserDetails();
});
