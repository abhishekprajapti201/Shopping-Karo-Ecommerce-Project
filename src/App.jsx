import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductListing from "./pages/ProductListing";
import ProductDetails from "./pages/ProductDetails";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import AuthCheckMiddleware from "./middleware/AuthCheckMiddleware";
import UserProfile from "./pages/UserProfile";
function Layout() {
  return (
    <>
      <Navbar />

      
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/category/:slug" element={<ProductListing />} />
          <Route path="/product/:slug" element={<ProductDetails />} />
          <Route path="/search/:slug" element={<ProductListing />} />

          
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/profile" element={<UserProfile/>}/>
         
        </Routes>
    

      <Footer />
    </>
  );
}

function App() {
  return <Layout />;
}

export default App;
