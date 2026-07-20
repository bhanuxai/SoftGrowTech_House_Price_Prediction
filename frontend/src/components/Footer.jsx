import React from 'react';
import { Home, Github, Linkedin, ArrowUp, Heart, Sparkles } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200/80 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-100">
          
          {/* Brand Col */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center text-white shadow-md shadow-brand-600/20">
                  <Home className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-xl tracking-tight text-slate-900">
                    House Price <span className="text-brand-600">Predictor</span>
                  </span>
                  <span className="text-xs font-semibold text-slate-600 tracking-wide uppercase">
                    SoftGrowTech Machine Learning Internship Project
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-600 max-w-md leading-relaxed">
                An end-to-end Machine Learning web application designed to evaluate California housing parameters using an optimized Linear Regression model with real-time API capabilities.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-slate-600">
              <span>Developed by:</span>
              <span className="text-slate-900 font-bold bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
                Bhanu
              </span>
            </div>
          </div>

          {/* Quick Links & Socials */}
          <div className="md:col-span-6 flex flex-col sm:flex-row items-start sm:items-center justify-between md:justify-end gap-8">
            
            <div className="flex flex-col gap-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                Navigation
              </span>
              <a href="#home" className="text-sm text-slate-600 hover:text-brand-600 transition-colors">Home</a>
              <a href="#prediction" className="text-sm text-slate-600 hover:text-brand-600 transition-colors">Prediction Form</a>
              <a href="#how-it-works" className="text-sm text-slate-600 hover:text-brand-600 transition-colors">How It Works</a>
              <a href="#about-model" className="text-sm text-slate-600 hover:text-brand-600 transition-colors">About Model</a>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Connect & Portfolio
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/bhanuxai/SoftGrowTech_House_Price_Prediction"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-11 h-11 rounded-2xl bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-700 flex items-center justify-center border border-slate-200/80 transition-all duration-200 shadow-soft-sm hover:-translate-y-0.5"
                >
                  <Github className="w-5 h-5 stroke-[2]" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-11 h-11 rounded-2xl bg-slate-100 hover:bg-[#0A66C2] hover:text-white text-slate-700 flex items-center justify-center border border-slate-200/80 transition-all duration-200 shadow-soft-sm hover:-translate-y-0.5"
                >
                  <Linkedin className="w-5 h-5 stroke-[2]" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <div>
            © {new Date().getFullYear()} SoftGrowTech Machine Learning Project. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-brand-50 hover:text-brand-600 text-slate-600 transition-colors font-semibold"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
