// Example product data
const products = [
    { id: 1, name: 'Black Shirt', price: 200, description: 'This is a black shirt.', imageUrl: '../img/1f.jpg', additionalImages: ['../img/1b.jpg', '../img/1f.jpg'] },
    { id: 2, name: 'White Shirt', price: 150, description: 'This is a white shirt.', imageUrl: '../img/2f.jpg', additionalImages: ['../img/2b.jpg', '../img/2f.jpg'] },
    { id: 3, name: 'Brown Shirt', price: 150, description: 'This is a brown shirt.', imageUrl: '../img/3f.jpg', additionalImages: ['../img/3b.jpg', '../img/3f.jpg'] },
    { id: 4, name: 'Blue Shirt', price: 150, description: 'This is a blue shirt.', imageUrl: '../img/4f.jpg', additionalImages: ['../img/4b.jpg', '../img/4f.jpg'] },
    // Add more products as needed
];

// Retrieve the product ID from localStorage
const productId = localStorage.getItem('selectedProductId');

// Find the product based on the stored ID
const product = products.find(p => p.id == productId);

if (product) {
    // Populate the product detail page with data
    document.getElementById('product-image').src = product.imageUrl;
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-price').textContent = `$${product.price}`;
    document.getElementById('product-description').textContent = product.description;

    // Load additional images
    const productImages = document.getElementById('product-images');
    product.additionalImages.forEach(imageUrl => {
        const imgElement = document.createElement('div');
        imgElement.classList.add('product');
        imgElement.innerHTML = `<img src="${imageUrl}" alt="${product.name}">`;
        productImages.appendChild(imgElement);
    });

    // Handle Add to Cart button
    document.getElementById('add-to-cart').addEventListener('click', function() {
        const cartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            imageUrl: product.imageUrl
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        alert('Product added to cart!');
    });

} else {
    // Handle the case where no product data is found
    console.log('Product not found.');
}
