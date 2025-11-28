# 🛒 ShopEase - Dynamic Online Shopping Website

A fully functional, responsive online shopping website built with **Bootstrap 5**, **Material Design**, **JavaScript**, and **LocalStorage** as a database.

## 📋 Project Overview

**Submission Date:** November 28, 2025  
**Submission Time:** 1:00 PM  

This project is a complete e-commerce web application featuring user authentication, product management, shopping cart functionality, and full CRUD operations using LocalStorage.

---

## 🚀 Features

✅ **User Authentication**
- Login and Registration system
- Session management with LocalStorage
- Admin and regular user roles

✅ **Product Management (CRUD Operations)**
- **Create:** Add new products (Admin only)
- **Read:** View all products dynamically
- **Update:** Edit existing products (Admin only)
- **Delete:** Remove products (Admin only)

✅ **Shopping Cart**
- Add products to cart
- Update item quantities
- Remove items from cart
- Calculate totals with tax and shipping
- Checkout functionality

✅ **Responsive Design**
- Mobile-first approach
- Bootstrap 5 grid system
- Works on all screen sizes

---

## 📁 Project Structure

```
Online_shopping_website/
├── index.html              # Login Page
├── register.html           # Registration Page
├── home.html              # Home/Landing Page
├── shop.html              # Product Listing Page
├── add-product.html       # Add Product Page (Admin)
├── edit-product.html      # Edit Product Page (Admin)
├── cart.html              # Shopping Cart Page
├── css/
│   └── style.css          # Custom CSS with Material Design
├── js/
│   ├── auth.js            # Authentication logic
│   ├── products.js        # Product CRUD operations
│   └── cart.js            # Shopping cart functionality
├── images/                # Image assets folder
└── README.md             # Project documentation
```

---

## 🎨 Technologies Used

### 1. **Bootstrap 5**
Bootstrap components used throughout the project:
- **Navbar** - Responsive navigation menu with hamburger toggle
- **Grid System** - 12-column responsive layout (col-md-4, col-lg-3, etc.)
- **Cards** - Product cards, feature cards, category cards
- **Forms** - Login, registration, and product forms
- **Buttons** - Primary, secondary, success, danger, warning buttons
- **Alerts** - Success/error messages
- **Input Groups** - Quantity controls in cart
- **Badges** - Cart item count indicator
- **Modal** - (Can be added for confirmations)
- **Utilities** - Spacing (mb-3, p-4), display (d-flex), text (text-center)

