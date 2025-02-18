let cart = [];
let totalAmount = 0;

// Add product to cart
function addToCart(productName, price) {
    cart.push({ productName, price });
    totalAmount += price;
    updateCart();
}

// Update cart UI
function updateCart() {
    // Update cart count and total amount
    document.getElementById('cart-count').textContent = cart.length;
    document.getElementById('total-amount').textContent = totalAmount;

    // Display cart items
    let cartItemsHtml = '';
    cart.forEach(item => {
        cartItemsHtml += `<p>${item.productName} - ₹${item.price}</p>`;
    });
    document.getElementById('cart-items').innerHTML = cartItemsHtml;
    document.getElementById('cart-total').textContent = totalAmount;
}

// Checkout function
function checkout() {
    alert('Thank you for your purchase!');
    cart = [];
    totalAmount = 0;
    updateCart();
    toggleCartPopup();
}

// Toggle cart popup
function toggleCartPopup() {
    const cartPopup = document.getElementById('cart-popup');
    cartPopup.style.display = cartPopup.style.display === 'block' ? 'none' : 'block';
}

// Filter products based on category
function filterProducts() {
    const category = document.getElementById('category-filter').value;
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        if (category === 'all' || product.getAttribute('data-category') === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
