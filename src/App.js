import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import OrderComp from "./pages/OrderCompleted/OrderComp";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import Faq from "./pages/Faq/Faq";
import AboutUs from "./pages/aboutUs/aboutUs";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import BlogPage from "./pages/BlogPage/BlogPage";
import SingleBlog from "./pages/SingleBlog/SingleBlog";
import ShopList from "./pages/ShopList/ShopList";
import ProductDetail from "./pages/ProductDetails/ProductDetail";
import CartPage from "./pages/CartPage/CartPage";
import Wishlist from "./pages/WishList/Wishlist";
import Terms from "./pages/Allterms/terms";
import Cookies from "./pages/Allterms/cookies";
import Privacy from "./pages/Allterms/privacy";
// import HeadingBar from "./components/HeadingBar/HeadingBar";
// import NavbarPart from "./components/HeadingBar/Navbar";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <HeadingBar />
        <NavbarPart/> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/order-completed" element={<OrderComp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/not-found" element={<NotFound/>}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/blogs" element={<BlogPage/>}/>
          <Route path="/single-blog" element={<SingleBlog/>}/>
          <Route path="/shop" element={<ShopList/>}/>
          <Route path="/product" element={<ProductDetail/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/wishlist" element={<Wishlist/>}/>
          <Route path="/terms-conditions" element={<Terms/>}/>
          <Route path="/cookies" element={<Cookies/>}/>
          <Route path="/privacy-policy" element={<Privacy/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
