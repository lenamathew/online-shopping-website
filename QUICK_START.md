# 🚀 Quick Start Guide - ShopEase

## Step 1: Open the Project
Simply open `index.html` in your web browser (Chrome recommended).

## Step 2: Login
Use one of these demo accounts:

### Admin Account (Full Access)
- **Email:** admin@gmail.com
- **Password:** admin123

### Regular User Account
- **Email:** user@gmail.com
- **Password:** user123

## Step 3: Explore Features

### As Admin (admin@gmail.com):
1. ✅ View all products on Shop page
2. ✅ Add new products
3. ✅ Edit existing products
4. ✅ Delete products
5. ✅ Add items to cart
6. ✅ Checkout

### As Regular User (user@gmail.com):
1. ✅ View all products
2. ✅ Search products
3. ✅ Add to cart
4. ✅ Manage cart (update quantities, remove items)
5. ✅ Checkout

## Step 4: Test Registration
1. Click "Register Now" on login page
2. Fill in the form:
   - Full Name: Your Name
   - Email: yourname@email.com
   - Password: minimum 6 characters
   - Confirm Password: must match
   - Check terms and conditions
3. Click Register
4. Login with your new account!

## 📝 Features to Test

### ✅ CRUD Operations on Products (Admin Only)
- **Create:** Add Product page → Fill form → Submit
- **Read:** Shop page shows all products
- **Update:** Shop page → Click Edit on any product → Modify → Save
- **Delete:** Shop page → Click Delete on any product → Confirm

### ✅ Shopping Cart
- **Add:** Click "Add to Cart" on any product
- **Update:** Cart page → Use +/- buttons to change quantity
- **Delete:** Cart page → Click Remove button
- **Checkout:** Cart page → Click "Proceed to Checkout"

### ✅ Search
- Go to Shop page
- Use search box to filter products by name or description

## 🎯 Testing Checklist

- [ ] Login with admin account
- [ ] Login with regular user account
- [ ] Register new account
- [ ] Add a new product (admin)
- [ ] Edit a product (admin)
- [ ] Delete a product (admin)
- [ ] Search for products
- [ ] Add items to cart
- [ ] Update cart quantities
- [ ] Remove items from cart
- [ ] Complete checkout
- [ ] Logout and login again
- [ ] Test on mobile (responsive design)

## 💡 Tips

1. **Cart is User-Specific:** Each logged-in user has their own cart
2. **Data Persists:** All data is stored in LocalStorage (survives page refresh)
3. **Admin Features:** Only visible when logged in as admin
4. **Mobile Responsive:** Try resizing your browser or use on mobile device
5. **Clear Data:** Open browser DevTools → Application → LocalStorage → Clear to reset

## 🔧 Troubleshooting

**Can't see products?**
- Refresh the page to initialize default products

**Can't login?**
- Make sure you're using the correct email and password
- Check browser console for errors

**Cart not working?**
- Make sure you're logged in
- Check LocalStorage is enabled in browser

**Admin features not showing?**
- Login with admin@gmail.com account

## 📱 Browser DevTools

To inspect LocalStorage:
1. Press F12 (Windows) or Cmd+Option+I (Mac)
2. Go to "Application" tab
3. Expand "Local Storage"
4. Click on your site URL
5. See stored data: users, products, cart, loggedInUser

## 🌐 Deployment

To host on GitHub Pages:
1. Create GitHub repository
2. Push all files
3. Go to Settings → Pages
4. Select main branch
5. Your site will be live at: `https://username.github.io/repository-name`

## ✨ Enjoy Shopping!

Explore all features and have fun testing the complete CRUD operations!
