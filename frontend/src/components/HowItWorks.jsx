import React from 'react';
import { motion } from 'framer-motion';
import { FormInput, Cpu, Calculator, Award, ArrowRight } from 'lucide-react';

const steps = [
  {
    stepNumber: '01',
    title: 'Enter House Details',
    description: 'Input the 8 block parameters such as Median Income, House Age, Rooms, Bedrooms, and Location Coordinates.',
    icon: FormInput,
    badgeColor: 'bg-blue-50 text-brand-600 border-brand-200',
    iconBg: 'bg-brand-600 text-white',
  },
  {
    stepNumber: '02',
    title: 'Machine Learning Processing',
    description: 'The dataset values are formatted and validated before feeding into the trained Ordinary Least Squares model matrix.',
    icon: Cpu,
    badgeColor: 'bg-indigo-50 text-indigo-600 border-indigo-200',
    iconBg: 'bg-indigo-600 text-white',
  },
  {
    stepNumber: '03',
    title: 'Linear Regression Prediction',
    description: 'The regression equation y = wᵀx + b evaluates the weighted dot product of input features to derive median house value.',
    icon: Calculator,
    badgeColor: 'bg-violet-50 text-violet-600 border-violet-200',
    iconBg: 'bg-violet-600 text-white',
  },
  {
    stepNumber: '04',
    title: 'Display Estimated Price',
    description: 'The predicted house price is rendered instantly with count-up animations, confidence ranges, and price per room metrics.',
    icon: Award,
    badgeColor: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    iconBg: 'bg-emerald-600 text-white',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-slate-50 border-t border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200/60 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>4-Step Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How The Model Works
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            A seamless pipeline transforming raw real estate attributes into reliable price estimates.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.stepNumber}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-6 shadow-soft-sm hover:shadow-soft-md border border-slate-200/80 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
              >
                <div>
                  {/* Top Step Number Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl ${step.iconBg} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200`}>
                      <IconComponent className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className={`px-2.5 py-1 rounded-lg border text-xs font-black tracking-widest ${step.badgeColor}`}>
                      STEP {step.stepNumber}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector hint for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                    <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 shadow-sm">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
