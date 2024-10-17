import React from 'react';

const StepNavigation = ({ currentStep, onStepChange, completedSteps }) => {
  const steps = [
    "Make/model/year of the car",
    "Color preference",
    "Set description"
  ];

  // Функция для переключения шагов при нажатии на стрелки
  const handleNextStep = () => {
    if (currentStep < steps.length - 1 && completedSteps[currentStep]) {
      onStepChange(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      onStepChange(currentStep - 1);
    }
  };

  return (
    <>
      {/* Десктопная версия навигации */}
      <header className="price-constructor__header">
        {steps.map((step, index) => (
          <button
            key={index}
            className={`price-constructor__nav ${currentStep === index ? 'price-constructor__nav--active' : ''}`}
            onClick={() => onStepChange(index)}
            disabled={index !== 0 && !completedSteps[index - 1]}
          >
            {step}
          </button>
        ))}
      </header>
      {/* Мобильная версия навигации */}
      <div className="price-constructor__mobile-menu">
        <button
          type="button"
          className="price-constructor__mobile-button price-constructor__mobile-button--left"
          onClick={handlePreviousStep}
          disabled={currentStep === 0} // Отключаем кнопку, если на первом шаге
        >
          <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <path fill="currentColor"
              d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z">
            </path>
          </svg>
        </button>

        {/* Отображение текущего шага */}
        <div className="price-constructor__mobile-nav">
          {steps[currentStep]}
        </div>

        <button
          type="button"
          className="price-constructor__mobile-button price-constructor__mobile-button--right"
          onClick={handleNextStep}
          disabled={currentStep === steps.length - 1 || !completedSteps[currentStep]} // Отключаем кнопку, если на последнем шаге или предыдущий шаг не завершен
        >
          <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <path fill="currentColor"
              d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z">
            </path>
          </svg>
        </button>
      </div>
    </>
  );
};

export default StepNavigation;
