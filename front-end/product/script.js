
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


document.addEventListener('DOMContentLoaded', () => {
    const itemCountElement = document.getElementById('item-count');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];


        itemCountElement.textContent = cart.length;

});