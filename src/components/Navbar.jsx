import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed w-full z-40 top-0 transition-all ${scrolled ? "bg-white/95 shadow-md" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold">BD</div>
          <div>
            <h1 className="text-lg font-bold text-slate-800">BancoDemo - QA</h1>
            <p className="text-xs text-slate-500">Lecciones & Ajustes</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <ScrollLink to="hero" smooth offset={-80} className="cursor-pointer text-gray-700 hover:text-blue-600">Inicio</ScrollLink>
          <ScrollLink to="features" smooth offset={-80} className="cursor-pointer text-gray-700 hover:text-blue-600">Resultados</ScrollLink>
          <ScrollLink to="architecture" smooth offset={-80} className="cursor-pointer text-gray-700 hover:text-blue-600">Análisis</ScrollLink>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="menu" className="p-2 rounded-md bg-white/60 shadow">
            {open ? <HiOutlineX size={20} /> : <HiOutlineMenu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white/95 shadow-md">
          <div className="px-6 py-4 flex flex-col gap-3">
            <ScrollLink to="hero" smooth offset={-80} onClick={() => setOpen(false)} className="cursor-pointer">Inicio</ScrollLink>
            <ScrollLink to="features" smooth offset={-80} onClick={() => setOpen(false)} className="cursor-pointer">Resultados</ScrollLink>
            <ScrollLink to="architecture" smooth offset={-80} onClick={() => setOpen(false)} className="cursor-pointer">Análisis</ScrollLink>
          </div>
        </div>
      )}
    </header>
  );
}
