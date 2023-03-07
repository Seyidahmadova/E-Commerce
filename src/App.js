import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import HeadingBar from "./components/HeadingBar/HeadingBar";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <HeadingBar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
