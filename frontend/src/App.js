import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Payment from "./pages/Payment";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
