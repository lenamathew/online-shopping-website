// auth.js - Authentication and User Management using LocalStorage

// Initialize default users (including admin)
function initializeUsers() {
    const users = localStorage.getItem('users');
    if (!users) {
        const defaultUsers = [
            { id: 1, name: 'Admin', email: 'admin@gmail.com', password: 'admin123' },
            { id: 2, name: 'Test User', email: 'user@gmail.com', password: 'user123' }
        ];
        localStorage.setItem('users', JSON.stringify(defaultUsers));
    }
}

// Initialize users on script load
initializeUsers();

// Register new user (CREATE operation)
function registerUser(name, email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if email already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return { success: false, message: 'Email already exists!' };
    }
    
    // Create new user
    const newUser = {
        id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
        name: name,
        email: email,
        password: password
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    return { success: true, message: 'Registration successful!' };
}

// Login user (READ operation)
function loginUser(email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Find user with matching credentials
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        // Store logged in user (exclude password)
        const loggedInUser = {
            id: user.id,
            name: user.name,
            email: user.email
        };
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
        return true;
    }
    
    return false;
}

// Get logged in user
function getLoggedInUser() {
    const user = localStorage.getItem('loggedInUser');
    return user ? JSON.parse(user) : null;
}

// Check if user is logged in
function isLoggedIn() {
    return getLoggedInUser() !== null;
}

// Logout user
function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'index.html';
}

// Check authentication (redirect to login if not logged in)
function checkAuth() {
    if (!isLoggedIn()) {
        window.location.href = 'index.html';
    }
}

// Check if current user is admin
function isAdmin() {
    const user = getLoggedInUser();
    return user && user.email === 'admin@gmail.com';
}
