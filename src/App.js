
import React, { useState } from 'react';
import './form.css';
import Step1 from './components/step1';
import Step2 from './components/step2';
import Step3 from './components/step3';
import Confirmation from './components/confirmation';





const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    address: '',
    city: '',
  });

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  switch (currentStep) {
    case 1:
      return <Step1 nextStep={nextStep} handleChange={handleChange} formData={formData} />;
    case 2:
      return <Step2 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />;
    case 3:
      return <Step3 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />;
    case 4:
      return <Confirmation formData={formData} prevStep={prevStep} />;
    default:
      return <Step1 nextStep={nextStep} handleChange={handleChange} formData={formData} />;
  }
};

export default App;
