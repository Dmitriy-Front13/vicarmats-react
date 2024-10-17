import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import Select from 'react-select';

import { updateCarMake, updateCarModel, updateCarYear } from '../priceConstructorSlice';

import step1 from '../../../assets/images/priceConstructor/step-1.jpg';

const carOptions = [
  { value: '98', label: 'Acura' },
  { value: '3', label: 'Alfa Romeo' },
  { value: '5', label: 'Aston Martin' },
  { value: '6', label: 'Audi' },
  { value: '8', label: 'Bentley' },
  { value: '9', label: 'BMW' },
  { value: '109', label: 'Bugatti' },
  { value: '110', label: 'Buick' },
  { value: '11', label: 'Cadillac' },
  { value: '13', label: 'Chevrolet' },
  { value: '14', label: 'Chrysler' },
  { value: '118', label: 'Dodge' },
  { value: '22', label: 'Ferrari' },
  { value: '23', label: 'Fiat' },
  { value: '3444', label: 'Fisker' },
  { value: '24', label: 'Ford' },
  { value: '2604', label: 'Genesis' },
  { value: '123', label: 'GMC' },
  { value: '28', label: 'Honda' },
  { value: '127', label: 'Hummer' },
  { value: '29', label: 'Hyundai' },
  { value: '128', label: 'Infiniti' },
  { value: '30', label: 'Isuzu' },
  { value: '31', label: 'Jaguar' },
  { value: '32', label: 'Jeep' },
  { value: '33', label: 'Kia' },
  { value: '35', label: 'Lamborghini' },
  { value: '37', label: 'Land Rover' },
  { value: '38', label: 'Lexus' },
  { value: '135', label: 'Lincoln' },
  { value: '6317', label: 'Lucid' },
  { value: '45', label: 'Maserati' },
  { value: '46', label: 'Maybach' },
  { value: '47', label: 'Mazda' },
  { value: '3101', label: 'McLaren' },
  { value: '48', label: 'Mercedes-Benz' },
  { value: '144', label: 'Mercury' },
  { value: '49', label: 'MG' },
  { value: '147', label: 'MINI' },
  { value: '52', label: 'Mitsubishi' },
  { value: '55', label: 'Nissan' },
  { value: '6131', label: 'Polestar' },
  { value: '149', label: 'Pontiac' },
  { value: '59', label: 'Porsche' },
  { value: '4369', label: 'Ram' },
  { value: '63', label: 'Rolls-Royce' },
  { value: '65', label: 'Saab' },
  { value: '331', label: 'Saturn' },
  { value: '3268', label: 'Scion' },
  { value: '70', label: 'Skoda' },
  { value: '71', label: 'Smart' },
  { value: '75', label: 'Subaru' },
  { value: '76', label: 'Suzuki' },
  { value: '2233', label: 'Tesla' },
  { value: '79', label: 'Toyota' },
  { value: '84', label: 'Volkswagen' },
  { value: '85', label: 'Volvo' },
];

const generateCarYears = () => {
  const now = new Date();
  const years = [];
  for (let i = 2000; i <= now.getFullYear(); i++) {
    years.push({ value: i, label: i.toString() });
  }
  return years;
};

const carYearsOptions = generateCarYears();


const CarMakeForm = ({ onNext, currentStep }) => {
  const [models, setModels] = useState([]);
  const dispatch = useDispatch();
  const carMake = useSelector((state) => state.priceConstructor.carMake);
  const carModel = useSelector((state) => state.priceConstructor.carModel);
  const carYear = useSelector((state) => state.priceConstructor.carYear);

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      carMake: carMake,
      carModel: carModel,
      carYear: carYear
    }
  });

  const onSubmit = (data) => {
    dispatch(updateCarMake(data.carMake));
    dispatch(updateCarModel(data.carModel));
    dispatch(updateCarYear(data.carYear));
    onNext();
  };

  const handleMakeChange = async (selectedOption, onChange) => {
    onChange(selectedOption);
    dispatch(updateCarMake(selectedOption));
    dispatch(updateCarModel(''));

    const apiUrl = `https://api.auto.ria.com/categories/1/marks/${selectedOption.value}/models`;
    try {
      const response = await axios.get(apiUrl);
      const modelsOptions = response.data.map((model) => ({
        value: model.value,
        label: model.name,
      }));
      setModels(modelsOptions);
    } catch (error) {
      console.error('Ошибка при загрузке моделей:', error);
    }
  };

  return (
    <form className={`price-constructor__step constructor-step ${currentStep === 0 ? 'price-constructor__step--active' : ''}`}
      onSubmit={handleSubmit(onSubmit)}>
      <h3 className="constructor-step__title">Find your car from the list below</h3>
      <div className="constructor-step__image">
        <img src={step1} alt="Step 1 descriptive image" />
      </div>
      <div className="constructor-step__fields">
        <h4 className="constructor-step__field-title">Fill out the form to verify:</h4>
        <div className="constructor-step__field form-field">
          <Controller
            name="carMake"
            control={control}
            rules={{ required: 'Car make is required' }}
            render={({ field }) => (
              <Select
                {...field}
                options={carOptions}
                onChange={(selectedOption) => handleMakeChange(selectedOption, field.onChange)}
                blurInputOnSelect={true}
                aria-label='Car make'
                placeholder='Car make'
                classNamePrefix="car-make"
                maxMenuHeight={210}
                autoFocus={false}
              />
            )}
          />
          {errors.carMake && <span className="form-help">{errors.carMake.message}</span>}
        </div>
        <div className="constructor-step__field form-field">
          <Controller
            name="carModel"
            control={control}
            rules={{ required: 'Car model is required' }}
            render={({ field }) => (
              <Select
                {...field}
                options={carMake ? models : [{ value: '', label: 'Please select car make', isDisabled: true }]}
                blurInputOnSelect={true}
                aria-label='Car model'
                placeholder='Car model'
                classNamePrefix="car-make"
                autoFocus={false}
                maxMenuHeight={210}
                classNames={{
                  option: (state) => state.isDisabled ? 'option-car-make--disabled' : ''
                }}
              />
            )}
          />
          {errors.carModel && <span className="form-help">{errors.carModel.message}</span>}
        </div>
        <div className="constructor-step__field form-field">
          <Controller
            name="carYear"
            control={control}
            rules={{ required: 'Car year is required' }}
            render={({ field }) => (
              <Select
                {...field}
                options={carYearsOptions}
                blurInputOnSelect={true}
                aria-label='Car year'
                autoFocus={false}
                placeholder='Car year'
                classNamePrefix="car-make"
                maxMenuHeight={210}
              />
            )}
          />
          {errors.carYear && <span className="form-help">{errors.carYear.message}</span>}
        </div>
        <button type="submit" className="constructor-step__button button">Next step</button>
      </div>
    </form>
  );
};


export default CarMakeForm;