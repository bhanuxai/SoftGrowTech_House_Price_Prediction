import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, Database, Layers } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-gradient">
      {/* Background SVG Decoration */}
      <div className="absolute inset-0 pointer-events-none bg-grid-pattern opacity-60 z-0"></div>
      
      {/* Soft Ambient Light Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200/60 text-brand-700 text-xs font-semibold tracking-wide mb-6 shadow-soft-sm">
              <Sparkles className="w-4 h-4 text-brand-600 animate-pulse" />
              <span>Machine Learning Internship Project</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
              Predict House Prices with{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 via-blue-600 to-indigo-600">
                Machine Learning
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed mb-8">
              Estimate house prices instantly using a Linear Regression model trained on real-world housing data.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <a
                href="#prediction"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-brand-600 hover:bg-brand-700 rounded-2xl shadow-soft-xl hover:shadow-glow-blue transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Try Prediction</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </a>

              <a
                href="#about-model"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-slate-700 hover:text-brand-600 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-2xl shadow-soft-sm hover:shadow-md transition-all duration-200"
              >
                <span>Explore Model</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-slate-200/70 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-bold text-slate-900">20.6k+</span>
                <span className="text-xs text-slate-500 font-medium">CA Dataset Samples</span>
              </div>
              <div className="flex flex-col items-center lg:items-start border-x border-slate-200 px-4">
                <span className="text-2xl font-bold text-slate-900">8</span>
                <span className="text-xs text-slate-500 font-medium">Key Housing Features</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-bold text-brand-600">&lt; 50ms</span>
                <span className="text-xs text-slate-500 font-medium">Instant Inference</span>
              </div>
            </div>
          </motion.div>

          {/* Right Vector Illustration / Interactive Graphic Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Main Visual Container Card */}
            <div className="relative mx-auto max-w-md lg:max-w-none bg-white rounded-3xl p-6 sm:p-8 shadow-soft-xl border border-slate-200/80 backdrop-blur-xl">
              
              {/* Top Graphic Banner */}
              <div className="w-full h-52 sm:h-64 rounded-2xl bg-gradient-to-br from-brand-50 via-slate-50 to-blue-50/80 p-6 flex flex-col justify-between relative overflow-hidden border border-brand-100/60 mb-6">
                
                {/* Clean House Vector Illustration */}
                <div className="absolute right-4 bottom-2 opacity-90">
                  <svg width="220" height="170" viewBox="0 0 220 170" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Sun/Glow */}
                    <circle cx="170" cy="45" r="24" fill="#3B82F6" fillOpacity="0.15" />
                    <circle cx="170" cy="45" r="14" fill="#2563EB" fillOpacity="0.25" />
                    
                    {/* Modern House Base Structure */}
                    <path d="M30 160V85L110 30L190 85V160H30Z" fill="white" stroke="#2563EB" strokeWidth="3.5" strokeLinejoin="round" />
                    
                    {/* Roof Accent */}
                    <path d="M20 90L110 23L200 90" stroke="#1D4ED8" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                    
                    {/* Front Door */}
                    <rect x="95" y="110" width="30" height="50" rx="4" fill="#EFF6FF" stroke="#2563EB" strokeWidth="2.5" />
                    <circle cx="118" cy="138" r="2.5" fill="#1D4ED8" />

                    {/* Window 1 */}
                    <rect x="50" y="95" width="28" height="28" rx="4" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" />
                    <line x1="64" y1="95" x2="64" y2="123" stroke="#3B82F6" strokeWidth="1.5" />
                    <line x1="50" y1="109" x2="78" y2="109" stroke="#3B82F6" strokeWidth="1.5" />

                    {/* Window 2 */}
                    <rect x="142" y="95" width="28" height="28" rx="4" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" />
                    <line x1="156" y1="95" x2="156" y2="123" stroke="#3B82F6" strokeWidth="1.5" />
                    <line x1="142" y1="109" x2="170" y2="109" stroke="#3B82F6" strokeWidth="1.5" />

                    {/* Tree Decorative */}
                    <path d="M12 160C12 145 22 135 22 135C22 135 32 145 32 160H12Z" fill="#10B981" fillOpacity="0.4" />
                  </svg>
                </div>

                {/* Graph Analytics Overlay Pill */}
                <div className="self-start inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur shadow-sm border border-slate-200/80">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-bold text-slate-800">Linear Regression Fitted</span>
                </div>

                {/* Simulated Price Preview Overlay */}
                <div className="relative z-10 self-start mt-auto bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-200/90 shadow-soft-sm">
                  <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider block">Real Estate Valuation</span>
                  <span className="text-2xl font-extrabold text-slate-900">$425,800</span>
                </div>
              </div>

              {/* Feature Highlights Grid below graphic */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-brand-100 text-brand-700">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">CA Dataset</h4>
                    <p className="text-[11px] text-slate-500">8 Housing Metrics</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">Scikit-Learn</h4>
                    <p className="text-[11px] text-slate-500">OLS Algorithm</p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
