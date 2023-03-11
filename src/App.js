import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import OrderComp from "./pages/OrderCompleted/OrderComp";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import Faq from "./pages/Faq/Faq";
import AboutUs from "./pages/aboutUs/aboutUs";
import Login from "./pages/Login/Login";
import HeadingBar from "./components/HeadingBar/HeadingBar";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <HeadingBar /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/order-completed" element={<OrderComp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/not-found" element={<NotFound/>}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/about" element={<AboutUs/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
