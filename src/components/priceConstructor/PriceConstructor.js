import { useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import StepNavigation from './StepNavigation';
import CarMakeForm from './CarMakeForm';
import ColorForm from './ColorForm';

import './priceConstructor.scss';
import SetForm from './SetForm';

const PriceConstructor = () => {
  const { hash } = useLocation();
  const ref = useRef(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([false, false, false]);

  const handleStepChange = (step) => {
    if (step <= currentStep || completedSteps[step - 1]) {
      setCurrentStep(step);
    }
  };

  const completeStep = (step) => {
    const newCompletedSteps = [...completedSteps];
    if (step === 2) {
      newCompletedSteps[1] = true; 
      newCompletedSteps[2] = true; 
    } else {
      newCompletedSteps[step - 1] = true;
    }
    setCompletedSteps(newCompletedSteps);
    setCurrentStep(step + 1);
  };

  useEffect(() => {
    if (hash) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <section ref={ref} className="section price-constructor">
      <div className="container">
        <h2 className="section__title price-constructor__title">Car Mat Customization</h2>
        <p className="section__sub-title price-constructor__title">Set descriptions and prices are at step 3</p>

        <div className="price-constructor__holder">
          <StepNavigation currentStep={currentStep} onStepChange={handleStepChange} completedSteps={completedSteps} />

          <div id="price-constructor-form" className="price-constructor__form">
            {currentStep === 1 && <CarMakeForm onNext={() => completeStep(1)} />}
            {currentStep === 2 && <ColorForm onNext={() => completeStep(2)} />}
            {currentStep === 3 && <SetForm />}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PriceConstructor;