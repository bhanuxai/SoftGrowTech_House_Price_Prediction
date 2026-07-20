import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PredictionForm from './components/PredictionForm';
import PredictionResult from './components/PredictionResult';
import HowItWorks from './components/HowItWorks';
import AboutModel from './components/AboutModel';
import Footer from './components/Footer';
import { predictHousePrice } from './services/api';

function App() {
  const [predictionResult, setPredictionResult] = useState(null);
  const [currentInputData, setCurrentInputData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const handlePredict = async (formData) => {
    setIsLoading(true);
    setErrorMsg(null);
    setCurrentInputData(formData);

    try {
      const response = await predictHousePrice(formData);
      setPredictionResult(response);

      // Smoothly scroll down to prediction result card
      setTimeout(() => {
        const resultElement = document.getElementById('prediction-result-card');
        if (resultElement) {
          resultElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 100);
    } catch (err) {
      console.error('Prediction failed:', err);
      setErrorMsg('Failed to process prediction. Please check your inputs and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPrediction = () => {
    setPredictionResult(null);
    setCurrentInputData(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] text-slate-800 font-sans selection:bg-brand-500 selection:text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        
        {/* Hero Section */}
        <Hero />

        {/* Prediction Form & Result Container */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-transparent via-blue-50/20 to-transparent">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Form */}
            <PredictionForm onPredict={handlePredict} isLoading={isLoading} />

            {/* Error Banner */}
            {errorMsg && (
              <div className="mt-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm font-semibold text-center">
                {errorMsg}
              </div>
            )}

            {/* Prediction Result Card */}
            {predictionResult && (
              <div id="prediction-result-card">
                <PredictionResult
                  result={predictionResult}
                  inputData={currentInputData}
                  onReset={handleResetPrediction}
                />
              </div>
            )}

          </div>
        </section>

        {/* How It Works Timeline */}
        <HowItWorks />

        {/* About Model Technical Section */}
        <AboutModel />

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
