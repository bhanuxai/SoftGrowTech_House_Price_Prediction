import React, { useState } from 'react';
import { 
  DollarSign, 
  Calendar, 
  LayoutGrid, 
  Bed, 
  Users, 
  UserCheck, 
  MapPin, 
  Globe, 
  Sparkles, 
  RotateCcw, 
  CheckCircle2, 
  AlertCircle, 
  Loader2,
  BookmarkCheck
} from 'lucide-react';
import { SAMPLE_PRESETS } from '../data/presets';

const initialFormState = {
  MedInc: '3.8700',
  HouseAge: '28',
  AveRooms: '5.4000',
  AveBedrms: '1.0800',
  Population: '1425',
  AveOccup: '3.0000',
  Latitude: '36.7783',
  Longitude: '-119.4179',
};

const formFieldsConfig = [
  {
    id: 'MedInc',
    label: 'Median Income',
    placeholder: 'e.g. 3.87',
    icon: DollarSign,
    unit: '($10,000s / yr)',
    min: 0.5,
    max: 15.0,
    step: '0.01',
    description: 'Median household income in tens of thousands USD (e.g. 3.87 = $38,700/yr)',
  },
  {
    id: 'HouseAge',
    label: 'House Age',
    placeholder: 'e.g. 28',
    icon: Calendar,
    unit: 'Years',
    min: 1,
    max: 100,
    step: '1',
    description: 'Median house age in the block',
  },
  {
    id: 'AveRooms',
    label: 'Average Rooms',
    placeholder: 'e.g. 5.4',
    icon: LayoutGrid,
    unit: 'Rooms / Home',
    min: 1.0,
    max: 20.0,
    step: '0.01',
    description: 'Average number of total rooms per dwelling',
  },
  {
    id: 'AveBedrms',
    label: 'Average Bedrooms',
    placeholder: 'e.g. 1.08',
    icon: Bed,
    unit: 'Bedrooms / Home',
    min: 0.5,
    max: 10.0,
    step: '0.01',
    description: 'Average number of bedrooms per dwelling',
  },
  {
    id: 'Population',
    label: 'Population',
    placeholder: 'e.g. 1425',
    icon: Users,
    unit: 'Residents',
    min: 5,
    max: 35000,
    step: '1',
    description: 'Total resident population in the neighborhood block',
  },
  {
    id: 'AveOccup',
    label: 'Average Occupancy',
    placeholder: 'e.g. 3.0',
    icon: UserCheck,
    unit: 'Members / Household',
    min: 1.0,
    max: 15.0,
    step: '0.01',
    description: 'Average number of household members',
  },
  {
    id: 'Latitude',
    label: 'Latitude',
    placeholder: 'e.g. 36.78',
    icon: MapPin,
    unit: 'Degrees N',
    min: 32.0,
    max: 42.5,
    step: '0.0001',
    description: 'Block latitude coordinate (California range: 32.5° to 42.0°)',
  },
  {
    id: 'Longitude',
    label: 'Longitude',
    placeholder: 'e.g. -119.42',
    icon: Globe,
    unit: 'Degrees W',
    min: -124.5,
    max: -114.0,
    step: '0.0001',
    description: 'Block longitude coordinate (California range: -124.5° to -114.0°)',
  },
];

