"use client";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-black/90 text-white border-t-2 border-t-gray-400">
      {/* Gradient Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-green-900/50 to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand */}
        <div className="text-yellow-400 font-bold text-2xl md:text-3xl drop-shadow-lg">
          Ninja Turtles
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 font-semibold text-white">
          <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link href="/characters" className="hover:text-yellow-400 transition">Characters</Link>
          <Link href="/quiz" className="hover:text-yellow-400 transition">Quiz</Link>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6 text-xl text-white">
          <Link href="#" className="hover:text-green-400 transition"><FaFacebookF /></Link>
          <Link href="#" className="hover:text-green-400 transition"><FaTwitter /></Link>
          <Link href="#" className="hover:text-green-400 transition"><FaInstagram /></Link>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-white/70">
        © 2025 Ninja Turtles Fansite. All Rights Reserved.
      </div>
    </footer>
  );
}
