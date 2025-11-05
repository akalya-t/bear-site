import { motion } from "framer-motion";
import { Menu } from "react-feather";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link as ScrollLink, scroller } from "react-scroll";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Home", type: "route", to: "/" },
    { name: "About", type: "route", to: "/about" },
    { name: "Gallery", type: "route", to: "/gallery" },
    { name: "Form", type: "scroll", to: "form" },
    { name: "Passion", type: "scroll", to: "passion" },
  ];

  const handleNavClick = (link) => {
    setMenuOpen(false);

    if (link.type === "route") {
      navigate(link.to);
    } else if (link.type === "scroll") {
      if (location.pathname !== "/") {
        // Navigate to home first, then scroll smoothly
        navigate("/");
        setTimeout(() => {
          scroller.scrollTo(link.to, {
            duration: 700,
            smooth: "easeInOutQuart",
            offset: -60,
          });
        }, 400);
      } else {
        scroller.scrollTo(link.to, {
          duration: 700,
          smooth: "easeInOutQuart",
          offset: -60,
        });
      }
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-[#f9f6f1]/80 backdrop-blur-sm z-50 shadow-sm"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-16 py-3">
        {/* Logo */}
        <span
          onClick={() => handleNavClick({ type: "route", to: "/" })}
          className="text-xl font-semibold text-[#3c2f2f] cursor-pointer hover:text-[#8b5e3c] transition-colors"
        >
          The Bear 🧸
        </span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-[#3c2f2f] font-medium">
          {navLinks.map((link, i) => {
            const isActive = location.pathname === link.to;
            return (
              <li key={i}>
                <button
                  onClick={() => handleNavClick(link)}
                  className={`relative transition-all duration-300 ${
                    isActive
                      ? "text-[#8b5e3c]"
                      : "hover:text-[#8b5e3c] text-[#3c2f2f]"
                  }`}
                >
                  {link.name}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <Menu className="w-6 h-6 text-[#3c2f2f]" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="md:hidden bg-[#f9f6f1] border-t border-[#d5c2b3]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col items-center gap-4 py-4 text-[#3c2f2f] font-medium">
            {navLinks.map((link, i) => (
              <li key={i}>
                <button
                  onClick={() => handleNavClick(link)}
                  className="hover:text-[#8b5e3c] transition-colors"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default NavBar;
