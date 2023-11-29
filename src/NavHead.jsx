import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {Link } from "react-router-dom"
function NavHead() {
  const navRef = useRef();
  const aboutRef = useRef();
  const navigate = useNavigate();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const closeNavbar = () => {
    if (navRef.current.classList.contains("responsive_nav")) {
      showNavbar();
    }
  };

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigateToWorks = () => {
    navigate("/works");
    closeNavbar();
  };

  return (
    <header className="relative">
      <h3 className="logo">Naresh Eswar</h3>
      <nav ref={navRef} className="subfont">
        <a href="#home" onClick={closeNavbar}>
          Home
        </a>
        <a href="" onClick={closeNavbar}>
        <Link to="/gallery">Gallary</Link>
        </a>
        <a href="#about" onClick={() => { closeNavbar(); scrollToSection(aboutRef);}}>
          About
        </a>
        {/* Use navigateToWorks instead of closeNavbar for the Portfolio link */}
        <a onClick={navigateToWorks}>
		<Link to="/works">Works</Link>
        </a>
        <a href="#contact" onClick={closeNavbar}>
          Contact
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <div>
        <button className="contact border border-black-4 ">
          <a href="#youtube">Youtube</a>
        </button>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}

export default NavHead;
