document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Product 1', price: 100, description: 'Description for Product 1', imageUrl: 'https://via.placeholder.com/200' },
        { id: 2, name: 'Product 2', price: 200, description: 'Description for Product 2', imageUrl: 'https://via.placeholder.com/200' },
        { id: 3, name: 'Product 3', price: 300, description: 'Description for Product 3', imageUrl: 'https://via.placeholder.com/200' },
    ];

    const productListLink = document.getElementById('product-list-link');
    const cartLink = document.getElementById('cart-link');
    const content = document.getElementById('content');
    const cartCount = document.getElementById('cart-count');

    function saveCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function getCart() {
        return JSON.parse(localStorage.getItem('cart')) || [];
    }

    function updateCartCount() {
        const cart = getCart();
        cartCount.textContent = cart.length;
    }

    function showProductList() {
        content.innerHTML = '<h2>Product List</h2>';
        const gridContainer = document.createElement('div');
        gridContainer.className = 'grid-container';

        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <img src="${product.imageUrl}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
                <button data-id="${product.id}">View Details</button>
            `;
            gridContainer.appendChild(productDiv);
        });

        content.appendChild(gridContainer);

        document.querySelectorAll('.product button').forEach(button => {
            button.addEventListener('click', showProductDetails);
        });
    }

    function showProductDetails(event) {
        const productId = parseInt(event.target.dataset.id);
        const product = products.find(p => p.id === productId);

        content.innerHTML = `
            <div class="product-details">
                <img src="${product.imageUrl}" alt="${product.name}">
                <div class="product-info">
                    <h2>${product.name}</h2>
                    <p>Price: $${product.price}</p>
                    <p>${product.description}</p>
                    <button id="add-to-cart" data-id="${product.id}">Add to Cart</button>
                    <button id="back-to-list">Back to Product List</button>
                </div>
            </div>
        `;

        document.getElementById('add-to-cart').addEventListener('click', addToCart);
        document.getElementById('back-to-list').addEventListener('click', showProductList);
    }

    function addToCart(event) {
        const productId = parseInt(event.target.dataset.id);
        const product = products.find(p => p.id === productId);
        const cart = getCart();
        cart.push(product);
        saveCart(cart);
        updateCartCount();
    }

    function showCart() {
        const cart = getCart();
        content.innerHTML = '<h2>Cart</h2>';
        if (cart.length === 0) {
            content.innerHTML += '<p>Your cart is empty.</p>';
            return;
        }

        const gridContainer = document.createElement('div');
        gridContainer.className = 'grid-container';

        cart.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'cart-item';
            productDiv.innerHTML = `
                <img src="${product.imageUrl}" alt="${product.name}">
                <div class="cart-item-info">
                    <h3>${product.name}</h3>
                    <p>Price: $${product.price}</p>
                </div>
                <button class="cart-item-remove" data-id="${product.id}">Remove</button>
            `;
            gridContainer.appendChild(productDiv);
        });

        content.appendChild(gridContainer);

        document.querySelectorAll('.cart-item-remove').forEach(button => {
            button.addEventListener('click', removeFromCart);
        });

        const clearCartButton = document.createElement('button');
        clearCartButton.textContent = 'Clear Cart';
        clearCartButton.id = 'clear-cart';
        clearCartButton.addEventListener('click', clearCart);
        content.appendChild(clearCartButton);
    }

    function removeFromCart(event) {
        const productId = parseInt(event.target.dataset.id);
        let cart = getCart();
        cart = cart.filter(product => product.id !== productId);
        saveCart(cart);
        updateCartCount();
        showCart();
    }

    function clearCart() {
        localStorage.removeItem('cart');
        updateCartCount();
        showCart();
    }

    productListLink.addEventListener('click', (event) => {
        event.preventDefault();
        showProductList();
    });

    cartLink.addEventListener('click', (event) => {
        event.preventDefault();
        showCart();
    });

    // Initial load
    updateCartCount();
    showProductList();
});
