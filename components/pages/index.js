import { motion } from 'framer-motion';
import { useState } from 'react';
import Stepper from '../components/Stepper';
import Step1 from '../components/step1';
import Step2 from '../components/step2';
import Step3 from '../components/step3';
import Step4 from '../components/step4';

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    <Step1 />,
    <Step2 />,
    <Step3 />,
    <Step4 />,
  ];

  return (
    <div>
      <Stepper currentStep={currentStep} />
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
      >
        {steps[currentStep]}
      </motion.div>
      <div className="flex justify-between mt-4">
        <button
          disabled={currentStep === 0}
          onClick={() => setCurrentStep((prev) => prev - 1)}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          Back
        </button>
        <button
          disabled={currentStep === steps.length - 1}
          onClick={() => setCurrentStep((prev) => prev + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}
