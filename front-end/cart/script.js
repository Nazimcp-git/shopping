document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let totalPrice = 0;

        cart.forEach(item => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <div class="col1">
                    <img src="${item.imageUrl}" alt="${item.name}">
                </div>
                <div class="col2">
                    <h3>${item.name}</h3>
                    <p style="font-size: 15px;">Time is the continued sequence of existence and events that occurs</p>
                    <p style="font-weight: 500; margin-top: 5px; margin-bottom: 10px;">$${item.price}</p>
                    <a href="#" class="remove-product" data-id="${item.id}">Remove Product</a>
                </div>
            `;
            cartItemsContainer.appendChild(productElement);
            totalPrice += item.price;
        });

        totalPriceElement.textContent = `$${totalPrice}`;
    }

    function handleRemoveProduct(e) {
        if (e.target.classList.contains('remove-product')) {
            const productId = e.target.getAttribute('data-id');
            cart = cart.filter(item => item.id != productId);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
        }
    }

    function handleApplyCoupon() {
        // Placeholder for coupon code logic
        alert('Coupon code applied!');
    }

    document.getElementById('apply-coupon').addEventListener('click', handleApplyCoupon);
    cartItemsContainer.addEventListener('click', handleRemoveProduct);

    updateCart();
});
