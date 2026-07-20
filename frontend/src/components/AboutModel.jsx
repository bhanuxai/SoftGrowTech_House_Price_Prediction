import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  Cpu, 
  Layers, 
  DollarSign, 
  Calendar, 
  LayoutGrid, 
  Bed, 
  Users, 
  UserCheck, 
  MapPin, 
  Globe, 
  CheckCircle2, 
  BarChart3, 
  BookOpen 
} from 'lucide-react';

const featureCards = [
  {
    name: 'Median Income (MedInc)',
    unit: '$10,000s / Year',
    icon: DollarSign,
    description: 'Median household income within the block group. Strongly correlated with house valuation.',
    weight: 'High Positive Weight (+0.436)',
  },
  {
    name: 'House Age (HouseAge)',
    unit: 'Years',
    icon: Calendar,
    description: 'Median age of housing units in the block. Reflects property maturity and vintage character.',
    weight: 'Positive Weight (+0.009)',
  },
  {
    name: 'Average Rooms (AveRooms)',
    unit: 'Rooms / Dwelling',
    icon: LayoutGrid,
    description: 'Average total number of rooms per household including living spaces and utility rooms.',
    weight: 'Moderate Weight (-0.107)',
  },
  {
    name: 'Average Bedrooms (AveBedrms)',
    unit: 'Bedrooms / Dwelling',
    icon: Bed,
    description: 'Average number of dedicated bedrooms per residential unit.',
    weight: 'Positive Weight (+0.645)',
  },
  {
    name: 'Population (Population)',
    unit: 'Total Block Residents',
    icon: Users,
    description: 'Total count of people residing within the census block group.',
    weight: 'Minor Density Weight',
  },
  {
    name: 'Average Occupancy (AveOccup)',
    unit: 'Members / Household',
    icon: UserCheck,
    description: 'Average number of household members living together in each home.',
    weight: 'Occupancy Density Factor',
  },
  {
    name: 'Latitude (Latitude)',
    unit: 'Degrees North',
    icon: MapPin,
    description: 'Spatial coordinate specifying north-south geographic position in California.',
    weight: 'Spatial Geographic Coordinate',
  },
  {
    name: 'Longitude (Longitude)',
    unit: 'Degrees West',
    icon: Globe,
    description: 'Spatial coordinate specifying east-west geographic position relative to coast.',
    weight: 'Coastal Proximity Factor',
  },
];

const AboutModel = () => {
  return (
    <section id="about-model" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200/70 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-4 h-4 text-brand-600" />
            <span>Technical Documentation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About The Machine Learning Model
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            Built using Python Scikit-Learn, trained on census data to provide interpretable, high-speed housing valuation.
          </p>
        </div>

        {/* Dataset & Algorithm Overview Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: Dataset Used */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 shadow-soft-sm relative flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-600 text-white flex items-center justify-center shadow-md">
                  <Database className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-brand-600 uppercase tracking-wider block">Benchmark Dataset</span>
                  <h3 className="text-xl font-extrabold text-slate-900">California Housing Dataset</h3>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Derived from the 1990 U.S. Census, this benchmark dataset contains 20,640 block group records across California. Each record aggregate encompasses median income, house age, room counts, and exact spatial coordinates.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200/70">
                <div>
                  <span className="text-xs text-slate-500 font-medium block">Total Sample Count</span>
                  <span className="text-lg font-extrabold text-slate-900">20,640 Records</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-medium block">Target Variable</span>
                  <span className="text-lg font-extrabold text-slate-900">Median House Value</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Algorithm Used */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 shadow-soft-sm relative flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block">Supervised Learning</span>
                  <h3 className="text-xl font-extrabold text-slate-900">Linear Regression Algorithm</h3>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Utilizes Ordinary Least Squares (OLS) optimization to fit a continuous linear decision boundary. The mathematical objective minimizes residual sum of squares between observed prices and vector projection predictions:
              </p>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center font-mono text-sm text-slate-800 mb-6 font-semibold shadow-inner">
                y = β₀ + β₁X₁ + β₂X₂ + ... + β₈X₈ + ε
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200/70">
                <div>
                  <span className="text-xs text-slate-500 font-medium block">Optimization Method</span>
                  <span className="text-lg font-extrabold text-slate-900">Ordinary Least Squares</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-medium block">Model Latency</span>
                  <span className="text-lg font-extrabold text-emerald-600">&lt; 1ms Inference</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* 8 Feature Cards Grid */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">8 Input Features Breakdown</h3>
              <p className="text-sm text-slate-500 mt-1">Each feature contributes to the final price prediction vector</p>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold">
              <Layers className="w-4 h-4 text-brand-600" />
              <span>Full Parameter Matrix</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featureCards.map((feat, index) => {
              const IconComponent = feat.icon;
              return (
                <motion.div
                  key={feat.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-soft-sm hover:shadow-soft-md transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 rounded-xl bg-brand-50 text-brand-600 border border-brand-100">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-600 uppercase bg-slate-100 px-2 py-0.5 rounded-md">
                        {feat.unit}
                      </span>
                    </div>

                    <h4 className="font-bold text-slate-900 text-sm mb-1.5">{feat.name}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">{feat.description}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 text-[11px] font-semibold text-brand-600 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{feat.weight}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutModel;
