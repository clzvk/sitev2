document.addEventListener('DOMContentLoaded', () => {
    const featuredProducts = document.getElementById('featured-products');
    
    const fetchFeaturedProducts = async () => {
        try {
            const response = await fetch('/api/featured-products');
            const products = await response.json();
            featuredProducts.innerHTML = products.map(product => `
                <div class="product">
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>R$ ${product.price}</p>
                    <button class="add-to-cart" data-product-id="${product.id}">Add to Cart</button>
                </div>
            `).join('');
            addCartEventListeners();
        } catch (error) {
            console.error('Error fetching featured products:', error);
        }
    };

    const addCartEventListeners = () => {
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', addToCart);
        });
    };

    const addToCart = async (e) => {
        const productId = e.target.dataset.productId;
        try {
            const response = await fetch('/api/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ productId })
            });
            const result = await response.json();
            if (result.success) {
                alert('Product added to cart');
            } else {
                alert('Failed to add product to cart');
            }
        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    };

    fetchFeaturedProducts();
});
