document.addEventListener('DOMContentLoaded', () => {
    const checkoutButton = document.getElementById('checkout');

    checkoutButton.addEventListener('click', async (e) => {
        try {
            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const result = await response.json();
            if (result.success) {
                alert('Checkout successful');
                window.location.href = '/index.html';
            } else {
                alert('Checkout failed: ' + result.message);
            }
        } catch (error) {
            console.error('Error during checkout:', error);
        }
    });
});
