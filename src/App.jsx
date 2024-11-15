import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Message from "./pages/Message";
import SellersPage from "./pages/SellersPage";

const App = () => {
  return (
    <div>


      {/* <About /> */}
      <BrowserRouter>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Men" element={<Men />} />
            <Route path="/Women" element={<Women />} />
            <Route path="/About" element={<About />} />
            <Route path="/ContactPage" element={<ContactPage />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Message" element={<Message />} />
            <Route path="/Seller" element={<SellersPage />} />
          </Routes>

          <Footer />
      </BrowserRouter >
      </div>

      );
};

      export default App;
