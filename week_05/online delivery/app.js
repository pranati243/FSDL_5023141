let cart = [];
const cartCount = document.getElementById('cart-count');
const cartPopup = document.getElementById('cart-popup');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', addToCart);
});

function addToCart(event) {
    const name = event.target.dataset.name;
    const price = parseFloat(event.target.dataset.price);

    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    // Update the cart item count
    cartCount.textContent = cart.length;

    // Update the cart content and total amount
    let cartContent = '';
    let total = 0;

    cart.forEach(item => {
        cartContent += `<p>${item.name} - $${item.price.toFixed(2)}</p>`;
        total += item.price;
    });

    cartItems.innerHTML = cartContent;
    cartTotal.textContent = total.toFixed(2);
}

cartCount.addEventListener('click', () => {
    cartPopup.style.display = cartPopup.style.display === 'block' ? 'none' : 'block';
});

document.getElementById('checkout').addEventListener('click', () => {
    alert('Proceeding to checkout...');
    cart = []; // Clear the cart
    updateCart(); // Update the cart UI
    cartPopup.style.display = 'none'; // Close the cart popup
});
