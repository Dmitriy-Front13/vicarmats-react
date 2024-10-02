const StepNavigation = ({ currentStep, onStepChange, completedSteps }) => {
  return (
    <header className="price-constructor__header">
      {/* Кнопка для первого шага всегда активна */}
      <button
        className={`price-constructor__nav ${currentStep === 1 ? 'price-constructor__nav--active' : ''}`}
        onClick={() => onStepChange(1)}
      >
        Make/model/year of the car
      </button>

      {/* Кнопка для второго шага активна, если первый шаг завершён */}
      <button
        className={`price-constructor__nav ${currentStep === 2 ? 'price-constructor__nav--active' : ''}`}
        onClick={() => onStepChange(2)}
        disabled={!completedSteps[0] && currentStep !== 2} // Блокируем, если первый шаг не завершён
      >
        Color preference
      </button>

      {/* Кнопка для третьего шага активна, если второй шаг завершён */}
      <button
        className={`price-constructor__nav ${currentStep === 3 ? 'price-constructor__nav--active' : ''}`}
        onClick={() => onStepChange(3)}
        disabled={!completedSteps[1] && currentStep !== 3} // Блокируем, если второй шаг не завершён
      >
        Set description
      </button>
    </header>
  );
};

export default StepNavigation;