const PredictionForm = ({ onPredict, isLoading }) => {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [selectedPreset, setSelectedPreset] = useState(null);

  const validateField = (name, value) => {
    if (value === '' || value === undefined) {
      return 'This field is required';
    }
    const num = parseFloat(value);
    if (isNaN(num)) {
      return 'Must be a valid number';
    }

    const fieldConfig = formFieldsConfig.find((f) => f.id === name);
    if (fieldConfig) {
      if (num < fieldConfig.min) {
        return `Minimum allowed is ${fieldConfig.min}`;
      }
      if (num > fieldConfig.max) {
        return `Maximum allowed is ${fieldConfig.max}`;
      }
    }
    return null;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSelectedPreset(null);

    // Validate on change
    const errorMsg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleApplyPreset = (preset) => {
    const formattedPreset = {};
    Object.keys(preset.values).forEach((key) => {
      formattedPreset[key] = String(preset.values[key]);
    });
    setFormData(formattedPreset);
    setErrors({});
    setSelectedPreset(preset.id);
  };

  const handleReset = () => {
    setFormData(initialFormState);
    setErrors({});
    setSelectedPreset(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields before submission
    const newErrors = {};
    let hasErrors = false;

    formFieldsConfig.forEach((field) => {
      const error = validateField(field.id, formData[field.id]);
      if (error) {
        newErrors[field.id] = error;
        hasErrors = true;
      }
    });

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    // Call prediction callback
    onPredict(formData);
  };

  // Income conversion hint helper
  const getIncomeFormatted = (medIncVal) => {
    const val = parseFloat(medIncVal);
    if (isNaN(val) || val <= 0) return null;
    return `$${Math.round(val * 10000).toLocaleString()}`;
  };

  return (
    <div id="prediction" className="scroll-mt-24">
      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-soft-xl border border-slate-200/90 relative overflow-hidden">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 text-brand-600 font-bold text-xs uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Real-Time Machine Learning Model</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              House Feature Parameters
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Fill in the California block housing details below or select a sample preset.
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 rounded-xl transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Form</span>
            </button>
          </div>
        </div>

        {/* Sample Presets Quick Fill */}
        <div className="mb-8 p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
          <div className="flex items-center gap-2 mb-3">
            <BookmarkCheck className="w-4 h-4 text-brand-600" />
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Quick Presets (Click to Auto-fill):
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {SAMPLE_PRESETS.map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => handleApplyPreset(preset)}
                className={`text-left p-3 rounded-xl border transition-all duration-200 ${
                  selectedPreset === preset.id
                    ? 'bg-brand-50 border-brand-500 ring-2 ring-brand-500/20 text-brand-900 shadow-sm'
                    : 'bg-white border-slate-200/80 hover:border-brand-300 hover:bg-brand-50/40 text-slate-700'
                }`}
              >
                <div className="font-semibold text-xs text-slate-900 truncate">{preset.name}</div>
                <div className="text-[10px] text-slate-500 mt-0.5 truncate">{preset.tagline}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Prediction Form */}
        <form onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {formFieldsConfig.map((field) => {
              const IconComponent = field.icon;
              const hasError = !!errors[field.id];
              const value = formData[field.id];

              return (
                <div key={field.id} className="flex flex-col">
                  {/* Label with Icon */}
                  <label
                    htmlFor={field.id}
                    className="flex items-center justify-between text-sm font-bold text-slate-800 mb-2"
                  >
                    <span className="flex items-center gap-2">
                      <span className="p-1.5 rounded-lg bg-brand-50 text-brand-600 border border-brand-100">
                        <IconComponent className="w-4 h-4" />
                      </span>
                      <span>{field.label}</span>
                    </span>
                    <span className="text-[11px] font-medium text-slate-500">{field.unit}</span>
                  </label>

                  {/* Input field with floating ring effect */}
                  <div className="relative">
                    <input
                      type="number"
                      id={field.id}
                      name={field.id}
                      value={value}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      step={field.step}
                      min={field.min}
                      max={field.max}
                      disabled={isLoading}
                      className={`w-full px-4 py-3.5 rounded-xl text-slate-900 text-sm font-semibold bg-white border transition-all duration-200 placeholder:text-slate-400 focus:outline-none ${
                        hasError
                          ? 'border-red-400 bg-red-50/20 focus:ring-4 focus:ring-red-500/15'
                          : 'border-slate-200/90 focus:border-brand-600 focus:ring-4 focus:ring-brand-500/15'
                      } ${isLoading ? 'opacity-60 cursor-not-allowed' : ''}`}
                    />

                    {/* Quick validation state icon */}
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                      {hasError ? (
                        <AlertCircle className="w-4 h-4 text-red-500" />
                      ) : value && !hasError ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      ) : null}
                    </div>
                  </div>

                  {/* Extra Helper Hints / Validation Message */}
                  <div className="mt-1.5 flex items-center justify-between text-[11px]">
                    {hasError ? (
                      <span className="text-red-500 font-medium flex items-center gap-1">
                        {errors[field.id]}
                      </span>
                    ) : (
                      <span className="text-slate-600 truncate">{field.description}</span>
                    )}

                    {/* Median Income special dollar display */}
                    {field.id === 'MedInc' && !hasError && getIncomeFormatted(value) && (
                      <span className="font-bold text-brand-600 bg-brand-50 px-1.5 py-0.5 rounded text-[10px]">
                        ≈ {getIncomeFormatted(value)} / yr
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Submit Button Section */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-600">
              <span className="font-semibold text-slate-700">Algorithm:</span> Linear Regression (OLS) | <span className="font-semibold text-slate-700">Features:</span> 8 Parameters
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full sm:w-auto px-9 py-4 rounded-2xl text-base font-bold text-white bg-brand-600 hover:bg-brand-700 shadow-soft-xl hover:shadow-glow-blue transition-all duration-300 transform active:scale-[0.98] hover:-translate-y-0.5 flex items-center justify-center gap-3 ${
                isLoading ? 'opacity-80 cursor-not-allowed transform-none' : 'hover:scale-[1.02]'
              }`}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin text-white" />
                  <span>Processing Model...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 text-white" />
                  <span>Predict Price</span>
                </>
              )}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default PredictionForm;
