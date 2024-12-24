import { motion } from 'framer-motion';

export default function Stepper({ currentStep }) {
  const steps = ['Personal Info', 'Address', 'Preferences', 'Review'];

  return (
    <div className="flex items-center justify-between">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          className={`flex-1 p-2 text-center ${
            index <= currentStep ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {step}
        </motion.div>
      ))}
    </div>
  );
}
