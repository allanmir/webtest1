// Loading Screen
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
    }, 2000);
});

// Cart Functionality
const cartButton = document.getElementById('cart-button');
const cartSidebar = document.getElementById('cart-sidebar');
const cartCount = document.getElementById('cart-count');

let cart = JSON.parse(localStorage.getItem('cart') || '[]');
updateCartCount();

cartButton.addEventListener('click', toggleCart);

function toggleCart() {
    cartSidebar.classList.toggle('cart-open');
    updateCartDisplay();
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = count;
    cartCount.classList.toggle('hidden', count === 0);
}

function updateCartDisplay() {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    
    cartSidebar.innerHTML = `
        <div class="h-full flex flex-col">
            <div class="px-4 py-6 bg-gray-50 border-b">
                <div class="flex items-center justify-between">
                    <h2 class="text-lg font-semibold">Your Cart</h2>
                    <button onclick="toggleCart()" class="p-2 hover:bg-gray-200 rounded-full">
                        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>

            <div class="flex-1 overflow-y-auto px-4 py-6">
                ${cart.length === 0 
                    ? '<div class="text-center py-8"><p class="text-gray-500">Your cart is empty</p></div>'
                    : cart.map(item => `
                        <div class="flex items-center space-x-4 mb-4">
                            <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded">
                            <div class="flex-1">
                                <h3 class="font-medium">${item.name}</h3>
                                <p class="text-gray-600">$${item.price.toFixed(2)}</p>
                            </div>
                            <div class="flex items-center space-x-2">
                                <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})" class="p-1 hover:bg-gray-100 rounded">-</button>
                                <span>${item.quantity}</span>
                                <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})" class="p-1 hover:bg-gray-100 rounded">+</button>
                            </div>
                        </div>
                    `).join('')}
            </div>

            <div class="px-4 py-6 bg-gray-50 border-t">
                <div class="flex justify-between mb-4">
                    <span>Total</span>
                    <span>$${total.toFixed(2)}</span>
                </div>
                <button 
                    onclick="checkout()"
                    class="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 disabled:opacity-50"
                    ${cart.length === 0 ? 'disabled' : ''}
                >
                    Proceed to Checkout
                </button>
            </div>
        </div>
    `;
}

function updateQuantity(id, quantity) {
    if (quantity <= 0) {
        cart = cart.filter(item => item.id !== id);
    } else {
        cart = cart.map(item => 
            item.id === id ? { ...item, quantity } : item
        );
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartDisplay();
}

function checkout() {
    const orderDetails = cart
        .map(item => `${item.quantity}x ${item.name} - $${(item.price * item.quantity).toFixed(2)}`)
        .join('\n');

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const message = `New Order:\n\n${orderDetails}\n\nTotal: $${total.toFixed(2)}`;
    
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
}