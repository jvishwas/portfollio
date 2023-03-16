import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Error from "./Componets/Error";
import Nav from "./Componets/Navbar/Nav";
import Footer from "./Componets/Footer/Footer";
import HeroSection from "./Componets/Pages/home/HeroSection";
import Service from "./Componets/Pages/service/Service";
import About from "./Componets/Pages/about/About";
import Contact from "./Componets/Pages/contact/Contact";
import Portfollio from "./Componets/Pages/protfollio/Portfollio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallary from "./Componets/Pages/gallary/Gallary";
import Blogs from "./Componets/Pages/blogs/Blogs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/home" element={<HeroSection />} />
          <Route path="/service" element={<Service />} />
          <Route path="/portfollio" element={<Portfollio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallary" element={<Gallary />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
