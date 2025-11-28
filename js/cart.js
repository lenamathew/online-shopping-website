// cart.js - Shopping Cart Management using LocalStorage

// Get cart key for current user
function getCartKey() {
    const user = getLoggedInUser();
    return user ? `cart_${user.id}` : 'cart_guest';
}

// Get cart items
function getCartItems() {
    const cartKey = getCartKey();
    const cart = localStorage.getItem(cartKey);
    return cart ? JSON.parse(cart) : [];
}

// Add item to cart
function addToCart(productId) {
    const product = getProductById(productId);
    if (!product) {
        return false;
    }
    
    const cart = getCartItems();
    const existingItem = cart.find(item => item.product.id === productId);
    
    if (existingItem) {
        // Increase quantity if product already in cart
        existingItem.quantity += 1;
    } else {
        // Add new item to cart
        cart.push({
            product: product,
            quantity: 1
        });
    }
    
    const cartKey = getCartKey();
    localStorage.setItem(cartKey, JSON.stringify(cart));
    return true;
}

// Remove item from cart
function removeFromCart(productId) {
    const cart = getCartItems();
    const filteredCart = cart.filter(item => item.product.id !== productId);
    
    const cartKey = getCartKey();
    localStorage.setItem(cartKey, JSON.stringify(filteredCart));
    return true;
}

// Update cart item quantity
function updateCartQuantity(productId, change) {
    const cart = getCartItems();
    const item = cart.find(item => item.product.id === productId);
    
    if (item) {
        item.quantity += change;
        
        // Remove item if quantity is 0 or less
        if (item.quantity <= 0) {
            removeFromCart(productId);
            return;
        }
        
        const cartKey = getCartKey();
        localStorage.setItem(cartKey, JSON.stringify(cart));
    }
}

// Get cart item count
function getCartCount() {
    const cart = getCartItems();
    return cart.reduce((total, item) => total + item.quantity, 0);
}

// Get cart total
function getCartTotal() {
    const cart = getCartItems();
    return cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
}

// Clear cart
function clearCart() {
    const cartKey = getCartKey();
    localStorage.removeItem(cartKey);
}

// Update cart count badge in navbar
function updateCartCount() {
    const cartCountElements = document.querySelectorAll('#cartCount');
    const count = getCartCount();
    
    cartCountElements.forEach(element => {
        element.textContent = count;
        if (count > 0) {
            element.classList.remove('d-none');
        } else {
            element.classList.add('d-none');
        }
    });
}
