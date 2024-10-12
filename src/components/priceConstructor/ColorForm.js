import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import { updateCarpetColor, updateCarpetTrim } from './priceConstructorSlice';

const carpetColorItems = [
  { value: 'black', label: 'Black' },
  { value: 'gray', label: 'Grey' },
  { value: 'blue', label: 'Blue' },
  { value: 'brown', label: 'Brown' },
  { value: 'red', label: 'Red' },
  { value: 'beige', label: 'Beige' },
  { value: 'haki', label: 'Haki', isDisabled: true },
  { value: 'darkblue', label: 'Dark Blue', isDisabled: true },
  { value: 'orange', label: 'Orange', isDisabled: true },
];
const trimColorItems = [
  { value: 'black', label: 'Black' },
  { value: 'blue', label: 'Blue' },
  { value: 'red', label: 'Red' },
  { value: 'gray', label: 'Grey' },
  { value: 'beige', label: 'Beige' },
  { value: 'brown', label: 'Brown' },
  { value: 'white', label: 'White', isDisabled: true },
  { value: 'orange', label: 'Orange', isDisabled: true },
  { value: 'green', label: 'Green', isDisabled: true },
  { value: 'yellow', label: 'Yellow', isDisabled: true },
];

const ColorForm = ({ onNext, currentStep }) => {
  const dispatch = useDispatch();
  const carpetColor = useSelector((state) => state.priceConstructor.carpetColor);
  const carpetTrim = useSelector((state) => state.priceConstructor.carpetTrim);

  const handleSubmit = (event) => {
    event.preventDefault();
    onNext();
  };

  const getImageSrc = () => {
    try {
      return require(`../../assets/images/priceConstructor/color-combinations/${!carpetColor ? 'beige' : carpetColor}-${!carpetTrim ? 'beige' : carpetTrim}.jpg`);
    } catch (error) {
      return require('../../assets/images/priceConstructor/color-combinations/beige-beige.jpg');
    };
  };
  return (
    <form className={`price-constructor__step constructor-step ${currentStep === 1 ? 'price-constructor__step--active' : ''}`}
      onSubmit={handleSubmit}>
      <h3 className="constructor-step__title">Personalize the colour of your future car mats</h3>
      <div className="constructor-step__image--step2">
        <img
          src={getImageSrc()}
          alt="Step 2 color-scheme" />
      </div>
      <div className="constructor-step__fields">
        <h4 className="constructor-step__field-title">Pick a colour combination to see the result</h4>
        <div className="constructor-step__field form-field">
          <Select
            options={carpetColorItems}
            onChange={(option) => {
              dispatch(updateCarpetColor(option.value));
            }}
            value={carpetColorItems.find((item) => item.value === carpetColor)}
            blurInputOnSelect={true}
            autoFocus={false}
            aria-label="Carpet color"
            placeholder="Carpet color"
            classNamePrefix="car-make"
            maxMenuHeight={210}
            required
          />
        </div>
        <div className="constructor-step__field form-field">
          <Select
            options={trimColorItems}
            onChange={(option) => dispatch(updateCarpetTrim(option.value))}
            value={trimColorItems.find(item => item.value === carpetTrim)}
            blurInputOnSelect={true}
            autoFocus={false}
            aria-label='Carpet color'
            placeholder='Carpet color'
            classNamePrefix="car-make"
            maxMenuHeight={210}
            required
          />
        </div>
        <button type="submit"
          className="constructor-step__button button">Next step</button>
      </div>
    </form>
  )
}

export default ColorForm;