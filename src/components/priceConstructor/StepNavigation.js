const StepNavigation = ({ currentStep, onStepChange, completedSteps }) => {
  return (
    <header className="price-constructor__header">
      <button
        className={`price-constructor__nav ${currentStep === 0 ? 'price-constructor__nav--active' : ''}`}
        onClick={() => onStepChange(0)}
      >
        Make/model/year of the car
      </button>

      <button
        className={`price-constructor__nav ${currentStep === 1 ? 'price-constructor__nav--active' : ''}`}
        onClick={() => onStepChange(1)}
        disabled={!completedSteps[0]} 
      >
        Color preference
      </button>

      <button
        className={`price-constructor__nav ${currentStep === 2 ? 'price-constructor__nav--active' : ''}`}
        onClick={() => onStepChange(2)}
        disabled={!completedSteps[1]} 
      >
        Set description
      </button>
    </header>
  );
};

export default StepNavigation;
