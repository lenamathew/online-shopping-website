// products.js - Product Management with CRUD operations using LocalStorage

// Initialize default products
function initializeProducts() {
    const products = localStorage.getItem('products');
    if (!products) {
        const defaultProducts = [
            {
                id: 1,
                name: 'Wireless Headphones',
                description: 'Premium noise-cancelling wireless headphones with 30-hour battery life',
                price: 129.99,
                image: 'https://via.placeholder.com/300x200/6200ea/ffffff?text=Headphones'
            },
            {
                id: 2,
                name: 'Smart Watch',
                description: 'Fitness tracking smartwatch with heart rate monitor and GPS',
                price: 249.99,
                image: 'https://via.placeholder.com/300x200/6200ea/ffffff?text=Smart+Watch'
            },
            {
                id: 3,
                name: 'Laptop Backpack',
                description: 'Water-resistant backpack with USB charging port and multiple compartments',
                price: 49.99,
                image: 'https://via.placeholder.com/300x200/6200ea/ffffff?text=Backpack'
            },
            {
                id: 4,
                name: 'Bluetooth Speaker',
                description: 'Portable wireless speaker with 360° sound and 12-hour battery',
                price: 79.99,
                image: 'https://via.placeholder.com/300x200/6200ea/ffffff?text=Speaker'
            },
            {
                id: 5,
                name: 'Wireless Mouse',
                description: 'Ergonomic wireless mouse with precision tracking and long battery life',
                price: 29.99,
                image: 'https://via.placeholder.com/300x200/6200ea/ffffff?text=Mouse'
            },
            {
                id: 6,
                name: 'USB-C Hub',
                description: 'Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader',
                price: 39.99,
                image: 'https://via.placeholder.com/300x200/6200ea/ffffff?text=USB+Hub'
            },
            {
                id: 7,
                name: 'Phone Case',
                description: 'Durable protective case with shock absorption and slim design',
                price: 19.99,
                image: 'https://via.placeholder.com/300x200/6200ea/ffffff?text=Phone+Case'
            },
            {
                id: 8,
                name: 'Desk Lamp',
                description: 'LED desk lamp with adjustable brightness and color temperature',
                price: 34.99,
                image: 'https://via.placeholder.com/300x200/6200ea/ffffff?text=Desk+Lamp'
            }
        ];
        localStorage.setItem('products', JSON.stringify(defaultProducts));
    }
}

// Initialize products on script load
initializeProducts();

// CREATE - Add new product
function addProduct(product) {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    
    // Generate new ID
    const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
    
    const newProduct = {
        id: newId,
        name: product.name,
        description: product.description,
        price: parseFloat(product.price),
        image: product.image
    };
    
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));
    
    return newProduct;
}

// READ - Get all products
function getAllProducts() {
    const products = localStorage.getItem('products');
    return products ? JSON.parse(products) : [];
}

// READ - Get product by ID
function getProductById(id) {
    const products = getAllProducts();
    return products.find(p => p.id === parseInt(id));
}

// UPDATE - Update existing product
function updateProduct(product) {
    const products = getAllProducts();
    const index = products.findIndex(p => p.id === parseInt(product.id));
    
    if (index !== -1) {
        products[index] = {
            id: parseInt(product.id),
            name: product.name,
            description: product.description,
            price: parseFloat(product.price),
            image: product.image
        };
        
        localStorage.setItem('products', JSON.stringify(products));
        return true;
    }
    
    return false;
}

// DELETE - Remove product
function removeProduct(id) {
    const products = getAllProducts();
    const filteredProducts = products.filter(p => p.id !== parseInt(id));
    localStorage.setItem('products', JSON.stringify(filteredProducts));
    return true;
}

// Search products
function searchProducts(query) {
    const products = getAllProducts();
    const searchTerm = query.toLowerCase();
    
    return products.filter(p => 
        p.name.toLowerCase().includes(searchTerm) || 
        p.description.toLowerCase().includes(searchTerm)
    );
}
