document.addEventListener('DOMContentLoaded', () => {
    const addProductForm = document.getElementById('add-product-form');

    addProductForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('product-name').value;
        const description = document.getElementById('product-description').value;
        const price = document.getElementById('product-price').value;
        const image = document.getElementById('product-image').files[0];

        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('image', image);

        try {
            const response = await fetch('/api/add-product', {
                method: 'POST',
                body: formData
            });
            const result = await response.json();
            if (result.success) {
                alert('Product added successfully');
                window.location.href = '/index.html';
            } else {
                alert('Failed to add product: ' + result.message);
            }
        } catch (error) {
            console.error('Error adding product:', error);
        }
    });
});
