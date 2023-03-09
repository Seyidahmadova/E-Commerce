import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import OrderComp from "./pages/OrderCompleted/OrderComp";
import Contact from "./pages/Contact/Contact";
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
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
