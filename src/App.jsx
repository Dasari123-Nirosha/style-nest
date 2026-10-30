
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ShopByCategory from "./components/ShopByCategory";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminLayout from "./components/AdminLayout";
import AdminProfile from "./pages/AdminProfile";

import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import OrderHistory from "./pages/OrderHistory";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProducts from "./pages/AdminProducts";

import { AuthProvider } from "./context/AuthContext";
import { WishlistProvider } from "./context/WishlistContext";
import { CartProvider } from "./context/CartContext";
import { OrderProvider } from "./context/OrderContext";
import Footer from "./components/Footer";

import "./App.css";

function Home() {
  return (
    <>
      <Hero />
      <ShopByCategory />

      <section id="collection" className="sn-collection">
        <h2>Our Collection</h2>
        <p>Discover beautiful finds for your everyday style.</p>

        <a href="/products" className="sn-collection-button">
          Explore All Products ↗
        </a>
      </section>
    </>
  );
}

function App() {
  return (
    
    <AuthProvider>
      <OrderProvider>
        <CartProvider>
          <WishlistProvider>
            <BrowserRouter>
              <Routes>
                {/* Customer website */}
                <Route
                  path="/"
                  element={
                    <>
                      <Navbar />
                      <Home />
                       <Footer />
                    </>
                  }
                />

                <Route
                  path="/login"
                  element={
                    <>
                      <Navbar />
                      <Login />
                    </>
                  }
                />

                <Route
                  path="/register"
                  element={
                    <>
                      <Navbar />
                      <Register />
                    </>
                  }
                />

                <Route
                  path="/categories"
                  element={
                    <>
                      <Navbar />
                      <ShopByCategory />
                    </>
                  }
                />

                {/* Shop page */}
                <Route
                  path="/products"
                  element={
                    <>
                      <Navbar />
                      <Products />
                    </>
                  }
                />

                <Route
                  path="/products/:id"
                  element={
                    <ProtectedRoute>
                      <>
                        <Navbar />
                        <ProductDetails />
                      </>
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/wishlist"
                  element={
                    <ProtectedRoute>
                      <>
                        <Navbar />
                        <Wishlist />
                      </>
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/cart"
                  element={
                    <ProtectedRoute>
                      <>
                        <Navbar />
                        <Cart />
                      </>
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/checkout"
                  element={
                    <ProtectedRoute>
                      <>
                        <Navbar />
                        <Checkout />
                      </>
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/order-success"
                  element={
                    <ProtectedRoute>
                      <>
                        <Navbar />
                        <OrderSuccess />
                      </>
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/order-history"
                  element={
                    <ProtectedRoute>
                      <>
                        <Navbar />
                        <OrderHistory />
                      </>
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <>
                        <Navbar />
                        <Profile />
                      </>
                    </ProtectedRoute>
                  }
                />

                {/* Admin website */}
                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute adminOnly>
                      <AdminLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route index element={<AdminDashboard />} />
                  <Route path="products" element={<AdminProducts />} />
                  <Route path="profile" element={<AdminProfile />} />
                </Route>

                {/* Not found */}
                <Route
                  path="*"
                  element={
                    <h1 className="sn-page-placeholder">
                      Page Not Found
                    </h1>
                  }
                />
              </Routes>
            </BrowserRouter>
          </WishlistProvider>
        </CartProvider>
      </OrderProvider>
    </AuthProvider>
  );
}

export default App;
