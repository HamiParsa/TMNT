"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes, FaHome, FaUsers, FaQuestionCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { GiTurtleShell } from "react-icons/gi";
import { FcAbout } from "react-icons/fc";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Link And Icons
  const navLinks = [
    { name: "Home", href: "/", icon: <FaHome /> },
    { name: "Characters", href: "/characters", icon: <FaUsers /> },
    { name: "Quiz", href: "/quiz", icon: <FaQuestionCircle /> },
    { name: "About", href: "/about", icon: <FcAbout /> },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex items-center gap-2 text-yellow-400 font-bold text-2xl md:text-3xl drop-shadow-lg">
          <GiTurtleShell /> Ninja Turtles
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-semibold text-lg text-white">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-yellow-400 transition flex items-center gap-2"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden bg-black/90 overflow-hidden"
          >
            <div className="flex flex-col  items-start ml-5 gap-6 py-6 text-white font-semibold">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-yellow-400 transition flex items-center gap-3 text-xl"
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
