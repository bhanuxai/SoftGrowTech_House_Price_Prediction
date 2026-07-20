import React, { useState, useEffect } from 'react';
import { Home, Cpu, Calculator, Menu, X, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'Prediction', href: '#prediction', icon: Calculator },
    { name: 'How It Works', href: '#how-it-works', icon: Sparkles },
    { name: 'About Model', href: '#about-model', icon: Cpu },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-soft-sm py-3 border-b border-slate-100'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-xl p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-blue-500 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform duration-200">
              <Home className="w-5.5 h-5.5 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight text-slate-900 leading-snug group-hover:text-brand-600 transition-colors">
                House Price <span className="text-brand-600 font-bold">Predictor</span>
              </span>
              <span className="text-[10px] font-medium tracking-wider uppercase text-slate-600">
                SoftGrowTech ML Lab
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/70 p-1.5 rounded-full border border-slate-200/60 shadow-inner">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-700 hover:text-brand-600 hover:bg-white rounded-full transition-all duration-200 shadow-none hover:shadow-soft-sm"
                >
                  <IconComponent className="w-4 h-4 stroke-[2]" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Quick CTA Desktop */}
          <div className="hidden md:flex items-center">
            <a
              href="#prediction"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-full shadow-md shadow-brand-600/20 hover:shadow-lg hover:shadow-brand-600/30 transition-all duration-200 active:scale-95"
            >
              <Calculator className="w-4 h-4" />
              <span>Try Prediction</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2.5 text-slate-700 hover:text-brand-600 hover:bg-slate-100 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 mt-2 animate-in fade-in duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-base font-semibold text-slate-700 hover:text-brand-600 hover:bg-brand-50 rounded-xl transition-colors"
                >
                  <IconComponent className="w-5 h-5 text-brand-600" />
                  <span>{link.name}</span>
                </a>
              );
            })}
            <a
              href="#prediction"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 py-3 text-base font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-xl shadow-md transition-all text-center"
            >
              <Calculator className="w-5 h-5" />
              <span>Try Prediction Now</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
