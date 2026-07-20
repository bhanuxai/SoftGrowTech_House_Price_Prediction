import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Copy, Check, DollarSign, TrendingUp, Sparkles, ShieldCheck, Home, Info } from 'lucide-react';

const PredictionResult = ({ result, inputData, onReset }) => {
  const [copied, setCopied] = useState(false);
  const [displayPrice, setDisplayPrice] = useState(0);

  const targetPrice = result?.predicted_price || 0;

  // Smooth count-up animation
  useEffect(() => {
    if (!targetPrice) return;
    
    let startTimestamp = null;
    const duration = 1200; // 1.2 seconds smooth count up

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Ease out quad formula for smooth decelerating counter
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      const currentVal = Math.floor(easeOutQuad * targetPrice);
      
      setDisplayPrice(currentVal);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayPrice(targetPrice);
      }
    };

    window.requestAnimationFrame(step);
  }, [targetPrice]);

  const handleCopy = () => {
    const formatted = `$${targetPrice.toLocaleString()}`;
    navigator.clipboard.writeText(formatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formattedPrice = `$${displayPrice.toLocaleString()}`;
  const lowerRange = result?.confidence_interval?.lower ? `$${result.confidence_interval.lower.toLocaleString()}` : null;
  const upperRange = result?.confidence_interval?.upper ? `$${result.confidence_interval.upper.toLocaleString()}` : null;

  // Calculate estimated price per room metric
  const aveRooms = parseFloat(inputData?.AveRooms || 1);
  const pricePerRoom = targetPrice > 0 && aveRooms > 0 ? Math.round(targetPrice / aveRooms) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="mt-8 bg-gradient-to-b from-emerald-50/70 via-white to-white rounded-3xl p-6 sm:p-10 shadow-soft-xl border border-emerald-200/80 relative overflow-hidden"
    >
      {/* Background Subtle Accent Pill */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none"></div>

      <div className="relative z-10">
        
        {/* Top Header Badge */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold tracking-wide">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
            <span>Prediction Complete</span>
          </div>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-brand-600 bg-white hover:bg-slate-50 rounded-xl border border-slate-200 shadow-soft-sm transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
            <span>{copied ? 'Copied!' : 'Copy Price'}</span>
          </button>
        </div>

        {/* Main Price Card Display */}
        <div className="text-center py-6 px-4 rounded-2xl bg-white/80 backdrop-blur border border-emerald-100 shadow-inner mb-6">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">
            Predicted House Price
          </span>

          <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-3 font-sans">
            {formattedPrice}
          </div>

          {/* Confidence interval message */}
          {lowerRange && upperRange && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-100">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Estimated Confidence Interval: {lowerRange} – {upperRange}</span>
            </div>
          )}
        </div>

        {/* Model Execution & Context Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-2xl bg-white border border-slate-200/70 shadow-soft-sm">
            <span className="text-[11px] font-semibold text-slate-600 block uppercase mb-1">Price / Room</span>
            <span className="text-lg font-extrabold text-slate-800">
              {pricePerRoom ? `$${pricePerRoom.toLocaleString()}` : 'N/A'}
            </span>
            <span className="text-[10px] text-slate-600 block mt-0.5">Est. per average room</span>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/70 shadow-soft-sm">
            <span className="text-[11px] font-semibold text-slate-600 block uppercase mb-1">Model Origin</span>
            <span className="text-lg font-extrabold text-slate-800">Linear Regression</span>
            <span className="text-[10px] text-slate-600 block mt-0.5">Ordinary Least Squares</span>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/70 shadow-soft-sm">
            <span className="text-[11px] font-semibold text-slate-600 block uppercase mb-1">API Status</span>
            <span className="text-lg font-extrabold text-brand-600">
              {result?.is_mock ? 'Client ML Fallback' : 'Flask API Active'}
            </span>
            <span className="text-[10px] text-slate-600 block mt-0.5">Response &lt; 50ms</span>
          </div>
        </div>

        {/* Informational Footer Note */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 text-xs text-slate-600 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-slate-700">Model Insight:</span> {result?.message || 'This value reflects the statistical expectation computed from the California Housing dataset features.'}
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default PredictionResult;