### 2. **Material Design Components**
At least 3 Material Design elements used:
- ✅ **Material Icons** - Icons throughout the UI (shopping_cart, person, edit, delete, etc.)
- ✅ **Material Cards** - Elevated cards with shadows and hover effects
- ✅ **Material Buttons** - Raised buttons with ripple effects
- ✅ **Material Form Inputs** - Styled input fields with focus effects
- ✅ **Material Shadows** - Depth and elevation using box-shadows
- ✅ **Material Color Palette** - Primary color (#6200ea), gradients

### 3. **JavaScript**
Core functionality implemented:
- Form validation (email format, password length, matching passwords)
- DOM manipulation (dynamic rendering)
- Event handling (clicks, form submissions)
- LocalStorage operations (CRUD)
- Data filtering and searching
- User authentication and session management

### 4. **LocalStorage (Database)**
LocalStorage is used to store:
- **Users** - User accounts with credentials
- **Products** - Product inventory
- **Cart** - Shopping cart items per user
- **Session** - Logged-in user information

---

## 📄 Page Descriptions

### 1. **Login Page (index.html)**
**Purpose:** User authentication to access the shopping site.

**Features:**
- Material Design login form
- Email and password validation
- LocalStorage authentication
- Remember me checkbox
- Redirect to home page on successful login
- Demo credentials displayed

**LocalStorage Operations:**
- READ users from LocalStorage
- Match email + password
- Store logged-in user session

**Demo Credentials:**
- **Admin:** admin@gmail.com / admin123
- **User:** user@gmail.com / user123

---

### 2. **Registration Page (register.html)**
**Purpose:** Allow new users to create an account.

**Features:**
- Material Design form with multiple fields
- Real-time validation:
  - Email format validation
  - Password minimum length (6 characters)
  - Password confirmation match
  - Terms and conditions checkbox
- Duplicate email prevention
- Success message with redirect to login

**LocalStorage Operations:**
- CREATE new user in LocalStorage
- Check for existing email (READ)
- Store user with unique ID

---

### 3. **Home Page (home.html)**
**Purpose:** Landing page after successful login.

**Features:**
- Responsive Bootstrap navbar
- Hero section with CTA button
- Features section with Material cards
- Category cards
- User greeting display
- Admin-only "Add Product" link
- Cart count badge
- Login status detection

**Navigation Links:**
- Home | Shop | Add Product (Admin) | Cart | Logout

**LocalStorage Operations:**
- READ logged-in user
- READ cart count
- Check admin status

---

### 4. **Product Listing Page (shop.html)**
**Purpose:** Display all products dynamically (READ operation).

**Features:**
- Bootstrap grid layout (responsive)
- Material Design product cards
  - Product image
  - Name
  - Description
  - Price
  - Add to Cart button
- Admin controls (Edit & Delete buttons)
- Search functionality
- Product count display
- Empty state message

**LocalStorage Operations:**
- **READ** - Load all products from LocalStorage
- **DELETE** - Remove product (Admin only)
- Add to cart functionality

**Dynamic Rendering:**
Products are rendered using JavaScript loops and DOM manipulation.

---

### 5. **Add Product Page (add-product.html)**
**Purpose:** Admin can add new products (CREATE operation).

**Features:**
- Material Design form inputs
- Live preview of product
- Form validation:
  - Required fields check
  - Price validation (> 0)
  - Image URL validation
- Admin access control
- Success message with redirect

**LocalStorage Operations:**
- **CREATE** - Add new product to LocalStorage
- Generate unique product ID
- Store product object with all details

**Admin Only:**
Redirects non-admin users to shop page.

---

### 6. **Edit Product Page (edit-product.html)**
**Purpose:** Admin can update existing products (UPDATE operation).

**Features:**
- Pre-filled form with current product data
- Live preview
- Form validation
- Admin access control
- Success message with redirect

**LocalStorage Operations:**
- **READ** - Get product by ID from URL parameter
- **UPDATE** - Update product in LocalStorage
- Preserve product ID during update

**URL Parameter:**
Receives product ID via query string: `?id=1`

---

### 7. **Shopping Cart Page (cart.html)**
**Purpose:** View and manage shopping cart items.

**Features:**
- Display cart items with:
  - Product image
  - Name and description
  - Unit price
  - Quantity controls (+/-)
  - Subtotal per item
  - Remove button
- Order summary card:
  - Subtotal
  - Tax calculation (10%)
  - Shipping fee ($5)
  - Total amount
- Empty cart message
- Checkout button
- Continue shopping link

**LocalStorage Operations:**
- **READ** - Get cart items
- **UPDATE** - Change item quantities
- **DELETE** - Remove items from cart
- **DELETE ALL** - Clear cart on checkout

**User-Specific Carts:**
Each user has their own cart stored as `cart_userId`.

---

## 🔄 CRUD Operations Summary

### **Users (Authentication)**
| Operation | Function | Description |
|-----------|----------|-------------|
| **CREATE** | `registerUser()` | Add new user to LocalStorage |
| **READ** | `loginUser()` | Find and authenticate user |
| **READ** | `getLoggedInUser()` | Get current session |
| **DELETE** | `logout()` | Remove session |

### **Products**
| Operation | Function | File | Description |
|-----------|----------|------|-------------|
| **CREATE** | `addProduct()` | add-product.html | Admin adds new product |
| **READ** | `getAllProducts()` | shop.html | Display all products |
| **READ** | `getProductById()` | edit-product.html | Get single product |
| **UPDATE** | `updateProduct()` | edit-product.html | Admin updates product |
| **DELETE** | `removeProduct()` | shop.html | Admin deletes product |

### **Shopping Cart**
| Operation | Function | File | Description |
|-----------|----------|------|-------------|
| **CREATE** | `addToCart()` | shop.html | Add item to cart |
| **READ** | `getCartItems()` | cart.html | Get all cart items |
| **UPDATE** | `updateCartQuantity()` | cart.html | Change quantity |
| **DELETE** | `removeFromCart()` | cart.html | Remove single item |
| **DELETE** | `clearCart()` | cart.html | Empty cart (checkout) |

---

## 🎯 Bootstrap 5 Elements Used

1. **Navbar** - Responsive navigation with collapse
2. **Grid System** - Container, row, col-* classes
3. **Cards** - Product cards, info cards, cart cards
4. **Buttons** - btn, btn-primary, btn-success, btn-danger, etc.
5. **Forms** - form-control, form-label, form-check
6. **Alerts** - alert, alert-success, alert-danger
7. **Badges** - Cart count indicator
8. **Input Groups** - Quantity controls
9. **Utilities** - Spacing, display, flex, text alignment
10. **Shadows** - shadow-sm, shadow, shadow-lg

---

## 🎨 Material Design Components Used

1. **Material Icons** - Icon font for UI elements
2. **Material Cards** - Elevated cards with depth
3. **Material Buttons** - Raised buttons with ripple
4. **Material Inputs** - Floating labels and focus states
5. **Material Shadows** - Box-shadow depth levels
6. **Material Colors** - Primary color palette (#6200ea)
7. **Material Typography** - Roboto font family

---

## 🔐 Login & Registration Workflow

### **Registration Flow:**
```
User fills form → Validate inputs → Check email exists? 
   ↓ No                              ↓ Yes
Create user → Store in LocalStorage → Show error
   ↓
Success message → Redirect to Login
```

### **Login Flow:**
```
User enters credentials → Validate inputs → Check credentials?
   ↓ Valid                                    ↓ Invalid
Store session → Redirect to Home → Show error message
```

### **Session Management:**
- Logged-in user stored as `loggedInUser` in LocalStorage
- All protected pages check authentication on load
- Logout removes session and redirects to login

### **Admin Access:**
- Admin email: `admin@gmail.com`
- Admin can access Add/Edit/Delete product features
- Regular users only see Add to Cart buttons

---

## 📊 LocalStorage Data Structure

### **Users Array:**
```javascript
[
  {
    id: 1,
    name: "Admin",
    email: "admin@gmail.com",
    password: "admin123"
  },
  {
    id: 2,
    name: "John Doe",
    email: "john@gmail.com",
    password: "password123"
  }
]
```

### **Products Array:**
```javascript
[
  {
    id: 1,
    name: "Wireless Headphones",
    description: "Premium noise-cancelling wireless headphones",
    price: 129.99,
    image: "https://example.com/image.jpg"
  }
]
```

### **Cart Array (per user):**
```javascript
[
  {
    product: { id: 1, name: "...", price: 129.99, ... },
    quantity: 2
  }
]
```

### **Logged In User:**
```javascript
{
  id: 1,
  name: "Admin",
  email: "admin@gmail.com"
}
```

---

## 🛠️ How to Run the Project

### **Option 1: Direct Open**
1. Download/clone the project
2. Open `index.html` in any modern web browser
3. Use demo credentials to login

### **Option 2: Live Server (Recommended)**
1. Install VS Code
2. Install "Live Server" extension
3. Right-click `index.html`
4. Select "Open with Live Server"

### **Option 3: Python HTTP Server**
```bash
cd Online_shopping_website
python -m http.server 8000
```
Visit: http://localhost:8000

---

## 👤 Default User Accounts

| Role | Email | Password |
|------|-------|----------|
| **Admin** | admin@gmail.com | admin123 |
| **User** | user@gmail.com | user123 |

---

## ✅ Assignment Requirements Checklist

- [x] Bootstrap 5 for layout and responsive design
- [x] At least 3 Material Design components
- [x] Login and Registration pages with validation
- [x] LocalStorage for all database operations
- [x] Dynamic product rendering with JavaScript
- [x] Home Page
- [x] Login Page
- [x] Registration Page
- [x] Product Listing Page
- [x] Add Product Page (Admin)
- [x] Edit Product Page (Admin)
- [x] Cart Page
- [x] Full CRUD operations on Users, Products, and Cart
- [x] Form validation
- [x] Authentication system
- [x] Responsive design
- [x] README documentation

---

## 🎯 Key Features Implemented

1. ✅ **Authentication System** - Login/Registration with session management
2. ✅ **Role-Based Access** - Admin vs Regular User permissions
3. ✅ **Product CRUD** - Full Create, Read, Update, Delete operations
4. ✅ **Shopping Cart** - Add, update quantity, remove items
5. ✅ **Search Functionality** - Real-time product search
6. ✅ **Form Validation** - Client-side validation for all forms
7. ✅ **Responsive Design** - Mobile-friendly layout
8. ✅ **Material Design** - Modern UI/UX with Material components
9. ✅ **LocalStorage Database** - Persistent data storage
10. ✅ **Dynamic Rendering** - JavaScript DOM manipulation

---

## 🌐 Browser Compatibility

- ✅ Chrome (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

**Note:** LocalStorage must be enabled in browser settings.

---

## 📱 Responsive Breakpoints

- **Mobile:** < 576px
- **Tablet:** 576px - 768px
- **Desktop:** 768px - 992px
- **Large Desktop:** > 992px

---

## 🔒 Security Notes

**Important:** This is a demonstration project using client-side storage.

**For production use:**
- Use backend server (Node.js, PHP, etc.)
- Implement proper password hashing
- Use JWT tokens for authentication
- Store data in real database (MySQL, MongoDB)
- Add HTTPS encryption
- Implement CSRF protection

---

## 🚀 Future Enhancements

Potential improvements:
- Backend API integration
- Payment gateway integration
- Order history tracking
- Product categories and filters
- Product reviews and ratings
- Wishlist functionality
- Email notifications
- Image upload functionality
- Advanced search with filters
- Pagination for products

---

## 📝 License

This project is created for educational purposes as part of an assignment.

---

## 👨‍💻 Author

**Course:** Web Development  
**Assignment:** Dynamic Online Shopping Website  
**Submission Date:** November 28, 2025  

---

## 🙏 Acknowledgments

- Bootstrap 5 Documentation
- Material Design Guidelines
- MDN Web Docs
- Google Fonts & Material Icons

---

## 📧 Support

For any issues or questions, please refer to the code comments or check the browser console for debugging information.

---

**Happy Shopping! 🛍️**
